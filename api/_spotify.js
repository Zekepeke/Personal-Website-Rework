const TOKEN_URL = 'https://accounts.spotify.com/api/token'

export async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  })

  if (!response.ok) {
    throw new Error(`Spotify token request failed: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

export function shapeTrack(track) {
  if (!track) return null

  return {
    title: track.name ?? '',
    artist: (track.artists ?? []).map((a) => a.name).join(', '),
    art: track.album?.images?.[0]?.url ?? null,
    url: track.external_urls?.spotify ?? null,
  }
}
