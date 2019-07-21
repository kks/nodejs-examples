var express = require('express');
var router = express.Router();

router.get('/getriskInfo', function (req, res, next) {
    const sql = require('mssql')
    var sqlconfig = {
        user: "username",
        password: "password",
        server: "db_servername",
        database: "db_name",
        options: {
            encrypt: true
        }
    }

    var List = {};
    
    new sql.ConnectionPool(sqlconfig).connect().then(pool => {
        return pool.request().query("select id,EnglishName,ChineseName from [dbo].[vwTPM] where id < 16")
    }).then(result => {
        List.list = result.recordset;
        var response = { status: 1, data: List.list };
        res.send(JSON.stringify(response))
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        sql.close();
    }).catch(err => {
        res.status(500).send({ message: "${err}" })
        sql.close();
    });
});

module.exports = router;
