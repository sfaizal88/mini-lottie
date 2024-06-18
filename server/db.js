/**
 * Database connection code
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
const mysql = require('mysql2');

// CREATING CONNECTION DATAS
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

// TRIGGER CONNECT
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID', connection.threadId);
});

// EXPORT THE CONNET INSTANCE FOR OTHER QUERY RELEATED FEATURE
module.exports = connection;
