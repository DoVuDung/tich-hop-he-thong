var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'admin',
        server: 'localhost',
        database: 'HR'
    };

    // connect to your database
    sql.connect(config, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        var result = request.query('select * from Personal', function(err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            console.log(recordset);

        });
        console.log(result);
    });
});

var server = app.listen(5000, function() {
    console.log('Server is running..');
});