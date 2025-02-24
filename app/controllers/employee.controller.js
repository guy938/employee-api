const Employee = require('../models/employee.model');  // ตรวจสอบบรรทัดนี้
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

  // ฟังก์ชันสำหรับสร้างพนักงานใหม่
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

  // ฟังก์ชันดึงข้อมูลพนักงานตาม ID
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

  // ฟังก์ชันอัพเดตข้อมูลพนักงาน
  updateEmployee: (req, res) => {
      const { id } = req.params;
      const updatedEmployee = req.body;
      Employee.updateEmployee(id, updatedEmployee, (err, data) => {
          if (err) {
              res.status(500).send({ message: err.message });
          } else {
              // ส่งข้อมูลที่อัพเดตกลับไป
              res.status(200).json({
                  message: 'Employee updated successfully',
                  updatedEmployee: { id, ...updatedEmployee }
              });
          }
      });
  },

  // ฟังก์ชันลบข้อมูลพนักงาน
  deleteEmployee: (req, res) => {
      const { id } = req.params;
      Employee.deleteEmployee(id, (err, data) => {
          if (err) {
              res.status(500).send({ message: err.message });
          } else {
              // ส่งข้อมูลที่ถูกลบกลับไป
              res.status(200).json({
                  message: 'Employee deleted successfully',
                  deletedId: id
              });
          }
      });
  }
};

module.exports = EmployeeController;
