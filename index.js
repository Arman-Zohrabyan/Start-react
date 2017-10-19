const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/public/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes => to server
const authRoutes = require('./server/routes/requests');
app.use('/requests', authRoutes);

// routes => to client
app.use('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/server/public/index.html'));
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
