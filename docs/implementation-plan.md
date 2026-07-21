# Implementation Plan

## Project Name

**Smart Classroom Attendance System**

---

# Purpose

This document outlines the implementation plan for Sprint 1 of the Smart Classroom Attendance System. It defines the platform, development tools, project modules, team responsibilities, and implementation schedule for building the first working prototype.

---

# Sprint 1 Goal

Develop a functional frontend prototype that allows:

- Students to log in using Student ID and Password.
- Students to record classroom attendance.
- Students to view their attendance history.
- Lecturers to view attendance records.
- Administrators to manage student information and attendance records.

The prototype will use **HTML, CSS, JavaScript, and Browser Local Storage** without a backend database.

---

# Platform

| Item | Selection |
|------|-----------|
| Platform | Web Application |
| Prototype Type | Frontend Prototype |
| Programming Languages | HTML5, CSS3, JavaScript |
| Data Storage | Browser Local Storage |
| Version Control | GitHub |
| Development Environment | Visual Studio Code |

---

# Development Tools

| Tool | Purpose |
|------|---------|
| Visual Studio Code | Source code development |
| GitHub | Version control and collaboration |
| HTML5 | Web page structure |
| CSS3 | User interface styling |
| JavaScript | System functionality and interaction |
| Draw.io | System diagrams |
| Figma | Wireframe and UI design |
| Google Chrome | Prototype testing |

---

# Sprint 1 Modules

| Module | Description | Status |
|---------|-------------|--------|
| Homepage | Display project introduction and navigation | Planned |
| Student Login | Authenticate users using Student ID and Password | Planned |
| Student Dashboard | Display student menu and attendance options | Planned |
| Attendance Form | Allow students to submit attendance | Planned |
| Attendance History | Display attendance records | Planned |
| Lecturer Dashboard | View attendance records and summaries | Planned |
| Admin Dashboard | Manage students and attendance records | Planned |

---

# Functional Requirements to Implement

| Requirement ID | Requirement | Sprint 1 |
|----------------|-------------|-----------|
| FR-01 | Student Login | ✔ |
| FR-02 | Record Attendance | ✔ |
| FR-03 | View Attendance History | ✔ |
| FR-04 | Lecturer Dashboard | ✔ |
| FR-05 | Admin Dashboard | ✔ |
| FR-06 | Search Attendance Records | ✔ |
| FR-07 | Update Attendance Status | ✔ |

---

# Team Responsibilities

| Team Member | Role | Responsibilities |
|-------------|------|------------------|
| Htut Myat Moe | Product Lead | Review requirements, documentation, and testing |
| Hein Htet | Technical Lead | Develop HTML, CSS, JavaScript, and Local Storage functions |
| Sai Kaung Htet Kyaw | UX/UI & Documentation Lead | Design interface, prepare screenshots, update documentation |

---

# Sprint 1 Deliverables

The following files will be completed during Sprint 1:

```text
prototype/
│
├── index.html
├── style.css
├── script.js

docs/
│
├── implementation-plan.md
├── feature-implementation-status.md
└── weekly-logbook.md

screenshots/
│
├── homepage.png
├── login.png
├── attendance-form.png
├── attendance-history.png
├── lecturer-dashboard.png
└── admin-dashboard.png
```

---

# Implementation Schedule

| Task | Assigned To | Status |
|------|-------------|--------|
| Create project structure | Htut Myat Moe | Planned |
| Build homepage | Sai Kaung Htet Kyaw | Planned |
| Develop login page | Sai Kaung Htet Kyaw | Planned |
| Develop attendance form | Hein Htet | Planned |
| Create attendance history | Hein Htet | Planned |
| Create lecturer dashboard | Htut Myat Moe | Planned |
| Create admin dashboard | Htut Myat Moe | Planned |
| Perform testing | All Members | Planned |
| Update documentation | Sai Kaung Htet Kyaw | Planned |

---

# Data Handling

The prototype will use Browser Local Storage to simulate a database.

Stored information includes:

- Student accounts
- Lecturer accounts
- Attendance records
- Course information

Sample data from previous labs will also be used for demonstration purposes.

---

# Testing Plan

The team will verify that:

- Students can log in successfully.
- Attendance can be recorded correctly.
- Attendance history is displayed accurately.
- Lecturers can view attendance records.
- Administrators can manage attendance records.
- Navigation works correctly.
- Data is saved in Local Storage.

---

# Risks

| Risk | Mitigation |
|------|------------|
| Login errors | Validate Student ID and Password |
| Missing attendance records | Verify Local Storage after submission |
| Navigation issues | Test all links before submission |
| Browser compatibility | Test using Google Chrome and Microsoft Edge |
| Data loss | Keep backup sample data in CSV format |

---

# Expected Output

At the end of Sprint 1, the Smart Classroom Attendance System will provide:

- Working homepage
- Student login
- Student dashboard
- Attendance recording
- Attendance history
- Lecturer dashboard
- Admin dashboard
- Navigation between all screens
- Sample attendance records using Local Storage

---

# Conclusion

Sprint 1 focuses on building the first working prototype of the Smart Classroom Attendance System. The implementation uses HTML, CSS, JavaScript, and Browser Local Storage to demonstrate the core attendance management workflow. This prototype will serve as the foundation for future improvements in later labs.
