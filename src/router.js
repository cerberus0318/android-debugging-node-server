const express = require("express");
// Create a router to handle routes
const router = express.Router();

const fs = require('fs');

// Define a route that responds with a JSON object when a GET request is made to the root path

router.get('/', (req, res) => {
  fs.readFile('log.json', (err, data) => {
    if (err) throw err;
    console.log(err)
    res.setHeader('Content-Type', 'text/html')
    res.write("<html><body>" + data.toString().replaceAll("}", "}<br>") + "</body></html>");
    res.end()
  });
})

router.post('/', (req, res) => {
  fs.appendFile('log.json', JSON.stringify(req.query), (err) => {
    if (err) throw err;
    console.log('Users saved!');
  });
  res.send();
})

router.get('/reset', (req, res) => {
  fs.writeFile('log.json', "", (err) => { })
  res.send("reset")
})

module.exports = router;