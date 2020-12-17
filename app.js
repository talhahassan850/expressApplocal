var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =require("mongoose");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//expressapp
mongoose
  .connect(
    "mongodb://talhahassan:talhahassan@cluster0-shard-00-00.gweu2.mongodb.net:27017,cluster0-shard-00-01.gweu2.mongodb.net:27017,cluster0-shard-00-02.gweu2.mongodb.net:27017/A1?ssl=true&replicaSet=atlas-t8bqss-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true
    ,useFindAndModify: false, useCreateIndex: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
/*mongoose.connect("mongodb://localhost/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
  })
  .then(async () => {
     console.log("Connection to MongoDB created");
    })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });*/
module.exports = app;

