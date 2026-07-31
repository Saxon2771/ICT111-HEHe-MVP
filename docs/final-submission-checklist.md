# Final Submission Checklist

## Project Information

**Project Title:** Smart Classroom Attendance System  
**Course:** ICT111 – Introduction to Information Technology  
**Lab:** Lab 14 – Final MVP Release and Venture Pitch  

---

# 1. GitHub Repository

- [ ] The project uses one GitHub repository for the whole team.
- [ ] The repository is accessible to the lecturer.
- [ ] All team members have contributed to the same repository.
- [ ] Team contributions are visible through commits, issues, comments, or documentation.
- [ ] The repository uses clear file and folder names.
- [ ] Duplicate and unnecessary files have been removed.
- [ ] Old or unused prototype files have been removed.
- [ ] The repository does not contain broken links.
- [ ] The repository does not contain empty folders.
- [ ] The latest project version is uploaded.

---

# 2. Final Prototype

- [ ] The landing page opens correctly.
- [ ] The project title is visible on the landing page.
- [ ] The target users are clearly identified.
- [ ] The main problem is explained.
- [ ] The value proposition is visible.
- [ ] The **Try Demo** button opens the login page.
- [ ] The main user pathway works from start to finish.
- [ ] The prototype can be demonstrated without lecturer assistance.

---

# 3. Login and User Roles

## Student Login

- [ ] Student login works with Student ID and Password.
- [ ] Student login redirects to the student dashboard.
- [ ] Invalid student login shows an error message.

## Lecturer Login

- [ ] Lecturer login works with Lecturer ID and Password.
- [ ] Lecturer login redirects to the lecturer dashboard.
- [ ] Invalid lecturer login shows an error message.

## Administrator Login

- [ ] Administrator login works with Admin ID and Password.
- [ ] Administrator login redirects to the admin dashboard.
- [ ] Invalid administrator login shows an error message.

## Authentication Protection

- [ ] Protected dashboard pages check `currentUser`.
- [ ] Users who are not logged in are redirected to the login page.
- [ ] Logout removes `currentUser` from Local Storage.
- [ ] Logout redirects users to the login page.

---

# 4. Sample Login Accounts

- [ ] Student account `65001 / 123456` works.
- [ ] Student account `65002 / 123456` works.
- [ ] Student account `65003 / 123456` works.
- [ ] Lecturer account `L001 / lecturer123` works.
- [ ] Administrator account `A001 / admin123` works.

---

# 5. Student Functions

- [ ] The student dashboard displays the logged-in student's name.
- [ ] The student dashboard displays the student's ID.
- [ ] The student can open the attendance submission form.
- [ ] Required attendance fields are validated.
- [ ] The student can submit an attendance record.
- [ ] A success message appears after submission.
- [ ] Duplicate attendance submission is prevented.
- [ ] The student can view attendance history.
- [ ] The student can view attendance status.
- [ ] The student can view attendance summary information.

---

# 6. Lecturer Functions

- [ ] The lecturer dashboard opens correctly.
- [ ] The lecturer can generate or display an attendance password.
- [ ] The lecturer can view attendance records.
- [ ] The lecturer can search attendance records.
- [ ] The lecturer can filter attendance records.
- [ ] The lecturer can view attendance record details.
- [ ] The lecturer can review attendance status.
- [ ] The lecturer can view useful attendance summaries.

---

# 7. Administrator Functions

- [ ] The administrator dashboard opens correctly.
- [ ] The administrator can view all attendance records.
- [ ] The administrator can search attendance records.
- [ ] The administrator can filter attendance records.
- [ ] The administrator can view record details.
- [ ] The administrator can update attendance status.
- [ ] The administrator can view total users.
- [ ] The administrator can view total attendance records.
- [ ] The administrator can view present records.
- [ ] The administrator can view absent records.
- [ ] The administrator can view late records.
- [ ] The administrator can view attendance rate or other metrics.

---

# 8. Data Storage

- [ ] `database.js` initializes the sample users.
- [ ] `login.js` reads users from Local Storage.
- [ ] `attendance.js` stores attendance records in Local Storage.
- [ ] `currentUser` is stored after successful login.
- [ ] Attendance records remain after refreshing the browser.
- [ ] The Local Storage key `users` exists.
- [ ] The Local Storage key `attendance` exists.
- [ ] The Local Storage key `currentUser` exists after login.
- [ ] Landing-page metrics are stored where applicable.
- [ ] The prototype does not require Firebase.
- [ ] The prototype does not require PHP.
- [ ] The prototype does not require MySQL.
- [ ] The prototype does not require a backend server.

---

# 9. Search, Filter, Detail, and Status

