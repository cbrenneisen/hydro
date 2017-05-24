/**
 * Created by carlos.brenneisen on 5/22/17.
 */

//Base Dependencies
const express = require('express');
const fs = require('fs');

//MongoDB
const mongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/myproject';
require('./server/database/setup')(mongoClient, dbUrl);

//Persistence Layer - should handle all DB requests and be passed to all route files
let DBPersistence = require('./server/database/persistence');
let persistence = new DBPersistence(mongoClient, dbUrl);

//Server setup
const app = express();
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Routes
require('./server/routes/patients')(app, persistence);

app.get('/', function (req, res) {
   res.send('Hello World');
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});