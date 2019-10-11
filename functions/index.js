const functions = require('firebase-functions');
const app = require('express')();

const Authenticate = require('./middlewares/authenticate');
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');

// Screams routes
app.get('/screams', getAllScreams);
app.post('/scream', Authenticate, postOneScream);

// Users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', Authenticate, uploadImage);

exports.api = functions.https.onRequest(app);
