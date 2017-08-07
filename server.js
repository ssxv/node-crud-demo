var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var service = require('./routes/service');
var student = require('./routes/student');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8080, function () {
    console.log('Listening on Port : 8080');
});

/**
 * Api's
 */
app.get('/', service.status);

app.post('/student', student.create);
app.get('/student', student.getAll);
app.get('/student/:rollno', student.getById);
app.put('/student/:rollno', student.update);
app.delete('/student/:rollno', student.delete);