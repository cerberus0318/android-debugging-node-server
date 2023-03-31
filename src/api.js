const express = require("express");
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();
const router = require('./router');

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
