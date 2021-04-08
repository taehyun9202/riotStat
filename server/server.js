const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "5"
const app = express();


// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.json());

require("./config/mongoose")(db_name);

app.listen(port, ()=> console.log(`Listening on port ${port}`))