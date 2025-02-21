const db = require('../../config/db.config');

const Employee = {
    getAllEmployees: (callback) => {
        db.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    createEmployee: (employee, callback) => {
        db.query('INSERT INTO employee SET ?', employee, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    getEmployeeById: (id, callback) => {
        db.query('SELECT * FROM employee WHERE id = ?', [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    updateEmployee: (id, employee, callback) => {
        db.query('UPDATE employee SET ? WHERE id = ?', [employee, id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    deleteEmployee: (id, callback) => {
        db.query('DELETE FROM employee WHERE id = ?', [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    }
};

module.exports = Employee;
