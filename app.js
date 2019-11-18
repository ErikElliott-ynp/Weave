const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("sup doggy"));

const port = process.env.PORT || 5000;