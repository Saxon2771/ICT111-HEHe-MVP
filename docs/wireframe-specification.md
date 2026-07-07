# Wireframe Specification

## Project Name
Smart Classroom Attendance System

## Purpose

This document describes the wireframes for the Smart Classroom Attendance System. Each wireframe represents a key screen in the MVP and is based on the functional requirements and user stories defined in Lab 04.

---

# 1. Homepage

## Purpose
Provide users with access to the system through login and introduce the Smart Classroom Attendance System.

## Main Components
- System logo
- Project title
- Welcome message
- Student Login button
- Lecturer Login button
- About System section

## User Actions
- Select Student Login
- Select Lecturer Login
- View system information

---

# 2. Student Attendance (Input Form)

## Purpose
Allow students to record attendance by scanning a QR code.

## Main Components
- Student ID
- Student Name
- Course Name
- QR Code Scanner
- Submit button
- Attendance confirmation message

## User Actions
- Scan QR code
- Submit attendance
- View confirmation message

---

# 3. Attendance Record List

## Purpose
Allow lecturers to view and manage attendance records.

## Main Components
- Search bar
- Filter by course
- Filter by date
- Attendance table
- View Details button

## Attendance Table

| Student ID | Student Name | Course | Date | Status |
|------------|--------------|--------|------|--------|

## User Actions
- Search attendance records
- Filter records
- View student details

---

# 4. Attendance Detail View

## Purpose
Display complete attendance information for a selected student.

## Main Components
- Student profile
- Attendance history
- Attendance percentage
- Class information
- Back button

## User Actions
- View attendance history
- Return to record list

---

# 5. Lecturer Dashboard

## Purpose
Provide lecturers with an overview of classroom attendance.

## Main Components
- Total Students
- Present Today
- Absent Today
- Attendance Percentage
- Generate QR Code button
- View Reports button

## User Actions
- Generate QR code
- View attendance statistics
- Open attendance reports

---

# 6. Admin Panel

## Purpose
Allow administrators to manage users, courses, and attendance records.

## Main Components
- Dashboard summary
- Manage Students
- Manage Lecturers
- Manage Courses
- Manage Attendance
- Export Reports
- Logout button

## User Actions
- Add/Edit/Delete student records
- Add/Edit/Delete lecturer records
- Manage courses
- Export attendance reports

---

# Navigation Flow

```text
Homepage
      │
      ▼
Login
      │
      ▼
Lecturer Dashboard
      │
      ├──────────────► Generate QR Code
      │
      ▼
Student Scans QR Code
      │
      ▼
Attendance Confirmation
      │
      ▼
Attendance Record List
      │
      ▼
Attendance Detail View
      │
      ▼
Logout
```

---

# Design Guidelines

- Use a clean and simple layout.
- Maintain consistent navigation across all pages.
- Use clear labels and readable fonts.
- Ensure mobile-friendly responsiveness.
- Highlight important actions with visible buttons.
- Display confirmation and error messages clearly.
- Minimize the number of steps required to record attendance.

---

# Wireframe Files

| Screen | File Name |
|---------|-----------|
| Homepage | `/wireframes/homepage.png` |
| Student Attendance | `/wireframes/input-form.png` |
| Attendance Record List | `/wireframes/record-list.png` |
| Attendance Detail View | `/wireframes/detail-view.png` |
| Lecturer Dashboard | `/wireframes/dashboard.png` |
| Admin Panel | `/wireframes/admin-view.png` |

---

# Expected Outcome

The wireframes provide a clear blueprint for the Smart Classroom Attendance System prototype. They ensure that every screen supports the project requirements, user stories, and MVP features before high-fidelity design and implementation begin.
