var connect_DB = require('./connect_db')


function getDocList(res) {
    connect_DB.query("SELECT * FROM documents", function (err, result, fields) {
        if (err) throw err;
        res.json({docList: JSON.stringify(result)});
    });
}

module.exports = { getDocList };