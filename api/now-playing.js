import { getAccessToken, shapeTrack } from './_spotify.js'

export default async function handler(req, res) {
  try {
    const token = await getAccessToken()

    const current = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (current.status === 200) {
      const data = await current.json()
      if (data?.item) {
        res.setHeader('Cache-Control', 's-maxage=20')
        return res.status(200).json({
          state: 'playing',
          ...shapeTrack(data.item),
          progress: data.progress_ms ?? 0,
          duration: data.item.duration_ms ?? 0,
        })
      }
    }

    const recent = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (recent.ok) {
      const data = await recent.json()
      const item = data?.items?.[0]
      if (item?.track) {
        res.setHeader('Cache-Control', 's-maxage=60')
        return res.status(200).json({
          state: 'recent',
          ...shapeTrack(item.track),
          playedAt: item.played_at ?? null,
        })
      }
    }

    return res.status(200).json({ state: 'idle' })
  } catch {
    return res.status(200).json({ state: 'idle' })
  }
}
