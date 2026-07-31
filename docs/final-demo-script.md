# Final Demo Script

## Project Information

**Project Title:** Smart Classroom Attendance System  
**Course:** ICT111 – Introduction to Information Technology  
**Lab:** Lab 14 – Final MVP Release and Venture Pitch  
**Demo Duration:** Approximately 5–7 minutes  

---

# 1. Demo Purpose

The purpose of this demonstration is to present the final Smart Classroom Attendance System as a complete and interactive Minimum Viable Product.

The demonstration will show:

- The project landing page
- User login
- Student attendance submission
- Lecturer attendance management
- Administrator functions
- Browser Local Storage
- Search and filtering
- Dashboard metrics
- Validation and feedback
- Project limitations and future improvements

---

# 2. Demo Preparation

Before starting the demonstration, confirm that:

- The landing page opens correctly.
- All JavaScript files are linked correctly.
- Browser Local Storage contains sample users.
- Sample attendance records are available.
- Student, lecturer, and administrator accounts work.
- There are no red errors in the browser console.
- All screenshots and documentation are uploaded to GitHub.

---

# 3. Sample Login Accounts

| Role | ID | Password |
|---|---|---|
| Student | 65001 | 123456 |
| Student | 65002 | 123456 |
| Student | 65003 | 123456 |
| Lecturer | L001 | lecturer123 |
| Administrator | A001 | admin123 |

---

# 4. Demo Timeline

| Section | Estimated Time |
|---|---:|
| Introduction | 30 seconds |
| Landing Page | 40 seconds |
| Login and Validation | 40 seconds |
| Student Workflow | 1 minute 30 seconds |
| Lecturer Workflow | 1 minute |
| Administrator Workflow | 1 minute |
| Data Storage and Metrics | 40 seconds |
| Limitations and Future Improvements | 30 seconds |
| Closing | 20 seconds |

---

# 5. Detailed Demo Script

## Part 1 — Introduction

**Estimated time:** 30 seconds

### Presenter Action

Open the project landing page:

```text
landing-page/index.html
```

### Presenter Script

> Good morning or good afternoon. Our project is the Smart Classroom Attendance System. It was developed to improve the way classroom attendance is recorded and managed.

> Traditional attendance methods can be time-consuming, difficult to monitor, and affected by human error. Our solution is a simple browser-based system that supports students, lecturers, and administrators through role-based functions.

> The prototype was developed using HTML, CSS, JavaScript, and Browser Local Storage.

---

## Part 2 — Landing Page

**Estimated time:** 40 seconds

### Presenter Action

Show the main sections of the landing page.

Point to:

- Project title
- Problem statement
- Main features
- Target users
- Workflow
- Call-to-action button
- Privacy notice

### Presenter Script

> This is the landing page of our Smart Classroom Attendance System.

> The landing page explains the problem, the proposed solution, the target users, and the main features of the prototype.

> The target users are students, lecturers, administrators, and educational institutions.

> The main call-to-action button allows visitors to open and test the working prototype.

### Presenter Action

Click:

```text
Try Demo
```

The system should open:

```text
prototype/login.html
```

---

## Part 3 — Login and Validation

**Estimated time:** 40 seconds

### Presenter Action

First, leave the login fields empty and click the Login button.

### Presenter Script

> The login form includes validation. Users cannot continue without entering the required ID and password.

### Presenter Action

Enter an incorrect ID or password.

Example:

```text
ID: 65001
Password: wrongpassword
```

Click Login.

### Presenter Script

> When incorrect login information is entered, the system displays an error message and prevents access.

### Presenter Action

Now enter the valid student account:

```text
ID: 65001
Password: 123456
```

Click Login.

### Presenter Script

> The system checks the user information stored in Browser Local Storage. After successful authentication, the student is redirected to the student dashboard.

---

## Part 4 — Student Workflow

**Estimated time:** 1 minute 30 seconds

### Presenter Action

Show the student dashboard.

Point to:

- Student name
- Student ID
- Attendance summary
- Attendance form
- Attendance history
- Logout option

### Presenter Script

