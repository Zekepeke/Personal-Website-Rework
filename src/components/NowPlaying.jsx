import { nowPlaying } from '../constants/aboutData'

// Static placeholder — swap for a live Spotify API call later.
const NowPlaying = () => {
  const { art, track, artist } = nowPlaying

  return (
    <div className="flex items-center gap-4 py-3">
      <img
        src={art}
        alt=""
        width={48}
        height={48}
        loading="lazy"
        className="w-12 h-12 shrink-0 rounded-sm bg-black-300 object-cover"
      />
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-generalsans text-white-800 text-sm truncate">{track}</span>
        <span className="font-mono text-xs text-white-500 truncate">{artist}</span>
      </div>
    </div>
  )
}

export default NowPlaying
