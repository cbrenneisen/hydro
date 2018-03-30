/**
 * Created by carlos.brenneisen on 5/24/17.
 */

module.exports = function(app, persistence) {

    const base = "/api/patients";

    //all patients
    app.get(base, (request, response) => {
        persistence.allPatients()
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving patients:", error);
                response.json([]);
            });
    });

    //specific patient
    app.get(base + "/:mrn", (request, response) => {
        persistence.singlePatient(request.params.mrn)
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving patients:", error);
                response.json([]);
            });
    });


};