- [ ] Attendance records can be searched by student name.
- [ ] Attendance records can be searched by student ID.
- [ ] Attendance records can be filtered by course.
- [ ] Attendance records can be filtered by date.
- [ ] Attendance records can be filtered by status.
- [ ] A selected attendance record has a detail view.
- [ ] The detail view shows student information.
- [ ] The detail view shows course information.
- [ ] The detail view shows date and time.
- [ ] The detail view shows attendance status.
- [ ] Attendance status displays values such as Present, Absent, or Late.
- [ ] Status updates are saved correctly.

---

# 10. Validation and Feedback

- [ ] Student ID is required.
- [ ] Password is required.
- [ ] Invalid login details show an error.
- [ ] Empty attendance fields show an error.
- [ ] Incorrect attendance password shows an error.
- [ ] Duplicate attendance submission shows a warning.
- [ ] Successful attendance submission shows confirmation.
- [ ] Status updates show confirmation.
- [ ] Error messages are clear and understandable.
- [ ] The system prevents accidental form refresh where necessary.

---

# 11. Final Requirement Audit

- [ ] FR-01 Problem-specific homepage is completed.
- [ ] FR-02 Primary user pathway is completed.
- [ ] FR-03 User input or data submission is completed.
- [ ] FR-04 Data storage or simulated storage is completed.
- [ ] FR-05 View records or list is completed.
- [ ] FR-06 Search, filter, or category is completed.
- [ ] FR-07 Detail view is completed.
- [ ] FR-08 Status or progress tracking is completed.
- [ ] FR-09 Admin or manager function is completed.
- [ ] FR-10 Validation and feedback are completed.
- [ ] FR-11 Dashboard, summary, or metrics are completed.
- [ ] FR-12 Traceability is completed.
- [ ] Missing requirements are clearly explained.
- [ ] Partially completed requirements are clearly identified.
- [ ] Any justified changes are documented.

---

# 12. Documentation

- [ ] `docs/system-requirements.md` is complete.
- [ ] `docs/user-stories.md` is complete.
- [ ] `docs/mvp-feature-list.md` is complete.
- [ ] `docs/feature-implementation-status.md` is updated.
- [ ] `docs/final-traceability-matrix.md` is complete.
- [ ] `docs/final-prototype-report.md` is complete.
- [ ] `docs/final-demo-script.md` is complete.
- [ ] `docs/final-reflection.md` is complete.
- [ ] `docs/final-submission-checklist.md` is complete.
- [ ] `docs/weekly-logbook.md` is updated for Lab 14.
- [ ] Documentation is consistent with the final prototype.
- [ ] Documentation uses the correct project name.
- [ ] Documentation does not mention QR-code attendance.
- [ ] Documentation does not claim unsupported technologies.

---

# 13. Final Sample Data

- [ ] `data/final-sample-data.csv` exists.
- [ ] The sample dataset uses fictional student information.
- [ ] The sample dataset contains Student ID.
- [ ] The sample dataset contains Student Name.
- [ ] The sample dataset contains Course.
- [ ] The sample dataset contains Date.
- [ ] The sample dataset contains Time.
- [ ] The sample dataset contains Attendance Status.
- [ ] The sample dataset is readable.
- [ ] The sample dataset does not contain sensitive personal data.

---

# 14. Final Screenshots

- [ ] `screenshots/final-homepage.png` is uploaded.
- [ ] `screenshots/final-input-form.png` is uploaded.
- [ ] `screenshots/final-record-list.png` is uploaded.
- [ ] `screenshots/final-detail-view.png` is uploaded.
- [ ] `screenshots/final-dashboard.png` is uploaded.
- [ ] `screenshots/final-admin-view.png` is uploaded.
- [ ] `screenshots/final-special-feature.png` is uploaded.
- [ ] Screenshots clearly show the relevant feature.
- [ ] Screenshots are not blurry.
- [ ] Screenshots do not reveal sensitive personal data.
- [ ] Screenshot file names match README links.

---

# 15. Final Demo Script

- [ ] The demo script lasts approximately 5–7 minutes.
- [ ] The demo begins with the project problem.
- [ ] The demo explains the target users.
- [ ] The landing page is demonstrated.
- [ ] Student login is demonstrated.
- [ ] Student attendance submission is demonstrated.
- [ ] Duplicate attendance prevention is demonstrated.
- [ ] Student attendance history is demonstrated.
- [ ] Lecturer functions are demonstrated.
- [ ] Admin functions are demonstrated.
- [ ] Search and filter functions are demonstrated.
- [ ] Record detail view is demonstrated.
- [ ] Dashboard metrics are explained.
- [ ] Browser Local Storage is explained.
- [ ] Limitations are explained.
- [ ] Future improvements are explained.
- [ ] The closing summary clearly explains the system's value.

---

# 16. Final Venture Pitch

