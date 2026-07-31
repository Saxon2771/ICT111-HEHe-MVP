# Final Prototype Report

## Project Information

**Project Title:** Smart Classroom Attendance System  
**Course:** ICT111 – Introduction to Information Technology  
**Lab:** Lab 14 – Final MVP Release and Venture Pitch  
**Project Type:** Browser-Based Minimum Viable Product  
**Development Technologies:** HTML, CSS, JavaScript, and Browser Local Storage  

---

# 1. Project Overview

The Smart Classroom Attendance System is a browser-based application designed to improve the way classroom attendance is recorded, stored, reviewed, and managed.

The system supports three main user roles:

- Students
- Lecturers
- Administrators

Students can log in, submit attendance, and view their attendance history. Lecturers can generate an attendance password, review attendance records, search and filter records, and monitor attendance information. Administrators can access overall attendance records, view dashboard metrics, and manage attendance status.

The prototype was developed as a Minimum Viable Product using front-end technologies only. Browser Local Storage is used to simulate data storage without requiring a backend server or external database.

---

# 2. Problem Statement

Traditional classroom attendance methods often depend on paper-based records, manual name checking, or disconnected spreadsheets.

These methods may create several problems, including:

- Time-consuming attendance checking
- Human errors
- Duplicate or incomplete records
- Difficulty reviewing historical attendance
- Limited access to attendance information
- Difficulty producing useful attendance summaries
- Poor coordination between students, lecturers, and administrators

Students may not know whether their attendance has been recorded correctly. Lecturers may spend unnecessary class time checking names manually. Administrators may also find it difficult to monitor overall attendance performance when records are stored in different places.

The Smart Classroom Attendance System was developed to provide a clearer and more organized attendance process.

---

# 3. Target Users

The main target users are students, lecturers, and administrators in educational institutions.

## Students

Students need a simple method to:

- Log in securely
- Submit attendance
- Confirm successful submission
- View attendance history
- Monitor attendance status

## Lecturers

Lecturers need a simple method to:

- Generate or display an attendance password
- Review student attendance records
- Search for specific students
- Filter records by course, date, or status
- View attendance summaries

## Administrators

Administrators need a method to:

- View all attendance records
- Monitor system-wide metrics
- Search and filter records
- Review attendance status
- Correct or update records where appropriate

---

# 4. User Evidence

Customer discovery and prototype testing were used to understand the needs of potential users.

The main findings were:

- Students wanted a faster attendance process.
- Students wanted confirmation after attendance submission.
- Lecturers wanted to reduce manual attendance checking.
- Lecturers wanted an easier way to review records.
- Administrators wanted clear attendance summaries.
- Users preferred simple navigation and clear feedback messages.
- Users wanted attendance records to remain available after submission.

These findings guided the development of the final prototype.

---

# 5. Proposed Solution

The proposed solution is a role-based Smart Classroom Attendance System that allows users to complete attendance-related tasks through a web interface.

The main workflow is:

```text
Landing Page
      ↓
Login
      ↓
Role-Based Dashboard
      ↓
Attendance Submission or Management
      ↓
Data Stored in Browser Local Storage
      ↓
Record Review
      ↓
Search, Filter, Detail, and Metrics
```

The system is designed to be simple, clear, and suitable for demonstration as an academic MVP.

---

# 6. Value Proposition

The Smart Classroom Attendance System provides a simple digital attendance experience for students, lecturers, and administrators.

Its main value is:

> A browser-based attendance system that reduces manual work, improves attendance visibility, and supports clearer record management.

The prototype creates value by:

- Reducing time spent on manual attendance
- Improving record organization
- Providing immediate attendance feedback
- Supporting attendance history
- Allowing search and filtering
- Providing useful dashboard summaries
- Supporting different user roles

---

# 7. System Requirements

The final prototype was evaluated against twelve core functional requirements.

