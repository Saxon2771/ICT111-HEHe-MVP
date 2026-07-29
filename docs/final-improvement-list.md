# Final Improvement List Before Lab 14

## Priority Summary

| Priority | Number of Items |
| --- | ---: |
| Critical | 2 |
| Important | 3 |
| Useful | 2 |
| Future | 2 |

## Improvement List

| Improvement ID | Problem / Improvement Needed | Priority | Related Requirement | Owner | Deadline | Evidence Source | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IMP-01 | Implement attendance report export in CSV or PDF format. | Critical | FR8 | Hein Htet | Before Lab 14 | T07 failed for all tester profiles; Lab 11 remaining-work list | Pending |
| IMP-02 | Complete administrator add, edit, and delete functions for students and courses. | Critical | FR9, FR10 | Hein Htet | Before Lab 14 | T08 was incomplete; current admin management is partial | Pending |
| IMP-03 | Align requirement IDs and descriptions across `system-requirements.md`, `user-stories.md`, `mvp-feature-list.md`, `feature-implementation-status.md`, README, and the demo script. | Important | FR1-FR10 | Sai Kaung Htet Kyaw | Before final repository review | Documentation review | Pending |
| IMP-04 | Remove old QR-code wording and consistently describe Student ID, Password, and attendance-password workflows. | Important | FR1, FR2, FR3 | Sai Kaung Htet Kyaw | Before final repository review | Older requirement and MVP text | Pending |
| IMP-05 | Add clearer attendance-password instructions, required-field messages, and success confirmation. | Important | FR2, FR3, FR4, NFR1 | Htut Myat Moe and Sai Kaung Htet Kyaw | Before final user retest | T03 confusion and tester comments | Pending |
| IMP-06 | Improve search/filter labels and add a Reset Filters button. | Useful | FR7, NFR1 | Sai Kaung Htet Kyaw | Before final presentation if time permits | T06 usability issue | Pending |
| IMP-07 | Test and improve mobile responsiveness for login, attendance form, tables, and dashboard cards. | Useful | NFR4 | Sai Kaung Htet Kyaw | Before final presentation if time permits | Mobile testing remains incomplete | Pending |
| IMP-08 | Replace plain-text demonstration passwords with secure server authentication. | Future | NFR3 | Hein Htet | Future production version | Security limitation | Backlog |
| IMP-09 | Replace Browser Local Storage with a synchronized cloud database. | Future | NFR5, NFR6 | Hein Htet | Future production version | Cross-device storage limitation | Backlog |

## Priority Definitions

- **Critical:** Must be completed and retested before the final Lab 14 release.
- **Important:** Should be completed to prevent confusion or requirement mismatch.
- **Useful:** Improves quality but does not block the final core demonstration.
- **Future:** Appropriate for a production version beyond the current course prototype.

## Required Fix Order

1. Complete FR8 report export.
2. Complete FR9 and FR10 administrator management.
3. Align all requirement IDs and remove outdated QR wording.
4. Improve attendance instructions and validation.
5. Retest all eight Lab 13 tasks.
6. Capture updated screenshots.
7. Update README and the weekly logbook.
8. Confirm that no Critical issue remains open.

## Lab 14 Readiness Rule

The prototype should be marked **Ready for Lab 14** only after IMP-01 and IMP-02 are completed, tested, and supported by updated screenshots or testing evidence.
