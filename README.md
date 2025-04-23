# 📝 React To-Do List Application

โปรเจกต์นี้คือระบบ To-Do List ที่พัฒนาด้วย React.js และ Bootstrap โดยสามารถเพิ่ม แก้ไข ลบ และจัดการสถานะของงาน (Task) ได้อย่างครบถ้วน พร้อมด้วยการจัดเรียงข้อมูลและการตรวจสอบข้อมูล (Validation) ผ่าน Modal Form

## ✅ Features

- แสดงรายการ Task ทั้งหมด
- แยกสถานะงานเป็น “ดำเนินการเสร็จสิ้น” และ “ยังไม่ดำเนินการ”
- เพิ่ม Task ผ่าน Modal พร้อม Validate ข้อมูลที่จำเป็น
- แก้ไข Task ได้โดยแสดงข้อมูลเดิมใน Modal
- ลบ Task พร้อมยืนยันก่อนลบ
- คลิก checkbox เพื่อเปลี่ยนสถานะงาน (มีเส้นขีดกลางเมื่อเสร็จสิ้น)
- จัดเรียง Task ตามสถานะ และตาม Due Date

## 🛠 Tech Stack

- **React.js**
- **Bootstrap** (via React-Bootstrap)
- **React-Datepicker**
- **Vite** (for dev server & build)

## 📦 Installation

1. Clone repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```
2. Install dependencies

```bash
npm install
```

3. Run the app
```bash
npm run dev
```
🧪 Usage
- คลิก “Add Task” เพื่อเพิ่มงานใหม่
- กรอกชื่องาน, รายละเอียด, วันที่กำหนดส่ง แล้วกด “Add Task”
- กด icon ดินสอ ✏️ เพื่อแก้ไขงาน
- กด icon ถังขยะ 🗑️ เพื่อแสดงหน้าต่างยืนยันการลบ
- ติ๊ก checkbox เพื่อเปลี่ยนสถานะเป็นเสร็จสิ้น/ยังไม่เสร็จ
- งานที่เสร็จสิ้นจะมีเส้นขีดกลางบนชื่อ
