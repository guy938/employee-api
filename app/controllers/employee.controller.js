const Employee = require('../models/employee.model');

const EmployeeController = {
    getAllEmployees: (req, res) => {
        Employee.getAllEmployees((err, data) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).json(data);
            }
        });
    },

    createEmployee: (req, res) => {
        const newEmployee = req.body;
        Employee.createEmployee(newEmployee, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json({ id: data.insertId, ...newEmployee });
            }
        });
    },

    getEmployeeById: (req, res) => {
        const { id } = req.params;
        Employee.getEmployeeById(id, (err, data) => {
            if (err || !data) {
                res.status(404).send({ message: 'Employee not found' });
            } else {
                res.status(200).json(data);
            }
        });
    },

    updateEmployee: (req, res) => {
        const { id } = req.params;
        const updatedEmployee = req.body;
        Employee.updateEmployee(id, updatedEmployee, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).json({ message: 'Employee updated successfully' });
            }
        });
    },

    deleteEmployee: (req, res) => {
        const { id } = req.params;
        Employee.deleteEmployee(id, (err, data) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).json({ message: 'Employee deleted successfully' });
            }
        });
    }
};

module.exports = EmployeeController;
