/**
 * Created by cbrenneisen on 5/26/17.
 */


module.exports = function(app, persistence) {

    const base = "/api/findings";

    //all findings
    app.get(base, (request, response) => {
        persistence.allFindings()
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving findings:", error);
                response.json([]);
            });
    });

    //all vital options
    app.get(base + "/vitals", (request, response) => {
        persistence.vitals()
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving vital options:", error);
                response.json([]);
            });
    });

    //all lab result options
    app.get(base + "/lab", (request, response) => {
        persistence.labResults()
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving lab options:", error);
                response.json([]);
            });
    });

    //all problem options
    app.get(base + "/problems", (request, response) => {
        persistence.problems()
            .then((val) => response.json(val))
            .catch(function(error) {
                console.log("error retrieving lab options:", error);
                response.json([]);
            });
    });



};