import { useEffect, useState } from 'react'
import useSpotify from '../hooks/useSpotify'

// Official Spotify logo mark — required alongside the widget per their
// developer branding guidelines (attribution for using their Web API).
const SpotifyMark = ({ className }) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.36-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.719-.66 13.439 1.62.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const Equalizer = ({ paused }) => (
  <span className="now-playing-eq" data-paused={paused ? 'true' : 'false'} aria-hidden="true">
    <span className="now-playing-eq-bar" />
    <span className="now-playing-eq-bar" />
    <span className="now-playing-eq-bar" />
  </span>
)

const NowPlaying = () => {
  const { now } = useSpotify()
  const [localProgress, setLocalProgress] = useState(0)

  // Resync local progress whenever a fresh poll comes in.
  useEffect(() => {
    if (now?.state === 'playing' && typeof now.progress === 'number') {
      setLocalProgress(now.progress)
    }
  }, [now?.progress, now?.state])

  // Tick the progress bar locally between polls.
  useEffect(() => {
    if (now?.state !== 'playing') return undefined
    const tick = setInterval(() => {
      setLocalProgress((p) => Math.min(p + 1000, now.duration ?? p))
    }, 1000)
    return () => clearInterval(tick)
  }, [now?.state, now?.duration])

  const isPlaying = now?.state === 'playing'
  const isRecent = now?.state === 'recent'
  const showTrack = isPlaying || isRecent

  if (!showTrack) return null

  const label = isPlaying ? 'Now playing' : 'Last played'
  const pct = isPlaying && now.duration ? Math.min((localProgress / now.duration) * 100, 100) : 0

  return (
    <div className="flex flex-col gap-2">
      <style>{`
        .now-playing-eq {
          display: inline-flex;
          align-items: flex-end;
          gap: 2px;
          height: 12px;
        }
        .now-playing-eq-bar {
          width: 2px;
          height: 100%;
          background: currentColor;
          animation: now-playing-bounce 0.9s ease-in-out infinite;
        }
        .now-playing-eq-bar:nth-child(1) { animation-delay: -0.6s; }
        .now-playing-eq-bar:nth-child(2) { animation-delay: -0.3s; }
        .now-playing-eq-bar:nth-child(3) { animation-delay: 0s; }
        .now-playing-eq[data-paused="true"] .now-playing-eq-bar {
          animation-play-state: paused;
        }
        @keyframes now-playing-bounce {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .now-playing-eq-bar { animation: none; transform: scaleY(0.7); }
        }
      `}</style>

      {showTrack && (
        <a
          href={now.url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 py-3"
        >
          <img
            src={now.art}
            alt=""
            width={48}
            height={48}
            loading="lazy"
            className="w-12 h-12 shrink-0 rounded-sm bg-black-300 object-cover"
            style={{ opacity: isPlaying ? 1 : 0.6 }}
          />
          <div className="flex flex-col gap-1.5 min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-white-500 flex items-center gap-1.5">
                {label}
                <SpotifyMark className="text-white-500" />
              </span>
              <span className="text-accent">
                <Equalizer paused={!isPlaying} />
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-3 min-w-0">
              <span className="font-generalsans text-white-800 text-sm truncate">{now.title}</span>
              <span className="font-mono text-xs text-white-500 truncate shrink-0">{now.artist}</span>
            </div>
            <div className="h-[2px] w-full bg-black-300 overflow-hidden">
              <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </a>
      )}
    </div>
  )
}

export default NowPlaying
