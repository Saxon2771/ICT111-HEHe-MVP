# User Testing Plan

## 1. Testing Objective

The purpose of the Lab 13 user test is to determine whether representative users can understand the product, log in, submit attendance, view saved records, use lecturer search tools, and understand the administrator interface before the final Lab 14 release.

The test also checks whether every major prototype feature remains connected to `system-requirements.md`.

## 2. Testing Mode

This Lab 13 package uses a structured simulated final user test based on representative student, lecturer, and administrator profiles and the problems already recorded in previous prototype testing.

The same plan can be repeated with real testers without changing the tasks or result format.

## 3. Test User Profile

| User Type | Number of Testers | Tester IDs | Why This User Type Matters |
| --- | ---: | --- | --- |
| University students | 3 | U01, U02, U03 | Students are the main users who log in, submit attendance, and review history. |
| Lecturer | 1 | U04 | Lecturers review, search, filter, and update attendance records. |
| Academic administrator representative | 1 | U05 | Administrators need student, course, record, and dashboard management. |
| Total | 5 | U01-U05 | Covers the three main system roles. |

## 4. Testing Environment

- Platform: Desktop or laptop web browser
- Prototype storage: Browser Local Storage
- Suggested browsers: Chrome and Microsoft Edge
- Sample data: Demonstration student, lecturer, course, and attendance records
- Test duration: About 10-15 minutes per tester
- Facilitator rule: Do not guide the tester unless the tester is stuck for more than 30 seconds

## 5. Testing Tasks

| Task ID | User Task | Main User Role | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- | --- |
| T01 | Open the landing page and explain what the system is for. | All | FR1, FR2, NFR1 | User correctly identifies the target users, problem, and main benefit within one minute. | Clarity of value message and call-to-action. |
| T02 | Log in using a valid Student ID and Password. | Student | FR1, FR3, NFR2, NFR3 | Correct dashboard opens within five seconds without assistance. | Field labels, error messages, and role redirection. |
| T03 | Submit attendance for a course. | Student | FR2, FR4, NFR5, NFR7 | Attendance is saved once and a duplicate submission is rejected. | Form instructions, validation, and confirmation. |
| T04 | View the saved attendance history. | Student | FR5 | Tester finds the new record and correctly explains its status. | Table clarity, date, course, and status labels. |
| T05 | Log in as lecturer and view attendance records. | Lecturer | FR6 | Lecturer can locate the attendance record list without help. | Navigation and record visibility. |
| T06 | Search or filter attendance records. | Lecturer | FR7 | Lecturer finds a requested student or course record within one minute. | Search wording, filter labels, and result accuracy. |
| T07 | Export an attendance report. | Lecturer/Admin | FR8 | User downloads or generates a usable report. | Whether the required export feature is available and understandable. |
| T08 | Manage student and course information. | Administrator | FR9, FR10 | Administrator can add, edit, or remove a student and update a course. | Completeness of administrator functions and confirmation messages. |

## 6. Success Metrics

| Metric | Target Before Lab 14 |
| --- | ---: |
| Overall full task completion rate | At least 85% |
| Student login success | 100% |
| Attendance submission success | At least 90% |
| Attendance history success | At least 90% |
| Lecturer search success | At least 85% |
| Report export success | 100% after implementation |
| Administrator management success | At least 90% after implementation |
| Average feedback score | At least 4.0 out of 5 |
| Critical unresolved issues | 0 before final release |

## 7. Testing Procedure

1. Explain that the activity evaluates the prototype, not the tester.
2. Tell the tester that the prototype uses demonstration data.
3. Give the tester one task at a time.
4. Ask the tester to think aloud while completing each task.
5. Do not explain where to click unless the tester is stuck.
6. Record completion as Yes, Partial, or No.
7. Record completion time, confusion points, comments, and related requirement IDs.
8. Ask the final feedback questions.
9. Add each issue to the final improvement list.
10. Retest all Critical and Important fixes before Lab 14.

## 8. Final Feedback Questions

1. What was the easiest part of the system?
2. What was the most confusing part?
3. Did the system clearly confirm that attendance was saved?
4. Were the search and filter labels easy to understand?
5. What information should appear in an exported report?
6. What administrator action was missing or unclear?
7. Would this system reduce time compared with manual attendance?
8. What is the most important improvement before final release?

## 9. Observation Notes Template

For each tester, record:

- Tester ID and user role
- Task attempted
- Yes, Partial, or No completion
- Completion time
- Confusion point
- User comment
- Related requirement
- Recommended improvement
- Issue severity

## 10. Ethical and Privacy Reminder

- Do not collect unnecessary personal information.
- Use tester IDs instead of full names.
- Explain that the prototype is for class learning and improvement.
- Do not enter real passwords or sensitive student records.
- Inform testers that demonstration data is stored only in their current browser.
- Remove any test data that should not remain after the session.

## 11. Acceptance Decision

The prototype is ready for Lab 14 only when:

- The student and lecturer core workflows pass.
- FR8 report export is implemented and tested.
- FR9 and FR10 administrator management are implemented and tested.
- Requirement IDs are consistent across the main documents.
- No Critical issue remains open.
