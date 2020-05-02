const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
// , { index: './client/index.html' }
const options = {
  index: false, // disable serving index.html default
};
app.use('/build', express.static(path.join(__dirname, '../build'), options));

// send the user index.html file
app.get('*', (req, res) => {
  console.log(req);
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port);
