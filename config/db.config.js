// นำเข้าโมดูล mysql2 สำหรับเชื่อมต่อ MySQL
const mysql = require('mysql2');

// กำหนดค่าการเชื่อมต่อฐานข้อมูล
const connection = mysql.createConnection({
    host: 'localhost',   // ที่อยู่ของเซิร์ฟเวอร์ฐานข้อมูล (ในกรณีนี้คือเครื่องตัวเอง)
    user: 'root',        // ชื่อผู้ใช้ MySQL (ค่าเริ่มต้นคือ root)
    password: '',        // รหัสผ่านของ MySQL (ในกรณีนี้เว้นว่างไว้)
    database: 'employees' // ชื่อฐานข้อมูลที่ใช้ (ในกรณีนี้คือ employees)
});

// ทำการเชื่อมต่อฐานข้อมูล
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack); // แสดง error หากเชื่อมต่อล้มเหลว
        return;
    }
    console.log('Connected to the database'); // แสดงข้อความเมื่อเชื่อมต่อสำเร็จ
});

// ส่งออก connection เพื่อให้ไฟล์อื่นใช้งาน
module.exports = connection;