> The student dashboard loads the current user's information dynamically from Browser Local Storage.

> The student can view their name, ID, attendance summary, and attendance history.

### Presenter Action

Open the attendance submission section.

Enter sample attendance information.

Example:

```text
Course: ICT111
Attendance Password: ICT111
```

Click the attendance submission button.

### Presenter Script

> Students can submit attendance by entering the required class information and attendance password.

> After successful submission, the system stores the attendance record in Browser Local Storage and displays a confirmation message.

### Presenter Action

Show the newly added attendance record in the history table.

### Presenter Script

> The new attendance record is immediately displayed in the student's attendance history.

### Presenter Action

Try to submit the same attendance again.

### Presenter Script

> The system also includes duplicate prevention. A student cannot submit attendance more than once for the same class and date.

### Presenter Action

Point to attendance statistics.

### Presenter Script

> The dashboard summarizes the student's attendance records, such as total attendance, present records, late records, or attendance rate.

### Presenter Action

Click Logout.

### Presenter Script

> The logout function removes the current user session from Browser Local Storage and redirects the user to the login page.

---

## Part 5 — Lecturer Workflow

**Estimated time:** 1 minute

### Presenter Action

Log in using:

```text
ID: L001
Password: lecturer123
```

### Presenter Script

> Next, I will demonstrate the lecturer-side workflow.

### Presenter Action

Show the lecturer dashboard.

Point to:

- Lecturer information
- Attendance password feature
- Attendance records
- Search
- Filters
- Record details
- Attendance summary

### Presenter Script

> The lecturer dashboard allows lecturers to manage classroom attendance information.

> The lecturer can generate or display a one-time attendance password for a class session.

### Presenter Action

Demonstrate the attendance password generator or attendance-code display.

### Presenter Script

> Students use this password to submit attendance for the active class.

### Presenter Action

Show the attendance record list.

### Presenter Script

> The lecturer can view attendance records submitted by students.

### Presenter Action

Use the search box.

Search for:

```text
Harry
```

or:

```text
65001
```

### Presenter Script

> The search function helps lecturers quickly find a student by name or Student ID.

### Presenter Action

Use a filter such as:

```text
Status: Present
```

or:

```text
Course: ICT111
```

### Presenter Script

> Records can also be filtered by course, date, or attendance status.

### Presenter Action

Open a record detail view.

### Presenter Script

> The detail view shows complete information, including the student, course, date, time, and status.

---

## Part 6 — Administrator Workflow

**Estimated time:** 1 minute

### Presenter Action

Log out and log in using:

```text
ID: A001
Password: admin123
```

### Presenter Script

> The administrator dashboard provides an overall view of the attendance system.

### Presenter Action

Show:

- Total users
- Total attendance records
- Present count
- Absent count
- Late count
- Attendance rate
- Attendance record table
- Search and filter controls

### Presenter Script

> The administrator can view useful system-wide summaries and attendance metrics.

> These metrics help administrators understand overall attendance activity.

### Presenter Action

Search or filter attendance records.

### Presenter Script

> Administrators can search and filter records to locate specific attendance information.

### Presenter Action

Update the status of one record, where available.

For example:

```text
Late → Present
```

### Presenter Script

> The administrator can also update an attendance status when a correction is required.

> The updated status is stored in Browser Local Storage and remains available after refreshing the page.

---

## Part 7 — Data Storage and Metrics

**Estimated time:** 40 seconds

### Presenter Action

Open browser Developer Tools:

```text
F12
```

Then open:

```text
Application
→ Local Storage
```

### Presenter Script

> The prototype does not use a backend server or external database.

> Instead, it uses Browser Local Storage to simulate data storage.

### Presenter Action

Show the following keys:

```text
users
attendance
currentUser
landingPageMetrics
```

### Presenter Script

> The users key stores sample user accounts.

> The attendance key stores attendance records.

> The currentUser key stores the active login session.

> The landingPageMetrics key stores demonstration data such as page views and CTA clicks.

> This approach allows the prototype to work using only HTML, CSS, and JavaScript.

---

## Part 8 — Validation and Requirement Coverage

