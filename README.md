# Tickr

A full-stack, decoupled financial dashboard and stock monitoring application. Tickr provides secure user authentication, interactive portfolio charting, and a dynamic 3D WebGL landing page, all built on a modern MERN stack architecture.

## Features

* **Secure Authentication:** End-to-end user signup and login utilizing bcrypt password hashing and stateless JWT session management.
* **Financial Dashboard:** Real-time visualization of stock holdings and portfolio metrics using Chart.js.
* **Interactive UI/UX:** A fast, single-page application built with React and Vite, featuring 3D particle systems powered by React Three Fiber.
* **Decoupled Architecture:** Strict separation of concerns between the frontend UI layer and the Express REST API.
* **Protected Routes:** Custom backend middleware to secure API endpoints and prevent unauthorized access.

## Tech Stack

**Frontend**
* React.js (via Vite)
* React Three Fiber (Antigravity 3D visuals)
* Chart.js
* Axios (Network Requests)
* React Router DOM

**Backend & Database**
* Node.js & Express.js
* MongoDB Atlas & Mongoose
* JSON Web Tokens (JWT)
* Bcrypt (Cryptography)
* CORS

##  Repository Structure

```text
Tickr/
├── Backend/               # Express server, controllers, models, and middleware
├── dashboard/             # Core user dashboard components
├── Frontend/              # React application, 3D landing page, auth views
├── .gitignore             # Root level ignore rules for node_modules and secrets
└── README.md
