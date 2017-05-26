/**
 * Created by carlos.brenneisen on 5/22/17.
 */

//Base Dependencies
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const fs = require('fs');

//MongoDB
const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/myproject';
require('./server/database/setup')(mongoClient, dbUrl);

//Server setup
const app = express();
app.set('port', (process.env.PORT || 3001));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(mongoSanitize()); //NoSQL injection protection

//Persistence Layer - should handle all DB requests and be passed to all route files
let DBPersistence = require('./server/database/persistence');
let persistence = new DBPersistence(mongoClient, dbUrl);

//Routes
require('./server/routes/patients')(app, persistence);

//Functionality
app.get('/', function (req, res) {
   res.send('Hello World');
});

//Start
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});