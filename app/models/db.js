// นำเข้าโมดูล mysql และไฟล์ตั้งค่าฐานข้อมูล
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// สร้างการเชื่อมต่อฐานข้อมูลโดยใช้ค่าจากไฟล์ config
const connection = mysql.createConnection({
  host: dbConfig.HOST,       // ที่อยู่ของเซิร์ฟเวอร์ฐานข้อมูล (เช่น 'localhost')
  user: dbConfig.USER,       // ชื่อผู้ใช้ฐานข้อมูล (ปกติเป็น 'root' ถ้าใช้ MySQL local)
  password: dbConfig.PASSWORD, // รหัสผ่านของฐานข้อมูล (ว่างเปล่าหากไม่ได้ตั้งรหัส)
  database: dbConfig.DB      // ชื่อฐานข้อมูล (เช่น 'employees')
});

// ทำการเชื่อมต่อฐานข้อมูล
connection.connect(error => {
  if (error) throw error; // ถ้าเชื่อมต่อล้มเหลวให้แสดง error และหยุดโปรแกรม
  console.log("Successfully connected to the database."); // แสดงข้อความเมื่อเชื่อมต่อสำเร็จ
});

// ส่งออก connection เพื่อให้ไฟล์อื่นใช้งาน
module.exports = connection;
