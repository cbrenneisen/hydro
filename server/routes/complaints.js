/**
 * Created by cbrenneisen on 5/28/17.
 */


module.exports = function(app, persistence) {

    const base = "/api/complaints";

    //all complaints
    app.get(base, (request, response) => {
        persistence.complaints()
            .then((val) => response.json(val))
            .catch(function (error) {
                console.log("error retrieving complaints:", error);
                response.json([]);
            });
    });
}