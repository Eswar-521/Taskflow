# TaskFlow Backend

## 🚀 Overview

TaskFlow Backend is a REST API built using **Node.js**, **Express**, and **PostgreSQL**.
It provides authentication, project management, and task tracking functionality.

The backend handles user authentication, project creation, task management, and dashboard analytics.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* Docker
* Nodemon

---

## Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes
* Logout Support

Users must authenticate before accessing projects and tasks.

---

### 📁 Projects Management

Users can:

* Create Projects
* View Projects
* Update Projects
* Delete Projects
* View Project Details

Each project belongs to a specific user.

---

### ✅ Tasks Management

Users can:

* Create Tasks
* Update Task Status
* Delete Tasks
* View Tasks by Project

Task statuses:

* Todo
* Progress
* Done

---

### 📊 Dashboard API

Dashboard returns:

* Total Projects
* Total Tasks
* Todo Tasks
* Progress Tasks
* Completed Tasks
* Recent Tasks

This helps frontend display analytics.

---

## API Endpoints

### Authentication

```
POST /auth/register
POST /auth/login
```

---

### Dashboard

```
GET /dashboard
```

---

### Projects

```
GET /projects
POST /projects
GET /projects/:id
PUT /projects/:id
DELETE /projects/:id
```

---

### Tasks

```
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

---

## Database

PostgreSQL Database is used.

Main Tables:

### Users

* id
* name
* email
* password
* created_at

---

### Projects

* id
* name
* description
* user_id
* created_at

---

### Tasks

* id
* title
* description
* status
* project_id
* user_id
* created_at

---

## ⚙️ Running Locally

Clone repository:

```bash
git clone <repo>
cd taskflow
```

Start Docker:

```bash
docker compose up
```

Backend will run on:

```
http://localhost:5000
```

---

## Environment Variables

Create `.env` file:

```
PORT=5000
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=taskflow
JWT_SECRET=secret
```

---

## Authentication Flow

1. User registers
2. User logs in
3. JWT token generated
4. Token sent in headers
5. Protected routes accessed

---

## Project Flow

1. User creates project
2. Project stored in database
3. User fetches projects
4. Project displayed in frontend

---

## Task Flow

1. User creates task
2. Task linked to project
3. User updates status
4. Dashboard updates automatically

---

## Security

* JWT Authentication
* Protected Routes
* User-based Data Access

---

## Future Enhancements

* Role-based access
* Notifications
* File attachments
* Team collaboration
* Activity logs

---

## Conclusion

TaskFlow backend provides scalable and secure APIs for project and task management.
It integrates seamlessly with frontend and supports modern full-stack architecture.
