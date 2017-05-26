/**
 * Created by carlos.brenneisen on 5/24/17.
 */

let mongoClient;
let mongoUrl;

//Collections
const patientsCol = "patients";

module.exports = function(client, dbUrl) {

    mongoClient = client;
    mongoUrl = dbUrl;

    this.allPatients = function(){
        return fetchPatients({}, {'_id': false}, {name: 1})
    };

    this.singlePatient = function(mrn){

        return fetchPatients({ mrn: mrn }, {'_id': false}, {}, true)
    };
};

//private functions
function fetchPatients(query, params, sort, single=false){

    return new Promise(function(resolve, reject) {
        mongoClient.connect(mongoUrl, function(err, db) {

            if (err) {
                reject(err);
                return
            }

            db.collection(patientsCol).find(query, params).sort(sort).toArray(function(err, result) {
                if (err) {
                    reject(err);
                    db.close();
                    return
                }

                if (single){
                    //return a dictionary, not an array
                    if (result.length > 0) {
                        resolve(result[0])
                    }else {
                        reject("No record found");
                    }
                }else {
                    //return entire array
                    resolve(result);
                }
                db.close();
            });
        });
    });
}
