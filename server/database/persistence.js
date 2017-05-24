/**
 * Created by carlos.brenneisen on 5/24/17.
 */


module.exports = function(client, dbUrl) {

    this.allPatients = function(){

        return new Promise(function(resolve, reject) {
            client.connect(dbUrl, function(err, db) {

                if (err) {
                    reject(err);
                    db.close();
                    return
                }
                let sort = {name: 1};

                db.collection("patients").find({}, {'_id': false}).sort(sort).toArray(function(err, result) {
                    if (err) {
                        reject(err);
                        db.close();
                        return
                    }
                    resolve(result);
                    db.close();
                });
            });
        });
    };

    this.singlePatient = function(mrn){
        return new Promise(function(resolve, reject) {
            client.connect(dbUrl, function(err, db) {

                if (err) {
                    reject(err);
                    db.close();
                    return
                }
                let query = { mrn: mrn };

                db.collection("patients").find(query, {'_id': false}).toArray(function(err, result) {
                    if (err) {
                        reject(err);
                        db.close();
                        return
                    }

                    if (result.length > 0) {
                        resolve(result[0]);
                    }else{
                        reject("No such patient");
                    }

                    db.close();
                });
            });
        });
    };
};