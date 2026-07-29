# Demo Script

## Demo Objective

The demo must prove that the Smart Classroom Attendance System can reduce manual attendance work by supporting role-based login, attendance submission, automatic record storage, attendance history, lecturer record review, search, filtering, status updates, and dashboard metrics.

The demo must also clearly disclose the remaining requirement gaps that must be completed before Lab 14.

## Presenter Roles

| Member | Role in Demo | Part Presented |
| --- | --- | --- |
| Htut Myat Moe | Product and Validation Presenter | Opening problem, target users, product value, and testing evidence |
| Sai Kaung Htet Kyaw | UX/UI and Documentation Presenter | Landing page, user journey, interface explanation, and closing |
| Hein Htet | Technical Presenter | Login, attendance workflow, lecturer/admin functions, requirements, and limitations |

## Demo Preparation

Before presenting:

1. Open the landing page and prototype in a browser.
2. Clear old Browser Local Storage only if clean demo data is required.
3. Confirm the sample accounts work.
4. Create at least one sample attendance record.
5. Confirm search, filtering, status updates, and dashboard metrics work.
6. Keep screenshots available as a backup.
7. Do not claim report export or complete admin management is finished until those features are implemented.

## Sample Login Accounts

| Role | ID | Password |
| --- | --- | --- |
| Student | 65001 | 123456 |
| Student | 65002 | 123456 |
| Student | 65003 | 123456 |
| Lecturer | L001 | lecturer123 |
| Administrator | A001 | admin123 |

## Demo Flow

| Step | Screen / Feature | What the Presenter Does | Suggested Presenter Script | Requirement ID | Expected User Value |
| --- | --- | --- | --- | --- | --- |
| 1 | Landing page | Open the project landing page. | "Many classes still use paper sheets or verbal roll calls. Our system provides a faster browser-based attendance workflow for students, lecturers, and administrators." | FR1, FR2, NFR1 | The audience understands the problem, users, and purpose. |
| 2 | Login page | Show Student ID and Password fields and log in as Student 65001. | "The student logs in using an ID and Password. The system verifies the credentials and opens the correct role-based interface." | FR1, FR3, NFR2, NFR3 | Fast identity verification and correct access. |
| 3 | Student dashboard | Show the student profile, summary, and navigation. | "The student dashboard gives the student a simple starting point and shows the available attendance functions." | FR5, NFR1 | Students can understand where to submit and review attendance. |
| 4 | Attendance submission | Enter the required course and attendance information, then submit. | "The student submits attendance. The system validates the information, prevents duplicates, and saves the record automatically." | FR2, FR4, NFR5, NFR7 | Less manual work and more reliable records. |
| 5 | Confirmation and history | Show the saved record in attendance history. | "The saved record appears in the student's attendance history, so the student can confirm that attendance was recorded." | FR4, FR5 | Students can verify their own records. |
| 6 | Lecturer login and dashboard | Log out, sign in as L001, and open the lecturer dashboard. | "The lecturer can review classroom attendance without checking a paper sheet." | FR6 | Lecturers gain faster access to attendance information. |
| 7 | Search and filtering | Search by Student ID and filter by course or status. | "The lecturer can quickly find a specific record instead of manually checking a long list." | FR7 | Faster record retrieval and fewer errors. |
| 8 | Status update and metrics | Update a sample attendance status and show the dashboard totals. | "When an attendance status changes, the saved record and dashboard metrics update in Browser Local Storage." | FR4, FR6, NFR5, NFR7 | Records and summary information remain consistent. |
| 9 | Report and admin requirement check | Show the current admin interface and explain current gaps. | "The administrator can currently view users, records, and metrics. Complete student and course editing, and report export, remain final required improvements before Lab 14." | FR8, FR9, FR10 | Honest requirement traceability and a clear final work plan. |
| 10 | Testing evidence | Show `user-testing-evidence.png` and the improvement list. | "Our simulated final user test found that the core flow works, but report export and complete admin management must be finished before release." | FR1-FR10 | The audience sees evidence-based decisions. |
| 11 | Closing | Return to the landing page or final slide. | "Attendify replaces slow manual attendance with a clearer digital workflow. The core experience is working, and the final improvement plan focuses on completing every required feature before Lab 14." | FR1-FR10 | A clear value statement and next step. |

## Screen-by-Screen Timing

| Section | Suggested Time |
| --- | ---: |
| Problem and value proposition | 30 seconds |
| Landing page and login | 35 seconds |
| Student attendance workflow | 60 seconds |
| Lecturer search and management | 55 seconds |
| Administrator and requirement gaps | 35 seconds |
| Testing evidence and closing | 25 seconds |
| Total | About 4 minutes |

## Backup Demonstration Plan

If a live page does not load:

1. Use `/screenshots/demo-flow.png` to explain the complete flow.
2. Use `/screenshots/user-testing-evidence.png` to explain testing evidence.
3. Open the Markdown documents directly from GitHub.
4. Explain the known Local Storage limitation.
5. Continue the presentation without claiming that an unavailable function worked.

## Closing Statement

The Smart Classroom Attendance System gives students a faster way to submit and review attendance while giving lecturers and administrators clearer records and dashboard information. The core workflow is working, and the final Lab 14 preparation will complete the missing report export and administrator management requirements.
