const Employee = require('../models/employee.model');


exports.create = (req, res) => {
  if (!req.body.fullname) {
    res.status(400).send({ message: 'Full name cannot be empty' });
    return;
  }

  const employee = new Employee({
    fullname: req.body.fullname,
    age: req.body.age,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    employment_status: req.body.employment_status,
    salary: req.body.salary,
  });

  Employee.create(employee, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || 'Some error occurred while creating the employee.' });
      return;
    }
    res.status(201).send(data);
  });
};


exports.getAll = (req, res) => {
  Employee.getAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || 'Some error occurred while retrieving employees.' });
      return;
    }
    res.status(200).send(data);
  });
};


exports.getById = (req, res) => {
  const id = req.params.id;
  Employee.getById(id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: `Employee with id ${id} not found.` });
      } else {
        res.status(500).send({ message: `Error retrieving employee with id ${id}` });
      }
      return;
    }
    res.status(200).send(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Employee.getById(id, (err, oldData) => {
    if (err || !oldData) {
      res.status(404).send({ message: `Employee with id ${id} not found.` });
      return;
    }

    Employee.update(id, req.body, (err, updatedData) => {
      if (err) {
        res.status(500).send({ message: `Error updating employee with id ${id}` });
        return;
      }
      res.status(200).send({
        message: `Employee with id ${id} updated successfully.`,
        beforeUpdate: oldData,
        afterUpdate: updatedData 
      });
    });
  });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.getById(id, (err, employeeData) => {
    if (err || !employeeData) {
      res.status(404).send({ message: `Employee with id ${id} not found.` });
      return;
    }

    Employee.delete(id, (err, data) => {
      if (err) {
        res.status(500).send({ message: `Could not delete employee with id ${id}` });
        return;
      }

      res.status(200).send({ 
        message: `Employee with id ${id} was deleted successfully.`,
        deletedEmployee: employeeData 
      });
    });
  });
};
