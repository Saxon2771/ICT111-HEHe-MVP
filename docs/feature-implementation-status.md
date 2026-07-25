# Feature Implementation Status

## Project
**Smart Classroom Attendance System**

---

# Purpose

This document tracks the implementation progress of the Smart Classroom Attendance System. It maps each functional requirement to its implementation status and provides evidence that the feature has been completed.

---

# Feature Implementation Table

| Requirement ID | Feature | Description | Status | Evidence |
|----------------|---------|-------------|--------|----------|
| FR-01 | Student Login | Students log in using Student ID and Password. | ✅ Completed | `login.html`, `database.js`, `login.js` |
| FR-02 | Student Dashboard | Displays welcome message, attendance summary and profile. | ✅ Completed | `student-dashboard.html` |
| FR-03 | Record Attendance | Students can mark attendance and save records in Local Storage. | ✅ Completed | `attendance.js` |
| FR-04 | Attendance History | Students can view their attendance records. | ✅ Completed | `student-dashboard.html` |
| FR-05 | Lecturer Dashboard | Lecturers can view attendance records and generate attendance passwords. | ✅ Completed | `lecturer-dashboard.html` |
| FR-06 | Admin Dashboard | Administrators can manage users and attendance records. | ✅ Completed | `admin-dashboard.html` |
| FR-07 | Attendance Record List | Displays all attendance records with search and filtering. | ✅ Completed | `attendance.html` |
| FR-08 | Local Storage Database | Stores users, attendance records and login sessions. | ✅ Completed | `database.js` |
| FR-09 | Logout | Users can securely log out and return to the login page. | ✅ Completed | `logout.js` |
| FR-10 | Role-Based Navigation | Redirects users to the correct dashboard after login. | ✅ Completed | `login.js` |

---

# Prototype Files

```text
prototype/
│
├── smartclassattendance.html
├── login.html
├── student-dashboard.html
├── lecturer-dashboard.html
├── attendance.html
├── admin-dashboard.html
│
└── js/
    ├── database.js
    ├── login.js
    ├── attendance.js
    └── logout.js
```

---

# Testing Summary

| Feature | Test Result |
|---------|-------------|
| Login Validation | ✅ Passed |
| Student Dashboard | ✅ Passed |
| Attendance Recording | ✅ Passed |
| Attendance History | ✅ Passed |
| Lecturer Dashboard | ✅ Passed |
| Admin Dashboard | ✅ Passed |
| Local Storage | ✅ Passed |
| Logout | ✅ Passed |

---

# Known Limitations

- Data is stored only in the browser using Local Storage.
- User passwords are stored as plain text for demonstration purposes.
- The system does not use a backend database or server authentication.
- Attendance records are not synchronized across different devices.

---

# Future Improvements

- Connect the system to a MySQL or Firebase database.
- Encrypt user passwords.
- Add email verification.
- Implement role-based authorization with backend support.
- Generate attendance reports in PDF or Excel format.
- Add notification and reminder features.
- Improve mobile responsiveness.

---

# Conclusion

The Smart Classroom Attendance System prototype successfully implements all core MVP features required for Lab 10. Students can log in, record attendance, and view attendance history, while lecturers and administrators have dedicated dashboards to manage attendance information. The prototype demonstrates the main workflow using HTML, CSS, JavaScript, and Browser Local Storage, providing a solid foundation for future development.


# Feature Implementation Status

## Project

Smart Classroom Attendance System

## Lab

Lab 11 – MVP Implementation Sprint 2 and Startup Metrics

---

## Feature Progress

| Requirement ID | Feature | Status | Evidence | Owner |
|---|---|---|---|---|
| FR-01 | Student ID and Password Login | Completed | `prototype/login.html`, `prototype/js/login.js` | Harry |
| FR-02 | Role-Based Dashboard | Completed | Student, Lecturer and Admin dashboard pages | William |
| FR-03 | Mark Attendance | Completed | `prototype/js/attendance.js` | William |
| FR-04 | Save Attendance Records | Completed | Browser Local Storage | William |
| FR-05 | View Attendance History | Completed | Student dashboard attendance table | Harry |
| FR-06 | Search Attendance Records | Partially Completed | Search input added; more testing required | Qing |
| FR-07 | Filter Attendance Records | Partially Completed | Course and status filters added | Qing |
| FR-08 | Generate Attendance Password | Completed | Lecturer dashboard | William |
| FR-09 | Admin User Management | Partially Completed | Admin can view users; edit function pending | Harry |
| FR-10 | Dashboard Metrics | Revised | Metrics added during Lab 11 | Qing |
| FR-11 | Logout | Completed | `prototype/js/logout.js` | Harry |
| FR-12 | Mobile Responsive Design | Partially Completed | Responsive CSS added to main pages | Qing |

---

## Sprint 2 Improvements

1. Improved Local Storage attendance data.
2. Added attendance search.
3. Added course and status filters.
4. Added dashboard metrics.
5. Improved role-based login protection.
6. Added full prototype testing.
7. Updated screenshots and documentation.

---

## Remaining Work

- Improve admin record editing.
- Add more validation for attendance passwords.
- Improve mobile responsiveness.
- Add attendance report export.
- Improve password security.

---

## Conclusion

The Lab 11 Sprint 2 prototype is more functional and measurable than the Lab 10 version. Core attendance functions are working, while remaining limitations are documented for future improvement.