| Requirement ID | Requirement | Final Status |
|---|---|---|
| FR-01 | Problem-specific homepage or landing screen | Completed |
| FR-02 | Primary user pathway | Completed |
| FR-03 | User input or data submission | Completed |
| FR-04 | Data storage or simulated storage | Completed |
| FR-05 | View records or list | Completed |
| FR-06 | Search, filter, or category | Completed |
| FR-07 | Detail view | Completed |
| FR-08 | Status or progress tracking | Completed |
| FR-09 | Admin or manager function | Completed |
| FR-10 | Validation and feedback | Completed |
| FR-11 | Dashboard, summary, or metrics | Completed |
| FR-12 | Traceability | Completed |

Detailed requirement mapping is available in:

```text
docs/final-traceability-matrix.md
```

---

# 8. Implemented Features

## 8.1 Landing Page

The landing page introduces the project and explains:

- The problem
- The solution
- The target users
- The main features
- The workflow
- The privacy notice
- The main call-to-action

The landing page links users to the working prototype.

Main file:

```text
landing-page/index.html
```

---

## 8.2 User Login

Users log in using an ID and password.

The system supports:

- Student accounts
- Lecturer accounts
- Administrator accounts

The login process reads users stored in Browser Local Storage.

Main files:

```text
prototype/login.html
prototype/js/database.js
prototype/js/login.js
```

---

## 8.3 Role-Based Redirection

After successful login, users are redirected according to their role.

```text
Student → student-dashboard.html
Lecturer → lecturer-dashboard.html
Administrator → admin-dashboard.html
```

The logged-in user is stored using:

```javascript
localStorage.setItem("currentUser", JSON.stringify(user));
```

---

## 8.4 Student Dashboard

The student dashboard displays:

- Student name
- Student ID
- Attendance form
- Attendance history
- Attendance summary
- Logout option

Student information is loaded dynamically from `currentUser`.

Main file:

```text
prototype/student-dashboard.html
```

---

## 8.5 Attendance Submission

Students can submit attendance using the attendance form.

The submitted data may include:

- Student ID
- Student name
- Course
- Date
- Time
- Status
- Attendance password

The system stores attendance records in Browser Local Storage.

Main file:

```text
prototype/js/attendance.js
```

---

## 8.6 Duplicate Prevention

The system checks whether the same student has already submitted attendance for the same date and class.

If a duplicate record is found, the system prevents the submission and shows a warning message.

This reduces duplicate attendance entries.

---

## 8.7 Attendance History

Students can view previously submitted attendance records.

The history table displays information such as:

- Course
- Date
- Time
- Status

The records remain available after refreshing the browser because they are stored in Local Storage.

---

## 8.8 Lecturer Dashboard

The lecturer dashboard provides functions such as:

- Attendance password generation
- Attendance record viewing
- Search
- Filtering
- Attendance summary
- Record detail review

Main file:

```text
prototype/lecturer-dashboard.html
```

---

## 8.9 Attendance Password

The lecturer can generate or display an attendance password for a class session.

Students use this password when submitting attendance.

This provides simple access control for the attendance submission process.

---

## 8.10 Search and Filtering

Attendance records can be searched or filtered by:

- Student name
- Student ID
- Course
- Date
- Attendance status

This makes it easier for lecturers and administrators to find specific records.

Main file:

```text
prototype/js/record-management.js
```

---

## 8.11 Record Detail View

The record detail function displays full information for a selected attendance record.

Details may include:

- Record ID
- Student ID
- Student name
- Course
- Date
- Time
- Status
- Recorded by
- Notes

---

## 8.12 Status Tracking

Attendance records display statuses such as:

```text
Present
Absent
Late
Pending
```

Where available, lecturers or administrators can update a record status.

---

## 8.13 Administrator Dashboard

The administrator dashboard provides an overall view of the system.

Functions include:

- View all attendance records
- Search records
- Filter records
- Review record details
- Update attendance status
- View user totals
- View attendance metrics

Main file:

```text
prototype/admin-dashboard.html
```

---

## 8.14 Dashboard Metrics

The prototype displays useful summaries such as:

- Total students
- Total attendance records
- Present records
- Absent records
- Late records
- Attendance rate
- Active users
- Most active course

Main file:

```text
prototype/js/metrics.js
```

---

## 8.15 Logout

