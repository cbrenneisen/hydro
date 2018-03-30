/**
 * Created by carlos.brenneisen on 5/24/17.
 */

let mongoClient;
let mongoUrl;

//Collections
const patientsCol = "patients";
const findingsCol = "findings";
const complaintsCol = "complaints";

module.exports = function(client, dbUrl) {

    mongoClient = client;
    mongoUrl = dbUrl;

    //patients
    this.allPatients = function(){
        //return partial info
        return fetchData(patientsCol, {}, {'_id': false, 'mrn': true, 'name': true}, {name: 1})
    };

    this.singlePatient = function(mrn){
        //return all info
        return fetchData(patientsCol, { mrn: mrn }, {'_id': false}, {}, true)
    };

    //complaints
    this.complaints = function(mrn=""){

        if (mrn !== ""){
            //TODO: return different request
        }
        return fetchData(complaintsCol, {}, {'_id': false}, {}, false)
    };

    //findings
    this.allFindings = function(mrn=""){

        if (mrn !== ""){
            //TODO: return different request
        }
        return fetchData(findingsCol, {}, {'_id': false}, {}, false)
    };

    this.vitals = function(mrn=""){

        let query = { category: "VITAL"};
        if (mrn !== ""){
            //TODO: return different request
        }
        return fetchData(findingsCol, query, {'_id': false}, {}, false)
    };

    this.labResults = function(mrn=""){

        let query = { category: "LAB"};
        if (mrn !== ""){
            //TODO: return different request
        }
        return fetchData(findingsCol, query, {'_id': false}, {}, false)
    };

    this.problems = function(mrn=""){

        let query = { category: "PROBLEM"};
        if (mrn !== ""){
            //TODO: return different request
        }
        return fetchData(findingsCol, query, {'_id': false}, {}, false)
    };
};

//private functions
function fetchData(collection, query, params, sort, single=false){

    return new Promise(function(resolve, reject) {
        mongoClient.connect(mongoUrl, function(err, db) {

            if (err) {
                reject(err);
                return
            }

            db.collection(collection).find(query, params).sort(sort).toArray(function(err, result) {
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