- [ ] The `pitch` folder exists.
- [ ] `pitch/final-pitch-outline.md` exists, or final pitch slides are uploaded.
- [ ] The pitch includes the project title.
- [ ] The pitch explains the problem.
- [ ] The pitch identifies target users.
- [ ] The pitch includes user evidence.
- [ ] The pitch explains the solution.
- [ ] The pitch includes a clear value proposition.
- [ ] The pitch presents the final prototype.
- [ ] The pitch explains the main features.
- [ ] The pitch includes a possible business model.
- [ ] The pitch includes validation results.
- [ ] The pitch includes the go-to-market plan.
- [ ] The pitch includes product or startup metrics.
- [ ] The pitch explains limitations.
- [ ] The pitch includes future improvements.
- [ ] The pitch presents the Smart Classroom Attendance System as one complete product.

---

# 17. README

- [ ] `README.md` includes the project overview.
- [ ] `README.md` explains the problem.
- [ ] `README.md` identifies target users.
- [ ] `README.md` lists the main features.
- [ ] `README.md` lists the technology stack.
- [ ] `README.md` includes the folder structure.
- [ ] `README.md` includes sample login accounts.
- [ ] `README.md` links to the prototype.
- [ ] `README.md` links to final documentation.
- [ ] `README.md` links to final screenshots.
- [ ] `README.md` links to the final pitch.
- [ ] `README.md` links to final sample data.
- [ ] `README.md` includes team contributions.
- [ ] All README links work correctly.

---

# 18. Team Contribution Evidence

- [ ] Harry has visible contribution evidence.
- [ ] William has visible contribution evidence.
- [ ] Qing has visible contribution evidence.
- [ ] Each member has at least one meaningful commit.
- [ ] Individual responsibilities are documented.
- [ ] Contributions match the weekly logbook.
- [ ] Contributions match the README contribution table.
- [ ] The final project appears as one integrated team project.

---

# 19. Privacy and Responsible Design

- [ ] The prototype uses fictional sample accounts.
- [ ] No real passwords are included.
- [ ] No sensitive personal information is included.
- [ ] No private student records are included.
- [ ] Browser Local Storage limitations are clearly explained.
- [ ] The project is described as an academic prototype.
- [ ] The system does not claim production-level security.
- [ ] The system does not claim encrypted password storage.
- [ ] The system does not claim real-time cloud synchronization.
- [ ] Unimplemented features are not advertised as completed.
- [ ] QR-code functionality is not included.

---

# 20. Browser and Technical Testing

- [ ] The prototype works in Google Chrome.
- [ ] HTML pages load correctly.
- [ ] CSS files load correctly.
- [ ] JavaScript files load correctly.
- [ ] Images load correctly.
- [ ] Relative file paths are correct.
- [ ] There are no `404` file errors.
- [ ] There are no red JavaScript console errors.
- [ ] There are no `Uncaught ReferenceError` messages.
- [ ] There are no `Cannot read properties of null` messages.
- [ ] Forms do not refresh unexpectedly.
- [ ] Buttons perform the correct actions.
- [ ] Page navigation works.
- [ ] Browser refresh does not delete saved attendance data.
- [ ] The prototype works without internet access, except for external fonts where applicable.

---

# 21. Final Repository Structure

- [ ] The `prototype` folder exists.
- [ ] The `landing-page` folder exists.
- [ ] The `docs` folder exists.
- [ ] The `data` folder exists.
- [ ] The `screenshots` folder exists.
- [ ] The `pitch` folder exists.
- [ ] `README.md` is stored in the repository root.
- [ ] Important files are stored in the correct folders.
- [ ] File names use consistent spelling.
- [ ] File names match links used in documentation.

---

# 22. Final Submission Verification

- [ ] The GitHub repository link is ready to submit.
- [ ] The GitHub repository is accessible to the lecturer.
- [ ] The final prototype is available.
- [ ] The final prototype can be demonstrated successfully.
- [ ] The final report is uploaded.
- [ ] The final demo script is uploaded.
- [ ] The final reflection is uploaded.
- [ ] The final checklist is uploaded.
- [ ] The final sample dataset is uploaded.
- [ ] The final screenshots are uploaded.
- [ ] The final pitch is uploaded.
- [ ] The weekly logbook is updated.
- [ ] The README is updated.
- [ ] All team contributions are documented.
- [ ] No broken links remain.
- [ ] No unnecessary sensitive data is included.

---

# Final Approval

## Product Lead

- [ ] Final project content has been reviewed.

**Name:** Harry  
**Date:** ____________________

## Technical Lead

- [ ] Final prototype and technical functions have been tested.

**Name:** William  
**Date:** ____________________

## UX/UI and Documentation Lead

- [ ] Final interface, screenshots, and documentation have been reviewed.

**Name:** Qing  
**Date:** ____________________

---

# Final Status

- [ ] Ready for final submission
- [ ] Ready for final demonstration
- [ ] Ready for venture pitch
