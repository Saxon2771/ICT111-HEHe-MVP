# Technical Architecture

## Project Name

**Smart Classroom Attendance System**

---

# Architecture Overview

The Smart Classroom Attendance System is a **frontend-only web application** designed for the Minimum Viable Product (MVP). Students log in using their **Student ID and Password** to record attendance. Attendance records are stored locally using the browser's Local Storage. Lecturers can monitor attendance records through a dashboard without requiring a backend server.

---

# Selected Architecture

| Component | Technology |
|-----------|------------|
| Platform | Web Application |
| Frontend | HTML5, CSS3, JavaScript |
| Backend | None (Frontend-only MVP) |
| Database / Storage | Browser Local Storage |
| Authentication | Student ID and Password |
| Dashboard | HTML, CSS, JavaScript |
| Reports | Attendance records displayed in tables |
| Development Tools | Visual Studio Code, GitHub, Draw.io, Figma |

---

# System Components

## 1. Student Module

### Functions
- Student Login
- Record Attendance
- View Attendance History
- Logout

### Input
- Student ID
- Password

### Output
- Attendance confirmation
- Attendance history

---

## 2. Lecturer Module

### Functions
- View Attendance Dashboard
- Search Attendance Records
- Filter Attendance Records
- View Attendance Summary

### Output
- Attendance list
- Daily attendance summary
- Student attendance history

---

## 3. Administrator Module

### Functions
- Manage Student Information
- Manage Lecturer Information
- Manage Course Information
- Update Attendance Records
- Export Attendance Reports

---

## 4. Local Storage

The MVP stores attendance information in the browser using Local Storage.

Stored data includes:

- Student information
- Lecturer information
- Attendance records
- Course information

---

# System Workflow

```text
Student
    │
    ▼
Login Page
(Student ID + Password)
    │
    ▼
Authentication
    │
    ▼
Student Dashboard
    │
    ▼
Record Attendance
    │
    ▼
Save Attendance Record
(Local Storage)
    │
    ▼
Attendance History
    │
    ▼
Lecturer Dashboard
    │
    ▼
Attendance Reports
```

---

# Data Flow

### Student

Student Login

↓

Authentication

↓

Student Dashboard

↓

Record Attendance

↓

Attendance Record Saved

↓

Attendance History

---

### Lecturer

Lecturer Login

↓

Dashboard

↓

View Attendance Records

↓

Search / Filter Records

↓

Attendance Summary

---

### Administrator

Administrator Login

↓

Manage Students

↓

Manage Courses

↓

Update Attendance Records

↓

Export Reports

---

# Technical Decisions

| Decision | Reason |
|----------|--------|
| Frontend-only architecture | Easy to develop within the semester timeline |
| Local Storage | No server or database setup required |
| HTML, CSS, JavaScript | Simple technologies suitable for an MVP |
| Student ID and Password | Secure user authentication without additional hardware |
| Responsive Web Design | Accessible on desktop and mobile browsers |

---

# Future Improvements

The following features can be added after the MVP:

- MySQL or Firebase database
- PHP, Node.js, or Python backend
- Email notifications
- Password reset
- Role-based authentication
- Attendance analytics dashboard
- Mobile application
- Cloud deployment

---

# Advantages of the Selected Architecture

- Simple to develop and maintain.
- No backend server required for the MVP.
- Fast implementation using web technologies.
- Easy to demonstrate during project presentations.
- Supports future migration to a database-backed system.

---

# Limitations

- Data is stored only in the user's browser.
- No synchronization across multiple devices.
- Limited security compared to a server-based application.
- Not suitable for large-scale deployment without a backend.

---

# Conclusion

The selected frontend-only architecture is appropriate for the Smart Classroom Attendance System MVP because it matches the team's current technical skills, satisfies the functional requirements, and can be completed within the semester. The design also allows future expansion to a full database-backed system without major changes to the user interface.
