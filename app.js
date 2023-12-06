// app.js
const express = require('express');
//const { getAccessToken } = require('./auth');
//const { getPlaylistTracks } = require('./playlist');
const Songs = require('./songModel');
const mongooseConnection = require('./db');
const ejs = require('ejs');
const session = require('express-session');

//const client_id = '9b053a6fd53a4ae1acc1810dc0dbb2b0';
//const client_secret = 'cddecf43d32144669c132aab3e222914';
//const redirect_uri = 'http://localhost:3000/callback';
const port = 3000;
//const playlistId = '0JiVp7Z0pYKI8diUV6HJyQ';

const app = express();

app.use(session( {
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// EJS als Vorlagen-Engine setzen
app.set('view engine', 'ejs');

/* Route für die Callback-URI
app.get('/callback', async (req, res) => {
  const authorizationCode = req.query.code;
  console.log('Authorization Code:', authorizationCode);

  try {
      const accessToken = await getAccessToken(client_id, client_secret, redirect_uri, authorizationCode);
      console.log('Access Token:', accessToken);

      req.session.accessToken = accessToken;

      const playlistTracks = await getPlaylistTracks(accessToken, playlistId);


      // Überprüfe, welche Songs bereits in der Datenbank vorhanden sind
      const existingSongs = await Songs.find({ trackId: { $in: playlistTracks.map(track => track.trackId) } });

      // Filtere die Playlist-Tracks, um nur diejenigen hinzuzufügen, die noch nicht in der Datenbank sind
      const newTracks = playlistTracks.filter(track => !existingSongs.some(existingTrack => existingTrack.trackId === track.trackId));

      if (newTracks.length > 0) {
          // Füge nur die neuen Playlist-Tracks zur Datenbank hinzu
          await Songs.insertMany(newTracks);
      } else {
          console.log('Alle Songs sind bereits in der Datenbank vorhanden.');
      }

      const randomIndex = Math.floor(Math.random() * existingSongs.length);
      const randomTrack = existingSongs[randomIndex];

      // Rendere die View mit den Playlist-Tracks
      res.render('index', { randomTrack, accessToken });
  } catch (error) {
      console.error(error.message);
      res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});


*/ 
// Route für die Anzeige eines zufälligen Songs
app.get('/randomSong', async (req, res) => {
    try {
      // Hole alle Songs aus der Datenbank
      const allSongs = await Songs.find();
  
      // Wähle einen zufälligen Song aus
      const randomIndex = Math.floor(Math.random() * allSongs.length);
      const randomTrack = allSongs[randomIndex];
  
      // Rendere die View mit dem zufälligen Song
      res.render('index', { randomTrack });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  });

// Starte den Server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Autorisierungs-URL erstellen
//const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private playlist-read-private`;

//console.log(`Bitte öffne diesen Link in deinem Browser und erlaube den Zugriff: ${authorizationUrl}`);
