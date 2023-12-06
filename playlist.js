const axios = require('axios');

async function getPlaylistTracks(accessToken, playlistId) {
  const apiUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

  let allTracks = [];
  let nextUrl = apiUrl;

  while (nextUrl) {
    try {
      const response = await axios.get(nextUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const tracks = response.data.items.map(item => {
        return {
          name: item.track.name,
          artist: item.track.artists.map(artist => artist.name).join(', '),
          releaseDate: item.track.album.release_date,
          coverUrl: item.track.album.images.length > 0 ? item.track.album.images[0].url : null,
          previewUrl: item.track.preview_url
        };
      });

      allTracks = allTracks.concat(tracks);
      nextUrl = response.data.next;
    } catch (error) {
      throw new Error(`Fehler beim Abrufen der Playlist-Tracks: ${error.response.data}`);
    }
  }

  return allTracks;
}

module.exports = {
  getPlaylistTracks,
};
