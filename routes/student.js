var mysql = require('../util/mysqlUtil');
var pool = mysql.getPool();

exports.create = function (req, res) {
    var name = req.body.name;
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('INSERT INTO student (name) VALUES (?)', [name], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    });
};

exports.getAll = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT id, name FROM student', function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    });
};

exports.getById = function (req, res) {
    var id = req.params.rollno;
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT id, name FROM student WHERE id = ?', [id], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    });
};

exports.update = function (req, res) {
    var id = req.params.rollno;
    var name = req.body.name;
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('UPDATE student SET name = ? WHERE id = ?', [name, id], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    });
};

exports.delete = function (req, res) {
    var id = req.params.rollno;
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('DELETE FROM student WHERE id = ?', [id], function (err, results, fields) {
            if (err) throw err;
            res.json(results);
        });
    });
};