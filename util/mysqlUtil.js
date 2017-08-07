var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'test'
});

module.exports.getPool = function() {
    return pool;
};