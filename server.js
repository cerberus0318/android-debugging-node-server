const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// 
const fs = require('fs');

// 
app.get('/', (req, res) => {
  fs.readFile('log.json', (err, data) => {
    if (err) throw err;
    console.log(err)
    res.setHeader('Content-Type', 'text/html')
    res.write("<html><body>" + data.toString().replaceAll("}", "}<br>") + "</body></html>");
    res.end()
  });
})

app.post('/', (req, res) => {
  fs.appendFile('log.json', JSON.stringify(req.query), (err) => {
    if (err) throw err;
    console.log('Users saved!');
  });
  res.send();
})

app.get('/reset', (req, res) => {
  fs.writeFile('log.json', "", (err) => { })
  res.send("reset")
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
