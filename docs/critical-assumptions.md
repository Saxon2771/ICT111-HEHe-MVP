# Critical Assumptions

## Project Name

**Smart Classroom Attendance System**

---

# Purpose

This document identifies the most important assumptions that must be validated before developing the full Smart Classroom Attendance System. Each assumption is evaluated based on its level of risk and the amount of supporting evidence currently available.

---

# Critical Assumptions Table

| No. | Category | Assumption | Risk Level | Evidence Level | Priority |
|-----|----------|------------|------------|----------------|----------|
| 1 | User Problem | Students sometimes forget to sign attendance manually or experience delays during attendance taking. | High | Medium | High |
| 2 | User Value | Students prefer recording attendance through a web-based system instead of paper attendance sheets. | High | Low | High |
| 3 | User Behavior | Students can easily log in using their Student ID and Password without assistance. | Medium | Low | High |
| 4 | Technical | The system can securely authenticate users using Student ID and Password. | Medium | Medium | Medium |
| 5 | Technical | Browser Local Storage is sufficient for storing attendance records in the MVP. | Low | High | Low |
| 6 | Lecturer Needs | Lecturers prefer viewing attendance digitally instead of checking paper attendance lists. | Medium | Medium | Medium |
| 7 | Business Value | The university is interested in adopting a digital attendance system in the future. | Medium | Low | Medium |
| 8 | Usability | Users can complete the attendance process within one minute. | Medium | Low | High |
| 9 | Reliability | Attendance records are saved accurately without duplication or data loss. | High | Low | High |
| 10 | Future Growth | The MVP can be upgraded later with a database and cloud-based backend. | Low | Medium | Low |

---

# Highest Priority Assumptions

The following assumptions present the greatest risk and should be validated first during the MVP experiment:

1. Students prefer a digital attendance system over paper attendance.
2. Students can successfully log in using their Student ID and Password.
3. Attendance can be recorded in less than one minute.
4. Attendance records are stored accurately without errors.
5. Lecturers find the attendance dashboard useful and easy to use.

---

# Validation Plan

| Assumption | Validation Method | Success Criteria |
|------------|-------------------|------------------|
| Students prefer digital attendance | User interviews and prototype testing | At least 80% of students prefer the digital system |
| Students can log in successfully | Usability testing | At least 90% login success rate |
| Attendance process is easy | Observe users completing attendance | Average completion time is less than 1 minute |
| Attendance records are accurate | Compare submitted records with expected results | 100% of attendance records are stored correctly |
| Lecturers can use the dashboard easily | Lecturer usability testing | Lecturer completes required tasks without assistance |

---

# Risks

## High Risks
- Students may forget their passwords.
- Users may experience login errors.
- Internet connection may interrupt attendance submission.
- Students may not trust the digital attendance system.

---

## Medium Risks
- Lecturers may require additional training.
- Some students may need assistance during their first login.
- Browser compatibility issues may affect the user experience.

---

## Low Risks
- Local Storage may reach capacity if too many records are stored.
- Future integration with a database may require additional development effort.

---

# Mitigation Strategies

| Risk | Mitigation Strategy |
|------|---------------------|
| Students forget passwords | Provide a password reset feature in future versions |
| Login errors | Display clear error messages and validation |
| Attendance submission failure | Show confirmation messages after successful submission |
| Browser issues | Test the system on multiple browsers |
| Data loss | Plan migration to a cloud database in future versions |

---

# Expected Outcome

The MVP experiment should provide evidence that:

- Students can log in using their Student ID and Password successfully.
- Students can record attendance quickly and accurately.
- Lecturers can monitor attendance records efficiently.
- The Smart Classroom Attendance System solves the problems identified during customer discovery.
- The project is feasible for further development into a full-scale university attendance management system.

---

# Conclusion

The critical assumptions identified in this document will guide the MVP experiment for the Smart Classroom Attendance System. Validating these assumptions early helps reduce project risk, improve usability, and ensure that the proposed solution meets the needs of students, lecturers, and university administrators.
