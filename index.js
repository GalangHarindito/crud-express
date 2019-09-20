const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const { port, secret } = require("./config/envVariables");
const indexRouter = require("./routes/index");

const PORT = port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/env", (req, res) => res.send(JSON.stringify(secret)));
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`this server running on port: ${PORT}`));