**Estimated time:** 30 seconds

### Presenter Action

Open:

```text
docs/final-traceability-matrix.md
```

### Presenter Script

> The final traceability matrix connects each system requirement to a user story, MVP feature, prototype screen, evidence, and completion status.

> The prototype covers the main requirements, including the homepage, user pathway, data submission, storage, record list, search and filtering, detail view, status tracking, admin functions, validation, dashboard metrics, and traceability.

---

## Part 9 — Limitations and Future Improvements

**Estimated time:** 30 seconds

### Presenter Script

> The current system is an academic MVP and has several limitations.

> Data is stored only in the browser, so it is not synchronized across multiple devices.

> The prototype does not use a secure backend, encrypted passwords, or a centralized cloud database.

> Future improvements could include secure backend integration, password encryption, cloud synchronization, institutional user management, report export, and advanced analytics.

---

## Part 10 — Closing

**Estimated time:** 20 seconds

### Presenter Script

> In conclusion, the Smart Classroom Attendance System demonstrates a complete browser-based attendance workflow for students, lecturers, and administrators.

> The project combines user research, requirement analysis, interface design, JavaScript development, Local Storage, testing, documentation, and venture planning.

> Thank you for watching our final demonstration.

---

# 6. Main Student Workflow Summary

```text
Landing Page
      ↓
Try Demo
      ↓
Student Login
      ↓
Student Dashboard
      ↓
Enter Course and Attendance Password
      ↓
Submit Attendance
      ↓
Attendance Stored in Local Storage
      ↓
View Attendance History and Summary
      ↓
Logout
```

---

# 7. Main Lecturer Workflow Summary

```text
Lecturer Login
      ↓
Lecturer Dashboard
      ↓
Generate or Display Attendance Password
      ↓
View Student Attendance Records
      ↓
Search and Filter Records
      ↓
View Record Details
      ↓
Review Attendance Summary
      ↓
Logout
```

---

# 8. Main Administrator Workflow Summary

```text
Administrator Login
      ↓
Admin Dashboard
      ↓
View System Metrics
      ↓
View All Attendance Records
      ↓
Search and Filter Records
      ↓
View Details
      ↓
Update Attendance Status
      ↓
Confirm Saved Changes
      ↓
Logout
```

---

# 9. Presenter Responsibilities

| Presenter | Demo Responsibility |
|---|---|
| Harry | Introduction, problem, target users, value proposition, and closing |
| William | Login, student workflow, lecturer workflow, Local Storage, and technical explanation |
| Qing | Admin dashboard, metrics, validation, limitations, and future improvements |

---

# 10. Backup Plan

If the live prototype has a technical problem:

1. Refresh the browser.
2. Check that JavaScript files are linked correctly.
3. Open the browser console and check for errors.
4. Confirm that sample users exist in Local Storage.
5. Clear Local Storage and reload `database.js` if necessary.
6. Use final screenshots to explain the affected function.
7. Continue the presentation using the final pitch outline.

---

# 11. Final Demo Checklist

- [ ] Landing page opens correctly.
- [ ] Try Demo button works.
- [ ] Invalid login validation works.
- [ ] Student login works.
- [ ] Student information loads correctly.
- [ ] Attendance submission works.
- [ ] Duplicate prevention works.
- [ ] Attendance history displays records.
- [ ] Student metrics display correctly.
- [ ] Lecturer login works.
- [ ] Attendance password feature works.
- [ ] Lecturer record list works.
- [ ] Search and filter functions work.
- [ ] Record detail view works.
- [ ] Admin login works.
- [ ] Admin metrics display correctly.
- [ ] Attendance status update works.
- [ ] Local Storage contains the required data.
- [ ] Logout works for every role.
- [ ] No red JavaScript console errors appear.
- [ ] Demo can be completed within 5–7 minutes.

---

# 12. Final Demo Status

- [ ] Demo script reviewed by all members
- [ ] Presenter roles assigned
- [ ] Prototype tested before presentation
- [ ] Sample accounts confirmed
- [ ] Backup screenshots prepared
- [ ] Ready for final demonstration
