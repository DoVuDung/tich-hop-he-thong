var sql = require('mssql');
var sqlConfig = {
    server: 'ANDY\\LOCALDB',
    user: 'sa',
    password: 'a123456*',
    database: 'test',
    port: 1433,
    options: {
        encrypt: false
    }
};

function getList() {
    var conn = new sql.ConnectionPool(sqlConfig);

    conn.connect(function(err) {
        //if (err) throw err;
        var req = new sql.Request(conn);
        req.query('select * from Persons', function(err, recordset) {
            if (err) throw err;
            else
                console.log(recordset);
            conn.close();
        });

    });
};
getList();


// sql.connect(sqlConfig, function(err) {
//     if (err) { console.log(err); }
//     let sqlRequest = new sql.Request();
//     let sqlQuery = `select * from Persons`;
//     sqlRequest.query(sqlQuery, function(err, data) {
//         if (err) { console.log(err); }
//         console.table(data.recordset);
//     });
//     sql.close();
// });


// (async() => {
//     try {
//         // make sure that any items are correctly URL encoded in the connection string
//         await sql.connect(sqlConfig)
//         const result = await sql.query `select * from Personal`
//         console.log(result)
//     } catch (err) {
//         // ... error checks
//     }
// })();