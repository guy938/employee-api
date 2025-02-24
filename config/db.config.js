const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = connection;