const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/public/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/requests');
app.use('/requests', authRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
