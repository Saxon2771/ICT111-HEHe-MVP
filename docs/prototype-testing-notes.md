# Prototype Testing Notes

## Project

Smart Classroom Attendance System

## Lab

Lab 11 – MVP Implementation Sprint 2

---

## Testing Objective

The purpose of this test is to check whether the main user journey works correctly from login to attendance submission, record viewing, search, filtering, status updating, and dashboard metrics.

---

## Test Cases

| Test ID | Feature | Test Steps | Expected Result | Actual Result | Status | Fix or Next Action |
|---|---|---|---|---|---|---|
| TC-01 | Student Login | Enter valid Student ID 65001 and password 123456 | Student dashboard opens | Student dashboard opened successfully | Passed | None |
| TC-02 | Invalid Login | Enter incorrect password | Error message appears | Invalid login message appeared | Passed | None |
| TC-03 | Mark Attendance | Enter course and attendance password, then submit | Attendance record is stored | Record saved in Local Storage | Passed | None |
| TC-04 | Duplicate Attendance | Submit the same course twice on the same day | Duplicate submission is rejected | Warning message appeared | Passed | None |
| TC-05 | View Attendance History | Open student dashboard after attendance submission | Saved record appears in the table | Record displayed correctly | Passed | None |
| TC-06 | Search Records | Search by Student ID | Matching records appear | Search worked correctly | Passed | None |
| TC-07 | Filter Records | Select Present status filter | Only Present records appear | Filter worked correctly | Passed | None |
| TC-08 | Update Status | Admin changes Present to Absent | Record status updates | Status updated in Local Storage | Passed | None |
| TC-09 | Dashboard Metrics | Add new attendance record | Metric totals update | Metrics updated correctly | Passed | None |
| TC-10 | Logout | Click Logout | User returns to login page | Logout worked correctly | Passed | None |

---

## Defects Found

| Defect ID | Problem | Cause | Fix |
|---|---|---|---|
| D-01 | Login button refreshed the page | Button submitted the HTML form | Added `type="button"` |
| D-02 | Student information did not display | Missing HTML element IDs | Added dynamic profile IDs |
| D-03 | Attendance table remained empty | JavaScript file was not linked | Linked `attendance.js` |
| D-04 | Records disappeared after refresh | Records were not saved correctly | Used `localStorage.setItem()` |
| D-05 | Duplicate records appeared | No duplicate validation | Added same-student, course, and date check |

---

## Testing Result

The main prototype journey works successfully. Login, attendance submission, Local Storage, record display, search, filtering, status updates, dashboard metrics, and logout have been tested.

---

## Remaining Testing

- Test the prototype on different browsers.
- Test mobile screen responsiveness.
- Test with larger attendance datasets.
- Test invalid and empty form inputs.
- Test Local Storage clearing and recovery.

---

## Conclusion

The Lab 11 prototype meets the main functional requirements. Minor improvements remain, but the core attendance journey is working from start to finish.
