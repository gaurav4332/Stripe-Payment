
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Hello Ayushi ")
})

const stripe = require('stripe')('sk_test_51M9VwdSEbbGYK4pX2ihQJNRDl4gBwAbbcaBpxfCNBk9nR4ZH9v3LsJoXljiRYkgahTxM3Qx1TjDhT5AkXibis5wn008mXxseHW');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {

    const{amount , currency}= req.body
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});

app.listen(4002, ()=> console.log("Running on http://localhost:4002") )
