const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const env = require('dotenv');
env.config();

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

// 10분 간격 자동 접속
// const http = require("http");
// setInterval(function () {
//   http.get("http://gunwoo.herokuapp.com");
// }, 600000);

app.use(cors())

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

app.use('/api/charts', require('./routes/charts'));
app.use('/api/states', require('./routes/states'));

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, "/client/build")));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});