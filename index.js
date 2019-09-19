const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const indexRouter = require('./routes/index')

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter)

app.listen(PORT, () => console.log(`this server running on port: ${PORT}`));
