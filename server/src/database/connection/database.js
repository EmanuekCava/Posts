const mysql = require('mysql')

const {  
    DATA,
    USER,
    PASS,
    HOST,
    PORTDATA
} = process.env;

const connection = mysql.createConnection({
    database: DATA,
    user: USER,
    password: PASS,
    host: HOST,
    port: PORTDATA,
    multipleStatements: true
});

connection.connect(function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
})

module.exports = connection;