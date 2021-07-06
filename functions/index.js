const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IQa1jHEMjPKITT4tHrLnTNiNylokqFJ2Usn2zm8Bt5Jvooz41K3PYyDg5Ta5PBzFiH7C5A3jZNZXN1WH1xohRym00IO963E92')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;
    console.log('payment of',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //Ok created
    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})
// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
//http://localhost:5001/clone-ae1ae/us-central1/api