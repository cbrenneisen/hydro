/**
 * Created by carlos.brenneisen on 5/24/17.
 */

//Setup the database

module.exports = function(client, dbUrl){

    client.connect(dbUrl, function(err, db) {

        if (err) {
            db.close();
            throw err;
        }
        //clear database first, then recreate
        db.dropDatabase();

        db.createCollection("patients", function (err, res) {

            if (err) {
                db.close();
                throw err;
            }

            console.log("Table created!");

            let patients = [
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
            ];

            db.collection("patients").insertMany(patients, function (err, res) {
                if (err) {
                    db.close();
                    throw err;
                }

                console.log("added: " + res.insertedCount);
                db.close();
            });
        });
    });
};