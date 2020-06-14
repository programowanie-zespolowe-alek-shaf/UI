const express = require('express');
const path = require('path');
const stripe = require('stripe')('sk_test_9aOMWuR0bXxUII0i2fFGR0Lw00ra0VBJwQ');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'pln',
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port);
