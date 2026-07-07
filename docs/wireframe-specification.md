# Wireframe Specification

## Project Name
Smart Classroom Attendance System

## Purpose

This document describes the wireframes for the Smart Classroom Attendance System. The system allows students to log in using their Student ID and Password to record attendance electronically without using paper attendance sheets.

---

# 1. Homepage

## Purpose
Provide users with access to the Smart Classroom Attendance System.

## Main Components
- System Logo
- Project Title
- Welcome Message
- Student Login Button
- Lecturer Login Button
- About System Section

## User Actions
- Select Student Login
- Select Lecturer Login
- Read system information

---

# 2. Student Login

## Purpose
Allow students to access the attendance system securely.

## Main Components
- Student ID
- Password
- Login Button
- Forgot Password Link
- Error Message

## User Actions
- Enter Student ID
- Enter Password
- Click Login

---

# 3. Student Dashboard

## Purpose
Allow students to record attendance and view attendance information.

## Main Components
- Student Profile
- Course Information
- Mark Attendance Button
- Attendance Status
- Attendance History
- Logout Button

## User Actions
- Mark Attendance
- View Attendance History
- Logout

---

# 4. Attendance Record List

## Purpose
Allow lecturers to monitor attendance records.

## Main Components
- Search Bar
- Filter by Course
- Filter by Date
- Attendance Table
- View Details Button

## Attendance Table

| Student ID | Student Name | Course | Date | Status |
|------------|--------------|--------|------|--------|

## User Actions
- Search Attendance
- Filter Records
- View Student Details

---

# 5. Lecturer Dashboard

## Purpose
Provide lecturers with an overview of classroom attendance.

## Main Components
- Total Students
- Present Today
- Absent Today
- Attendance Percentage
- Attendance Summary
- View Reports Button

## User Actions
- View Attendance Summary
- View Reports
- Manage Attendance

---

# 6. Admin Panel

## Purpose
Allow administrators to manage users and attendance records.

## Main Components
- Dashboard Summary
- Manage Students
- Manage Lecturers
- Manage Courses
- Manage Attendance Records
- Export Attendance Reports
- Logout Button

## User Actions
- Add/Edit/Delete Student
- Add/Edit/Delete Lecturer
- Manage Courses
- Update Attendance Records
- Export Reports

---

# Navigation Flow

```text
Homepage
      │
      ▼
Student/Lecturer Login
      │
      ▼
Login Successful?
      │
 ┌────┴────┐
 │         │
No        Yes
 │         │
 ▼         ▼
Error   Dashboard
            │
            ▼
     Mark Attendance
            │
            ▼
 Attendance Recorded
            │
            ▼
 View Attendance History
            │
            ▼
         Logout
```

---

# Design Guidelines

- Simple and clean interface.
- Consistent navigation.
- Responsive design for desktop and mobile.
- Clear labels and buttons.
- Secure login using Student ID and Password.
- Display attendance confirmation messages.
- Easy access to attendance history.

---

# Wireframe Files

| Screen | File Name |
|---------|-----------|
| Homepage | `/wireframes/homepage.png` |
| Student Login | `/wireframes/student-login.png` |
| Student Dashboard | `/wireframes/student-dashboard.png` |
| Attendance Record List | `/wireframes/record-list.png` |
| Lecturer Dashboard | `/wireframes/lecturer-dashboard.png` |
| Admin Panel | `/wireframes/admin-panel.png` |

---

# Expected Outcome

The wireframes provide a visual blueprint for the Smart Classroom Attendance System. Students log in using their Student ID and Password to record attendance, while lecturers and administrators can efficiently monitor and manage attendance records.
