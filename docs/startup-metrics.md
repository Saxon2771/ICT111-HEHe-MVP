# Startup and Product Metrics

## Project

Smart Classroom Attendance System

## Purpose

These metrics help students, lecturers, administrators, and the development team understand attendance activity, user participation, system performance, and prototype effectiveness.

---

## Metrics

| Metric ID | Metric | Description | Calculation | Purpose |
|---|---|---|---|---|
| M-01 | Total Users | Total number of registered students, lecturers, and administrators | Count all users in Local Storage | Measures system adoption |
| M-02 | Total Attendance Records | Total attendance submissions stored in the system | Count attendance records | Measures system usage |
| M-03 | Present Records | Number of attendance records marked Present | Count status = Present | Measures student participation |
| M-04 | Absent Records | Number of attendance records marked Absent | Count status = Absent | Identifies attendance problems |
| M-05 | Attendance Rate | Percentage of Present records from all attendance records | Present ÷ Total × 100 | Measures overall attendance performance |
| M-06 | Active Students | Number of students with at least one attendance record | Count unique Student IDs | Measures active users |
| M-07 | Most Active Course | Course with the highest number of attendance records | Group records by course | Identifies the most-used class |
| M-08 | Duplicate Submission Rate | Number of rejected duplicate submissions | Duplicate attempts ÷ total attempts | Measures data quality |

---

## Metrics Used in the Prototype

The administrator dashboard displays:

- Total users
- Total students
- Total attendance records
- Present records
- Absent records
- Attendance rate
- Active students
- Most active course

---

## Data Source

Metrics are calculated using:

- Browser Local Storage
- User records
- Attendance records
- Attendance status
- Course information

---

## Value of Metrics

These metrics allow administrators to monitor attendance patterns, identify absenteeism, check system activity, and make informed decisions. They also help the development team evaluate whether the prototype provides useful operational information.

---

## Limitations

- Data is stored only in the current browser.
- Data is not synchronized between devices.
- Sample users may not represent real system adoption.
- Metrics reset if Local Storage is cleared.

---

## Conclusion

The startup metrics make the prototype measurable instead of only visually presentable. They demonstrate how attendance data can support decisions for students, lecturers, and administrators.