The logout function removes the active user session from Local Storage.

```javascript
localStorage.removeItem("currentUser");
```

The user is then redirected to the login page.

Main file:

```text
prototype/js/logout.js
```

---

# 9. Main User Workflow

## Student Workflow

```text
Open Landing Page
      ↓
Click Try Demo
      ↓
Enter Student ID and Password
      ↓
Open Student Dashboard
      ↓
Enter Attendance Information
      ↓
Submit Attendance
      ↓
Receive Confirmation
      ↓
View Attendance History
      ↓
Logout
```

## Lecturer Workflow

```text
Enter Lecturer ID and Password
      ↓
Open Lecturer Dashboard
      ↓
Generate Attendance Password
      ↓
View Attendance Records
      ↓
Search and Filter Records
      ↓
View Record Details
      ↓
Review Attendance Summary
      ↓
Logout
```

## Administrator Workflow

```text
Enter Admin ID and Password
      ↓
Open Admin Dashboard
      ↓
View System Metrics
      ↓
View All Attendance Records
      ↓
Search and Filter Records
      ↓
Open Record Details
      ↓
Update Status
      ↓
Logout
```

---

# 10. Technical Architecture

The Smart Classroom Attendance System uses a simple front-end architecture.

```text
HTML
  ↓
Page Structure and Forms

CSS
  ↓
Layout, Design, and Responsiveness

JavaScript
  ↓
Login, Validation, Attendance, Search, Metrics, and Navigation

Browser Local Storage
  ↓
Users, Attendance Records, Current Session, and Metrics
```

The prototype does not use:

- PHP
- MySQL
- Firebase
- A backend server
- A cloud database

This architecture was selected because the project is an academic MVP focused on front-end development and interactive demonstration.

---

# 11. Data Structure and Storage

Browser Local Storage is used to simulate persistent data storage.

The main Local Storage keys are:

```text
users
attendance
currentUser
landingPageMetrics
```

## Users

The `users` key stores sample user accounts.

Example:

```javascript
{
    id: "65001",
    name: "Harry",
    password: "123456",
    role: "student"
}
```

## Attendance

The `attendance` key stores attendance records.

Example:

```javascript
{
    recordID: "ATT001",
    studentID: "65001",
    studentName: "Harry",
    course: "ICT111",
    date: "2026-07-20",
    time: "09:00",
    status: "Present"
}
```

## Current User

The `currentUser` key stores the active login session.

## Landing Page Metrics

The `landingPageMetrics` key stores simple demonstration data such as:

- Page views
- CTA clicks
- Last CTA clicked
- Last visit

---

# 12. Validation and Error Prevention

The prototype includes validation and user feedback.

Examples include:

- Required Student ID
- Required password
- Invalid login message
- Empty attendance-field warning
- Incorrect attendance password warning
- Duplicate attendance warning
- Successful attendance confirmation
- Successful status update confirmation

These messages help users understand what action is required and reduce incorrect data submission.

---

# 13. Prototype Testing

The prototype was tested using sample student, lecturer, and administrator accounts.

The main test cases included:

| Test Case | Expected Result | Result |
|---|---|---|
| Valid student login | Student dashboard opens | Passed |
| Invalid login | Error message appears | Passed |
| Attendance submission | Record is stored | Passed |
| Duplicate submission | Warning appears | Passed |
| Attendance history | Records are displayed | Passed |
| Lecturer login | Lecturer dashboard opens | Passed |
| Record search | Matching records appear | Passed |
| Record filtering | Correct records are displayed | Passed |
| Admin login | Admin dashboard opens | Passed |
| Metrics display | Summary values appear | Passed |
| Logout | User returns to login page | Passed |
| Page refresh | Local Storage data remains | Passed |

---

# 14. Validation Results

Prototype testing showed that users could complete the main workflows.

The main positive results were:

- Users could understand the login process.
- Students could submit attendance.
- Duplicate submissions were prevented.
- Records remained after browser refresh.
- Search and filtering improved record access.
- Role-based dashboards improved navigation.
- Dashboard summaries helped users understand attendance information.

