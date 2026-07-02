# User Stories

## Project Name
Smart Classroom Attendance System

## User Stories

| ID | User Story | Related Requirement(s) | Acceptance Criteria |
|----|------------|------------------------|---------------------|
| US1 | As a **student**, I want to log in using my student ID so that I can securely access the attendance system. | FR1 | - Student enters valid credentials.<br>- Login is successful.<br>- Student dashboard is displayed. |
| US2 | As a **student**, I want to scan a QR code so that my attendance is recorded automatically. | FR3, FR4, FR5 | - QR code is scanned successfully.<br>- System verifies the QR code.<br>- Attendance is saved in the database. |
| US3 | As a **student**, I want to receive a confirmation message after scanning so that I know my attendance has been recorded successfully. | FR6 | - Confirmation message is displayed.<br>- Student can view the attendance status. |
| US4 | As a **student**, I want to view my attendance history so that I can monitor my attendance throughout the semester. | FR7 | - Attendance history page loads successfully.<br>- Records are displayed correctly. |
| US5 | As a **lecturer**, I want to generate a QR code for each class session so that students can record their attendance quickly. | FR2 | - QR code is generated successfully.<br>- QR code is unique for each class session. |
| US6 | As a **lecturer**, I want to view attendance records so that I can monitor student attendance easily. | FR7 | - Attendance list is displayed.<br>- Records are updated after each successful scan. |
| US7 | As a **lecturer**, I want to search attendance records by student, course, or date so that I can quickly find attendance information. | FR8 | - Search returns matching attendance records.<br>- Results are displayed correctly. |
| US8 | As a **lecturer**, I want to export attendance reports so that I can submit attendance records for academic purposes. | FR9 | - Attendance report is generated.<br>- Report can be downloaded successfully. |
| US9 | As an **administrator**, I want to manage student, lecturer, and course information so that the system data remains accurate and up to date. | FR10 | - Administrator can add, edit, and delete records.<br>- Changes are saved successfully. |

---

## User Story Priority

### Must Have
- Student Login
- Lecturer Login
- QR Code Generation
- QR Code Scanning
- Attendance Recording
- Attendance Dashboard

### Should Have
- Attendance History
- Search Attendance Records
- Attendance Report Export

### Could Have
- Email Notifications
- Attendance Statistics

### Won't Have (Current MVP)
- Face Recognition Attendance
- GPS-Based Attendance
- Mobile Application

---

## Summary

These user stories were developed based on customer discovery findings from Lab 03. They focus on solving the main problems identified by students and lecturers, including reducing attendance time, minimizing recording errors, and simplifying attendance management through a QR-code-based Smart Classroom Attendance System.
