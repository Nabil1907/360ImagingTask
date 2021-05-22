// DECLARE EXPRESS , PATH , MONGOOSE , CORS , MONOGO DB PATH AND BODY PARSER 
let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/database/db');
mongoose.Promise = global.Promise;

// ADD CONNECTION DATA BASE 
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
},
    error => {
        console.log('Database error: ' + error)
    }
)
// ADDING PATH OF FILE POST ROUTES 
const postRoute = require('./routers/routers');
// INTIALIZE EXPRESS 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
// ADDING POST ROUTES ON EXPRESS 
app.use('',postRoute);

// INITIALIZE PORT 8000 
const port = process.env.PORT || 8000;
// RUN ON THE PORT
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