Testing also identified areas for improvement, including clearer labels, improved mobile layout, and stronger security for real deployment.

---

# 15. Startup and Product Metrics

The project uses simple demonstration metrics.

## Landing Page Metrics

- Page views
- CTA clicks
- Prototype starts
- Successful logins

## Product Metrics

- Attendance submissions
- Total users
- Present records
- Absent records
- Late records
- Attendance rate
- Feedback responses

These metrics help evaluate user interest and prototype usage.

Related files:

```text
docs/startup-metrics.md
docs/acquisition-metrics.md
data/acquisition-metrics-template.csv
```

---

# 16. Digital Go-to-Market Strategy

The proposed go-to-market plan focuses on educational users.

The main promotion channels are:

- Class group chats
- University email
- Student club social media
- Classroom demonstrations
- Department websites

The main marketing message is:

> Make classroom attendance faster, clearer, and easier to manage.

The landing page acts as the main entry point for potential users.

Related files:

```text
docs/go-to-market-plan.md
docs/marketing-message.md
landing-page/index.html
```

---

# 17. Business Model

The prototype could be developed into a service for:

- Universities
- Colleges
- Training centres
- Academic departments

Possible business models include:

- Institutional subscription
- Department licence
- Setup and support service
- Custom development
- Reporting and analytics service

The current prototype does not process payments. These business model ideas are included only as future venture possibilities.

---

# 18. Responsible Design and Privacy

The project was designed as an academic prototype.

Responsible design decisions include:

- Using fictional sample accounts
- Avoiding real sensitive student data
- Providing a privacy notice
- Explaining Local Storage limitations
- Avoiding unsupported security claims
- Avoiding unimplemented feature claims

The prototype should not be used to store real confidential information.

---

# 19. Project Limitations

The final prototype has several limitations.

## Local Storage Only

Data is stored only in the browser and is not shared across devices.

## No Backend

The prototype does not include a backend server or centralized database.

## Limited Security

Passwords are stored for demonstration purposes and are not encrypted.

## Single-Device Data

Attendance data is available only on the device and browser where it was created.

## Limited User Management

The system uses predefined sample users and does not include full account registration or password recovery.

## Academic Prototype

The system demonstrates an MVP and is not ready for real institutional deployment.

---

# 20. Future Improvements

Future versions could include:

- Secure backend development
- Cloud database integration
- Password encryption
- User registration
- Password reset
- Institutional account management
- Multi-device synchronization
- Attendance report export
- Email notifications
- Advanced analytics
- Improved accessibility
- Better mobile responsiveness
- Integration with university systems

These improvements would make the system more suitable for real-world use.

---

# 21. Team Contributions

| Team Member | Role | Main Contributions |
|---|---|---|
| Harry | Product Lead | Problem definition, requirements, user evidence, value proposition, final report, and pitch content |
| William | Technical Lead | HTML, CSS, JavaScript, Local Storage, authentication, attendance functions, testing, and integration |
| Qing | UX/UI and Documentation Lead | Interface design, screenshots, documentation, metrics, reflection, and presentation support |

All members contributed to the same GitHub repository.

---

# 22. Final Deliverables

The final project includes:

## Prototype

```text
prototype/
```

## Landing Page

```text
landing-page/
```

## Documentation

```text
docs/
```

## Sample Data

```text
data/final-sample-data.csv
```

## Screenshots

```text
screenshots/
```

## Pitch

```text
pitch/
```

## Main Repository Guide

```text
README.md
```

---

# 23. Conclusion

The Smart Classroom Attendance System successfully demonstrates a complete browser-based attendance workflow.

The prototype includes:

- User login
- Role-based dashboards
- Attendance submission
- Browser Local Storage
- Attendance history
- Search and filtering
- Record detail view
- Status tracking
- Administrator functions
- Dashboard metrics
- Validation and feedback
- Requirement traceability

The project also demonstrates the full development journey from problem discovery and user research to requirement analysis, MVP implementation, testing, documentation, marketing, and venture pitching.

Although the current system has technical limitations, it provides a strong foundation for future development into a secure, centralized, and institution-ready attendance platform.
