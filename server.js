// นำเข้า Express.js
const express = require('express');
const app = express();

// นำเข้าไฟล์ route ของพนักงาน
const employeeRoutes = require('./app/routes/employee.route');

// ใช้ middleware เพื่อให้ Express จัดการข้อมูล JSON
app.use(express.json());

// กำหนดให้ API พนักงานใช้ path `/api/employees`
app.use('/api/employees', employeeRoutes);

// กำหนดหมายเลขพอร์ตให้เซิร์ฟเวอร์ (ใช้ค่าจาก process.env หรือ 5000)
const PORT = process.env.PORT || 5000;

// เปิดเซิร์ฟเวอร์ให้ทำงาน และแสดงข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
