# Data Structure

## Project Name

**Smart Classroom Attendance System**

---

# Purpose

This document defines the logical data structure for the Smart Classroom Attendance System. It specifies the entities, fields, data types, validation rules, and sample values used in the MVP. The data structure supports attendance recording, user management, and attendance reporting.

---

# Entity 1: Students

| Field Name | Data Type | Validation Rule | Sample Value |
|------------|-----------|-----------------|--------------|
| StudentID | String | Required, Unique | STU001 |
| FullName | String | Required | Harry Lim |
| Email | String | Valid email format | harry@student.edu |
| Password | String | Minimum 8 characters | Harry123 |
| Department | String | Required | Information Technology |
| YearLevel | Integer | 1–4 only | 1 |
| Status | String | Active / Inactive | Active |

---

# Entity 2: Lecturers

| Field Name | Data Type | Validation Rule | Sample Value |
|------------|-----------|-----------------|--------------|
| LecturerID | String | Required, Unique | LEC001 |
| FullName | String | Required | Dr. John Smith |
| Email | String | Valid email format | john@university.edu |
| Password | String | Minimum 8 characters | Lecturer123 |
| Department | String | Required | Information Technology |
| Status | String | Active / Inactive | Active |

---

# Entity 3: Courses

| Field Name | Data Type | Validation Rule | Sample Value |
|------------|-----------|-----------------|--------------|
| CourseID | String | Required, Unique | ICT105 |
| CourseName | String | Required | Fundamental Technology Entrepreneurship |
| Section | String | Required | A |
| Semester | String | Required | Semester 1 |
| LecturerID | String | Must exist in Lecturer table | LEC001 |

---

# Entity 4: Attendance Records

| Field Name | Data Type | Validation Rule | Sample Value |
|------------|-----------|-----------------|--------------|
| AttendanceID | String | Required, Unique | ATT001 |
| StudentID | String | Must exist in Student table | STU001 |
| CourseID | String | Must exist in Course table | ICT105 |
| AttendanceDate | Date | Required | 2026-09-15 |
| AttendanceTime | Time | Required | 09:05 AM |
| Status | String | Present / Late / Absent | Present |
| RecordedBy | String | Lecturer ID | LEC001 |

---

# Entity Relationships

```text
Students
    │
    │ StudentID
    ▼
Attendance Records
    ▲
    │ CourseID
    │
Courses
    │
    │ LecturerID
    ▼
Lecturers
```

---

# Validation Rules

## Students
- Student ID must be unique.
- Student name cannot be empty.
- Email must be valid.
- Password must contain at least 8 characters.
- Status must be Active or Inactive.

---

## Lecturers
- Lecturer ID must be unique.
- Email must be valid.
- Password must contain at least 8 characters.
- Department is required.

---

## Courses
- Course ID must be unique.
- Course name is required.
- Lecturer ID must exist before assigning a course.

---

## Attendance Records
- Student ID must exist.
- Course ID must exist.
- Attendance date cannot be empty.
- Attendance time is recorded automatically.
- Status must be Present, Late, or Absent.

---

# Sample Records

## Student

| StudentID | FullName | Department | YearLevel |
|------------|----------|------------|-----------|
| STU001 | Harry Lim | Information Technology | 1 |
| STU002 | William Tan | Computer Science | 2 |
| STU003 | Qing Li | Software Engineering | 1 |

---

## Lecturer

| LecturerID | FullName | Department |
|-------------|----------|------------|
| LEC001 | Dr. John Smith | Information Technology |

---

## Course

| CourseID | CourseName | Lecturer |
|-----------|------------|-----------|
| ICT105 | Fundamental Technology Entrepreneurship | LEC001 |

---

## Attendance

| AttendanceID | StudentID | CourseID | Date | Status |
|--------------|-----------|----------|------------|---------|
| ATT001 | STU001 | ICT105 | 2026-09-15 | Present |
| ATT002 | STU002 | ICT105 | 2026-09-15 | Present |
| ATT003 | STU003 | ICT105 | 2026-09-15 | Late |

---

# Data Storage

For the MVP, all data will be stored in the browser using **Local Storage**.

Data includes:
- Student accounts
- Lecturer accounts
- Course information
- Attendance records

For future versions, the data can be migrated to a relational database such as **MySQL**, **Firebase**, or **Supabase**.

---

# Summary

The Smart Classroom Attendance System uses four main entities: **Students**, **Lecturers**, **Courses**, and **Attendance Records**. These entities support secure login, attendance recording, attendance tracking, and report generation while remaining simple enough for an MVP implementation.
