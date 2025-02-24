// นำเข้า Express และสร้าง Router
const express = require('express');
const router = express.Router();

// นำเข้า Controller ที่จัดการพนักงาน
const EmployeeController = require('../controllers/employee.controller');

// กำหนดเส้นทาง (Routes) สำหรับจัดการพนักงาน

// ดึงข้อมูลพนักงานทั้งหมด (GET /employees)
router.get('/', EmployeeController.getAllEmployees);

// เพิ่มข้อมูลพนักงานใหม่ (POST /employees)
router.post('/', EmployeeController.createEmployee);

// ดึงข้อมูลพนักงานตาม ID (GET /employees/:id)
router.get('/:id', EmployeeController.getEmployeeById);

// อัปเดตข้อมูลพนักงานตาม ID (PUT /employees/:id)
router.put('/:id', EmployeeController.updateEmployee);

// ลบพนักงานตาม ID (DELETE /employees/:id)
router.delete('/:id', EmployeeController.deleteEmployee);

// ส่งออก Router เพื่อนำไปใช้ใน server.js
module.exports = router;
