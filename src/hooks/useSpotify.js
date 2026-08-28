import { useEffect, useState } from 'react'

const POLL_MS = 25000

export function useSpotify() {
  const [now, setNow] = useState(null)
  const [top, setTop] = useState([])

  useEffect(() => {
    let alive = true

    const fetchNow = async () => {
      try {
        const res = await fetch('/api/now-playing')
        const data = await res.json()
        if (alive) setNow(data)
      } catch {
        if (alive) setNow({ state: 'idle' })
      }
    }

    // Always fetch on mount; only the recurring poll skips while backgrounded.
    fetchNow()
    const interval = setInterval(() => {
      if (document.hidden) return
      fetchNow()
    }, POLL_MS)

    return () => {
      alive = false
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    let alive = true

    const fetchTop = async () => {
      try {
        const res = await fetch('/api/top-tracks')
        const data = await res.json()
        if (alive) setTop(data.tracks ?? [])
      } catch {
        if (alive) setTop([])
      }
    }

    fetchTop()

    return () => {
      alive = false
    }
  }, [])

  return { now, top }
}

export default useSpotify
