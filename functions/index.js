const functions = require('firebase-functions');
const app = require('express')();

const Authenticate = require('./middlewares/authenticate');
const {
  getAllScreams,
  createScream,
  getScream,
  likeScream,
  unlikeScream,
  deleteScream,
} = require('./handlers/screams');
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require('./handlers/users');

const { addCommentOnScream } = require('./handlers/comments');

// Screams routes
app.get('/screams', getAllScreams);
app.post('/scream', Authenticate, createScream);
app.get('/scream/:screamId', getScream);
app.post('/scream/:screamId/comment', Authenticate, addCommentOnScream);
app.get('/scream/:screamId/like', Authenticate, likeScream);
app.get('/scream/:screamId/unlike', Authenticate, unlikeScream);
app.delete('/scream/:screamId', Authenticate, deleteScream);
// TODO delete scream
// TODO like a scream
// TODO unlike a scream

// Users routes
app.post('/signup', signUp);
app.post('/login', login);
app.post('/user/image', Authenticate, uploadImage);
app.post('/user', Authenticate, addUserDetails);
app.get('/user', Authenticate, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
