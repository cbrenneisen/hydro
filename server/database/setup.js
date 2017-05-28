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

            let patients = require("./contents/patients.json");

            // let patients = [
            //     {
            //         name: 'Beverly Hazzard',
            //         mrn: '2009527'
            //     },
            //     {
            //         name: 'Mary Hernandez',
            //         mrn: '2009528'
            //     },
            //     {
            //         name: 'Susan Shade',
            //         mrn: '2009529'
            //     },
            //     {
            //         name: 'Mitchell Matthews',
            //         mrn: '2009530'
            //     },
            //     {
            //         name: 'Angela Williams',
            //         mrn: '2009531'
            //     },
            //     {
            //         name: 'James Gorham',
            //         mrn: '2009532'
            //     }
            // ];

            db.collection("patients").insertMany(patients, function (err, res) {
                if (err) {
                    db.close();
                    throw err;
                }

                console.log("added (" + res.insertedCount + ") patients");
                db.close();
            });
        });


        db.createCollection("findings", function(){

            let findings = require("./contents/findings.json");

            db.collection("findings").insertMany(findings, function (err, res) {
                if (err) {
                    db.close();
                    throw err;
                }

                console.log("added (" + res.insertedCount + ") findings");
                db.close();
            });
        });

        db.createCollection("complaints", function(){

            let findings = require("./contents/complaints.json");

            db.collection("complaints").insertMany(findings, function (err, res) {
                if (err) {
                    db.close();
                    throw err;
                }

                console.log("added (" + res.insertedCount + ") complaints");
                db.close();
            });
        });


    });
};