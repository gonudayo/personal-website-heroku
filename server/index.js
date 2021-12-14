const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});