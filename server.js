const express = require('express');
const mysql = require('mysql');

const app = express();

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'extracurricular_activities',
    multipleStatements: true
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/admin/program', (req, res) => {
    let sql = 'SELECT * FROM program_list';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
});

app.post('/admin/program', (req, res) => {
    let post = req.body;
    let sql = 'INSERT INTO program SET ?';
    let query = db.query(sql, post, err => {
        if(err) throw err;
        res.send('inserted success');
    })
})

app.post('/admin/event', (req, res) => {
    let post = req.body.eventToAdd;
    let sql1 = 'INSERT INTO event_activities SET ?';
    
    let n = req.body.programName;
    let sql2 = `CALL InsertProgramEvent(?)`;

    let sql = sql1 + ";" + sql2;
    
    let query = db.query(sql, [post, n], err => {
        if(err) throw err;
        res.send('inserted success');
    })
})

app.get('/admin/event', (req, res) => {
    let sql = 'SELECT * FROM event_list';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
});

app.get('/admin/student', (req, res) => {
    let sql = 'SELECT * FROM student_list';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
});

app.get('/admin/event_record', (req, res) => {
    let sql = 'SELECT * FROM event_record_list';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
});

app.listen('4200', () => {
    console.log("Server started on port 4200");
});