const express = require('express');
const env = require('dotenv').config();
const connectdb = require('./db/connectdb');
const modelForthis = require('./models/modeschema');
const cors = require("cors");
const app = express();
const router = require('./routes/router');
//create connection
const db_url = "mongodb://localhost:27017"


app.use(cors());

//call database
connectdb(db_url);

//data will be in json formate
app.use(express.json());
const port = process.env.PORT || 8003;
app.use(router);


app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});