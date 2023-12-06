const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.v6feek1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Verbindungsfehler mit MongoDB:'));
db.once('open', () => {
  console.log('Erfolgreich mit MongoDB verbunden!');
});
