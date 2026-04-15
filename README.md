<<<<<<< HEAD
# TaskFlow Frontend

## Overview

TaskFlow is a modern project and task management frontend application built using **React**, **Tailwind CSS**, and **Axios**.
This application allows users to manage projects, track tasks, and monitor progress through a clean and responsive dashboard.

The frontend communicates with backend APIs to fetch, create, update, and manage project and task data.

---

## Features

### Authentication

* User Login
* User Registration
* Protected Routes
* Logout Functionality
* Token-based Authentication

Users must log in before accessing dashboard and project features.

---

## Dashboard

The Dashboard provides a quick overview of:

* Total Projects
* Total Tasks
* Todo Tasks
* Tasks in Progress
* Completed Tasks
* Recent Tasks

This helps users quickly understand project status.

---

## Projects Management

Users can:

* View all projects
* Create new projects
* View project details
* Navigate to project tasks

Each project is displayed as a card with:

* Project Name
* Description
* View Details Button

---

## Tasks Management

Users can manage tasks inside projects:

* Create tasks
* Update task status
* Move tasks between columns
* View task details

Task statuses include:

* Todo
* Progress
* Done

---

## Modern UI

* Glassmorphism UI
* Responsive Layout
* Smooth Animations
* Gradient Backgrounds
* Professional Dashboard Design

---

## How Application Works

### Login Flow

1. User enters login credentials
2. Frontend sends request to backend
3. Backend returns authentication token
4. Token stored in local storage
5. User redirected to dashboard

---

### Dashboard Flow

1. Dashboard loads
2. API request sent to backend `/dashboard`
3. Backend returns counts
4. Dashboard cards display data

---

### Projects Flow

1. Projects page loads
2. API call to `/projects`
3. Projects fetched and displayed
4. User clicks project card
5. Navigate to project details page

---

### Create Project Flow

1. Click "New Project"
2. Modal opens
3. Enter project name and description
4. Submit form
5. API call to `/projects`
6. Project created
7. UI refreshes

---

## API Integration

Frontend communicates with backend using Axios.

API endpoints used:

* `/login`
* `/register`
* `/dashboard`
* `/projects`
* `/tasks`

All requests include authentication token.

---

## State Management

Application uses:

* React useState
* React useEffect
* Context API (Authentication)

---

## UI Technologies Used

* React
* Tailwind CSS
* React Router
* Axios

---

## Responsive Design

The application supports:

* Desktop
* Tablet
* Mobile

---

## Security

* Token based authentication
* Protected routes
* Logout session clearing

---

## Performance

* Optimized API calls
* Smooth UI transitions
* Lightweight components

---

## Future Enhancements

* Drag and Drop Tasks
* Notifications
* User Profiles
* Team Collaboration
* Dark / Light Mode

---

## Conclusion

TaskFlow frontend provides a clean and professional interface for managing projects and tasks.
It is built with scalability, performance, and user experience in mind.

The application ensures smooth interaction between frontend and backend while maintaining responsive and modern UI design.
=======
# Taskflow
>>>>>>> 4e0718638d3f1cc6f70b68a1ce5b80548c14f468
