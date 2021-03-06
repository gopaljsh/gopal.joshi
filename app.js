const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const resumeRoutes = require('./routes/resume');
const app = express();

//const Post = require('./models/post');
//const User = require('./models/user');

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//allow request to access image folder by request
app.use("/images", express.static(path.join("backend/images")));
app.use("/", express.static(path.join(__dirname, "angular")));

//MongoDb connection
const db = 'mongodb+srv://gopal:' + process.env.MONGO_ALTLAS_PW + '@cluster0-dr9sg.mongodb.net/test?retryWrites=true';
// mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true })
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.log(err);
    })
//mongoose.set('useCreateIndex', true); one more way to get rid of error like collection.ensureIndex is deprecated.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Content-Security-Policy", "default-src *; img-src *; script-src-elem *; style-src-elem * 'self' 'unsafe-inline'; style-src * 'self' 'unsafe-inline';");
  next();
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api", resumeRoutes);
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "angular", "index.html"));
// });

module.exports = app;
