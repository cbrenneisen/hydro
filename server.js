/**
 * Created by carlos.brenneisen on 5/22/17.
 */

const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/api/patients', (req, res) => {
    res.json([
            {
                name: 'Beverly Hazzard',
                mrn: '2009527'
            },
            {
                name: 'Mary Hernandez',
                mrn: '2009528'
            },
            {
                name: 'Susan Shade',
                mrn: '2009529'
            },
            {
                name: 'Mitchell Matthews',
                mrn: '2009530'
            },
            {
                name: 'Angela Williams',
                mrn: '2009531'
            },
            {
                name: 'James Gorham',
                mrn: '2009532'
            }
        ]);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});