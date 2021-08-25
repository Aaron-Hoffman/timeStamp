// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// const myApp = require('./app.js');

//  Create json response object for any date

const getDate = (input=null) => {
  // Convert to number if neccessary 
  if (Number(input) !== NaN) {
    input = Number(input);
  }

  if (input !== null) {
      const date = new Date(input);
      if (date.toString() === 'Invalid Date') {
          return {error: 'Invalid Date'}
      } else { 
          return getObject(date);
      }    
  } else {
      const date = new Date();
      return getObject(date);
  }
}

const getObject = (date) => {
    const responseObject = {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    return responseObject;
}


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// app.get("/api/bye", function (req, res) {
//   res.json({greeting: 'bye API'});
// });

app.get("/api/:date", function(req, res) {
  res.json(getDate(req.params.date));
})

app.get("/api", function(req, res) {
  res.json(getDate());
})

app.get('/', function(req, res) {
  console.log('hello');
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
