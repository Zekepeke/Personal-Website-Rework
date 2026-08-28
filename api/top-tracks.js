import { getAccessToken, shapeTrack } from './_spotify.js'

export default async function handler(req, res) {
  try {
    const token = await getAccessToken()

    const response = await fetch(
      'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
      { headers: { Authorization: `Bearer ${token}` } }
    )

    if (!response.ok) {
      return res.status(200).json({ tracks: [] })
    }

    const data = await response.json()
    const tracks = (data.items ?? []).map(shapeTrack)

    res.setHeader('Cache-Control', 's-maxage=21600')
    return res.status(200).json({ tracks })
  } catch {
    return res.status(200).json({ tracks: [] })
  }
}
