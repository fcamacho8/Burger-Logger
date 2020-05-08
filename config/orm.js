const connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
var orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table 
    }
}

module.exports = orm;