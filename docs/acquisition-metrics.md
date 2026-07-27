# Acquisition Metrics

## Project

**Smart Classroom Attendance System**

## Lab

**Lab 12 – Landing Page and Digital Go-to-Market**

---

# Purpose

This document defines the key acquisition metrics that will be used to evaluate the effectiveness of the digital go-to-market activities for the Smart Classroom Attendance System.

These metrics help the project team understand how users interact with the landing page, prototype, and marketing channels.

---

# Objectives

The acquisition metrics aim to:

- Measure awareness of the project.
- Track user engagement.
- Evaluate the effectiveness of marketing channels.
- Measure prototype usage.
- Collect user feedback.
- Identify areas for improvement.

---

# User Acquisition Funnel

```text
Marketing Channel
        ↓
Landing Page Visit
        ↓
Feature Exploration
        ↓
Try Demo Button Click
        ↓
Prototype Login
        ↓
Attendance Workflow
        ↓
Feedback Submission
```

---

# Key Metrics

| Metric | Description | Target |
|---------|-------------|--------|
| Landing Page Views | Number of visitors to the landing page | 50+ |
| Unique Visitors | Number of different users visiting the landing page | 30+ |
| CTA Clicks | Number of clicks on the "Try Demo" button | 25+ |
| Prototype Starts | Number of users opening the login page | 20+ |
| Successful Logins | Number of successful logins | 15+ |
| Attendance Submissions | Number of attendance records submitted | 15+ |
| Feedback Responses | Number of completed feedback forms | 10+ |
| Return Visitors | Users who revisit the landing page | 5+ |

---

# Marketing Channel Metrics

| Channel | KPI | Measurement |
|---------|-----|-------------|
| Class Group Chat | Link Clicks | Number of students opening the landing page |
| University Email | Open Rate | Number of lecturers opening the email |
| Social Media | Engagement | Likes, comments and link clicks |
| Classroom Presentation | Demo Participants | Number of students testing the prototype |
| Department Website | Landing Page Visits | Visits originating from the department website |

---

# Engagement Metrics

| Metric | Description |
|---------|-------------|
| Average Time on Landing Page | Time users spend reading the landing page |
| Feature Section Views | Number of users scrolling to the Features section |
| Workflow Section Views | Number of users viewing the workflow explanation |
| CTA Conversion | Percentage of visitors clicking "Try Demo" |
| Prototype Completion | Percentage of users completing the attendance workflow |

---

# Prototype Metrics

The following prototype activities should be monitored:

- Student logins
- Lecturer logins
- Administrator logins
- Attendance submissions
- Attendance history views
- Dashboard visits
- Attendance searches
- Attendance status updates

---

# Conversion Metrics

## Landing Page Conversion Rate

```text
Conversion Rate (%) =
(Try Demo Clicks ÷ Landing Page Views) × 100
```

### Example

```text
Landing Page Views = 100

Try Demo Clicks = 42

Conversion Rate =

42 ÷ 100 × 100

= 42%
```

---

## Prototype Login Rate

```text
Prototype Login Rate (%) =
(Successful Logins ÷ Try Demo Clicks) × 100
```

---

## Workflow Completion Rate

```text
Workflow Completion (%) =
(Attendance Submissions ÷ Successful Logins) × 100
```

---

## Feedback Rate

```text
Feedback Rate (%) =
(Feedback Responses ÷ Prototype Starts) × 100
```

---

# Browser Local Storage Metrics

The landing page JavaScript stores simple analytics using Browser Local Storage.

Example object:

```javascript
{
    "pageViews": 25,
    "ctaClicks": 14,
    "lastCTA": "Try Demo",
    "lastVisit": "2026-07-27T10:30:45"
}
```

These values are used only for demonstration purposes.

---

# Success Indicators

The project will be considered successful if:

- The landing page attracts users.
- Users click the **Try Demo** button.
- Users access the prototype.
- Users complete attendance submission.
- Users provide useful feedback.
- Multiple marketing channels generate traffic.

---

# Sample Weekly Metrics

| Week | Landing Page Views | CTA Clicks | Prototype Starts | Feedback |
|------|-------------------:|-----------:|-----------------:|---------:|
| Week 1 | 18 | 8 | 6 | 3 |
| Week 2 | 32 | 15 | 12 | 7 |
| Week 3 | 54 | 27 | 21 | 11 |

---

# Improvement Actions

| Observation | Action |
|-------------|--------|
| Low landing page traffic | Share the landing page through additional channels |
| Low CTA clicks | Improve CTA wording and placement |
| Low prototype usage | Make the demo instructions clearer |
| Low feedback responses | Simplify the feedback form and remind users to complete it |
| High page views but low conversions | Improve the value proposition and landing page design |

---

# Limitations

The acquisition metrics have several limitations:

- Browser Local Storage only records activity on a single browser.
- Clearing browser data resets the recorded metrics.
- Repeated visits by the same user may increase page view counts.
- These metrics are intended for prototype evaluation only.

---

# Conclusion

The acquisition metrics provide a structured way to evaluate the effectiveness of the Smart Classroom Attendance System's digital promotion strategy. By tracking landing page visits, CTA clicks, prototype usage, and feedback responses, the team can assess user interest, identify successful marketing channels, and make evidence-based improvements to the prototype before the final project submission.
