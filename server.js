const express = require('express');
const mysql = require('mysql');

const app = express();

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'extracurricular_activities'
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

app.get('/insert', (req, res) => {
    let post = {
        Name: "Basketball",
        Abbreviation: "BASKE",
        Type: "Sport",
        Recommandation_Level: "High",
        Duration: 20,
        StartDate: new Date(),
        EndDate: new Date(),
        Director: "Ray",
        Manager: "Ken",
        SchoolYear: 2000
    };
    let sql = 'INSERT INTO program SET ?';
    let query = db.query(sql, post, err => {
        if(err) throw err;

        res.send('insert success');
    })
});

app.get('/program', (req, res) => {
    let sql = 'SELECT * FROM program';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;

        console.log(results);
        res.send(results);
    })
});

app.post('/program', (req, res) => {
    let post = req.body;
    let sql = 'INSERT INTO program SET ?';
    let query = db.query(sql, post, err => {
        if(err) throw err;
        res.send('created new program');
    })

})

app.listen('4200', () => {
    console.log("Server started on port 4200");
});