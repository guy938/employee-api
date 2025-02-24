// นำเข้าไฟล์เชื่อมต่อฐานข้อมูล
const db = require('../../config/db.config');

const Employee = {
    // ดึงข้อมูลพนักงานทั้งหมด
    getAllEmployees: (callback) => {
        db.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                callback(err, null); // หากเกิดข้อผิดพลาด ส่ง error กลับ
            } else {
                callback(null, results); // ส่งข้อมูลพนักงานทั้งหมดกลับ
            }
        });
    },

    // เพิ่มข้อมูลพนักงานใหม่
    createEmployee: (employee, callback) => {
        db.query('INSERT INTO employee SET ?', employee, (err, results) => {
            if (err) {
                callback(err, null); // หากเกิดข้อผิดพลาด ส่ง error กลับ
            } else {
                callback(null, results); // ส่งผลลัพธ์ของการเพิ่มข้อมูลกลับ
            }
        });
    },

    // ดึงข้อมูลพนักงานตาม ID
    getEmployeeById: (id, callback) => {
        db.query('SELECT * FROM employee WHERE id = ?', [id], (err, results) => {
            if (err) {
                callback(err, null); // หากเกิดข้อผิดพลาด ส่ง error กลับ
            } else {
                callback(null, results[0]); // ส่งข้อมูลพนักงานที่พบกลับ (แถวแรก)
            }
        });
    },

    // อัปเดตข้อมูลพนักงานตาม ID
    updateEmployee: (id, employee, callback) => {
        db.query('UPDATE employee SET ? WHERE id = ?', [employee, id], (err, results) => {
            if (err) {
                callback(err, null); // หากเกิดข้อผิดพลาด ส่ง error กลับ
            } else {
                callback(null, results); // ส่งผลลัพธ์ของการอัปเดตกลับ
            }
        });
    },

    // ลบพนักงานตาม ID
    deleteEmployee: (id, callback) => {
        db.query('DELETE FROM employee WHERE id = ?', [id], (err, results) => {
            if (err) {
                callback(err, null); // หากเกิดข้อผิดพลาด ส่ง error กลับ
            } else {
                callback(null, results); // ส่งผลลัพธ์ของการลบกลับ
            }
        });
    }
};

// ส่งออกโมเดล Employee เพื่อให้ Controller นำไปใช้
module.exports = Employee;
