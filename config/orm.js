const connection = require("./connection");


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    }
}

module.exports = orm;