# System Requirements

## Project Name
Smart Classroom Attendance System

## Functional Requirements

| ID | Requirement |
|----|-------------|
| FR1 | The system shall allow students to log in using their student ID and password. |
| FR2 | The system shall generate a unique QR code for each class session. |
| FR3 | The system shall allow students to scan the QR code to record attendance. |
| FR4 | The system shall verify the QR code before recording attendance. |
| FR5 | The system shall automatically save attendance records in the database. |
| FR6 | The system shall display a confirmation message after successful attendance submission. |
| FR7 | The system shall allow lecturers to view attendance records for each class. |
| FR8 | The system shall allow lecturers to search attendance records by student, course, or date. |
| FR9 | The system shall allow lecturers to export attendance reports. |
| FR10 | The system shall allow administrators to manage student, lecturer, and course information. |

---

## Non-Functional Requirements

| ID | Requirement |
|----|-------------|
| NFR1 | The system should be easy to use with a simple and intuitive interface. |
| NFR2 | The system should record attendance within 3 seconds after scanning a QR code. |
| NFR3 | The system should be accessible on desktop and mobile web browsers. |
| NFR4 | The system should securely store attendance records and user information. |
| NFR5 | The system should provide accurate attendance records with minimal errors. |
| NFR6 | The system should be available during scheduled class hours without interruption. |
| NFR7 | The system should protect user accounts through secure authentication. |
| NFR8 | The system should support multiple classrooms and courses simultaneously. |

---

## Requirement Traceability

| Lab 03 Evidence | System Requirement |
|-----------------|--------------------|
| Students forget to sign attendance sheets. | FR3, FR4 |
| Manual attendance takes too much class time. | FR2, FR3, FR6 |
| Attendance records sometimes contain errors. | FR4, FR5 |
| Lecturers spend time checking attendance manually. | FR7, FR8, FR9 |
| Students prefer a faster attendance process. | NFR1, NFR2, NFR3 |

---

## Expected Outcome

The Smart Classroom Attendance System will simplify attendance management by replacing manual attendance with a QR-code-based process. The system will reduce attendance errors, shorten attendance time, improve record accuracy, and provide lecturers with an efficient way to monitor and manage attendance records.
