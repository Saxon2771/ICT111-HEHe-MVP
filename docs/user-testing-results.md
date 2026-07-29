# User Testing Results

## 1. Testing Summary

- Project: Smart Classroom Attendance System
- Test date: 29 July 2026
- Testing mode: Structured simulated final user test
- Number of representative testers: 5
- Tester profiles: 3 students, 1 lecturer, and 1 administrator representative
- Platform: Desktop web browser using Browser Local Storage
- Prototype access: Local project files in the shared GitHub repository
- Detailed evidence: `/data/user-testing-results.csv`

## 2. Overall Results

| Metric | Result |
| --- | ---: |
| Tester profiles | 5 |
| Tasks per tester | 8 |
| Total task attempts | 40 |
| Fully completed task attempts | 25 |
| Partially completed task attempts | 8 |
| Failed task attempts | 7 |
| Full completion rate | 62.5% |
| Full or partial completion rate | 82.5% |
| Average feedback score | 3.4 / 5 |
| Critical issues | 2 |
| Important issues | 3 |
| Useful issues | 2 |

## 3. Task Completion Summary

| Task ID | Task | Full Completion | Main Issue Found | Evidence / Comment |
| --- | --- | ---: | --- | --- |
| T01 | Understand the landing page purpose | 5/5 | None critical | All profiles understood that the system manages classroom attendance. |
| T02 | Log in using Student ID and Password | 5/5 | Error guidance could be clearer | Valid sample accounts opened the expected role interface. |
| T03 | Submit attendance | 3/5 | Attendance-password instructions were not immediately clear | One student required a second attempt before submission. |
| T04 | View attendance history | 5/5 | Status explanation could be clearer | Saved records were visible and understandable. |
| T05 | Lecturer views records | 3/5 | Record-list navigation was not obvious to one tester | The lecturer workflow worked after locating the correct page. |
| T06 | Search or filter records | 4/5 | Course and status filter labels need clearer wording | Search worked, but one tester selected the wrong filter. |
| T07 | Export attendance report | 0/5 | Required export feature is unavailable | FR8 is not implemented in the current prototype. |
| T08 | Manage students and courses | 0/5 | Administrator can view information but complete editing is unavailable | FR9 and FR10 are only partially addressed. |

## 4. Common Usability and Requirement Issues

| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UT-01 | Attendance report export is not available. | Critical | FR8 | Add CSV or PDF export and test the downloaded report. |
| UT-02 | Administrator cannot fully add, edit, or delete students and courses. | Critical | FR9, FR10 | Complete administrator forms, validation, save actions, and confirmation messages. |
| UT-03 | Requirement IDs and descriptions are inconsistent between `system-requirements.md`, `feature-implementation-status.md`, and some older documents. | Important | FR1-FR10 | Use `system-requirements.md` as the source of truth and update all traceability tables. |
| UT-04 | Attendance-password instructions are not clear enough for first-time users. | Important | FR2, FR3, NFR1 | Add a short instruction and example beside the field. |
| UT-05 | Some search and filter labels are too general. | Important | FR7, NFR1 | Rename labels and add a Reset Filters button. |
| UT-06 | Mobile spacing and button placement require more testing. | Useful | NFR4 | Test common phone widths and improve responsive spacing. |
| UT-07 | Browser Local Storage and plain-text demonstration passwords are not suitable for a production release. | Future | NFR3, NFR5 | Use secure server authentication and a central database in a future version. |

## 5. User Feedback Summary

### What Users Liked

- The Student ID and Password login was simple.
- The main student attendance workflow was faster than a paper sign-in process.
- Saved attendance appeared in history.
- Search and filtering reduced the time needed to locate records.
- Dashboard totals made the system easier to understand.
- The role-based approach clearly separated student, lecturer, and administrator work.

### What Users Disliked or Misunderstood

- The attendance-password step needed clearer instructions.
- Some record-list and filter labels were not immediately obvious.
- Report export could not be completed.
- Administrator editing was incomplete.
- The current prototype limitation was not always visible until it was explained.

### Main Suggestions

- Add report export before the final presentation.
- Complete student and course management.
- Add stronger form validation and confirmation messages.
- Add a short help section or demo instructions.
- Improve mobile responsiveness.
- Align all requirement IDs before submission.

## 6. Evidence-Based Decision

**Decision: Needs major targeted revision before Lab 14.**

The student and lecturer core journey is working, including login, attendance submission, history, record viewing, search, filtering, status updates, and dashboard metrics. However, the prototype cannot be considered fully ready while FR8 report export and complete FR9-FR10 administrator management remain unfinished.

The team should complete the two Critical improvements first, align requirement documentation, retest all eight tasks, and confirm that the final full completion rate reaches at least 85%.

## 7. Retest Requirements

After improvements, repeat these tasks:

| Retest ID | Feature | Required Result |
| --- | --- | --- |
| RT-01 | Report export | Downloaded report contains correct attendance fields and opens successfully. |
| RT-02 | Student management | Administrator can add, edit, and remove a demonstration student. |
| RT-03 | Course management | Administrator can add and edit a demonstration course. |
| RT-04 | Attendance instructions | A first-time student submits attendance without facilitator help. |
| RT-05 | Search and filters | Lecturer finds the requested record within one minute. |
| RT-06 | Requirement traceability | Every demo step uses the same IDs as `system-requirements.md`. |

## 8. Conclusion

The Lab 13 testing evidence supports continuing to the final improvement stage. The core product value is clear, but the team must close the required feature gaps and complete a final retest before releasing and presenting the Lab 14 MVP.
