# Lab 8: React Student Portal

A simple Vite + React application for a college lab task. It includes a login page, a student dashboard, a profile page, and client-side navigation with React Router.

## Run the application

```sh
npm install
npm run dev
```

## Demo login

- Username: `student`
- Password: `student123`

The student name, ID, branch, and demo credentials are defined in `src/student.js`. The ID and profile details are sample lab data and can be changed there.

## Features

- Validates empty fields and incorrect login details.
- Shows Dashboard and Profile navigation only after login.
- Protects both student pages from logged-out visitors.
- Uses React state for the signed-in user and form validation.
- Uses React Router links to navigate without reloading the page.
- Logout clears the signed-in user and returns to Login.
