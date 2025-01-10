# Employee Management System

A web-based project management application that streamlines task assignment and tracking between administrators and employees. This application features a login system, an admin dashboard, and an employee dashboard to facilitate efficient task management.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
  - [Login](#login)
  - [Admin Dashboard](#admin-dashboard)
  - [Employee Dashboard](#employee-dashboard)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

---

## About the Project

This project management application is designed to simplify task assignment and tracking within a team. It enables administrators to assign tasks to employees, and employees can interact with these tasks by marking them as accepted, completed, or failed. The application fosters clear communication and accountability within teams.

---

## Features

### Login
- A secure login system for both administrators and employees.
- User authentication to provide access to respective dashboards.
- User-friendly UI with responsive design for all devices.

### Admin Dashboard
- Allows administrators to:
  - Assign new tasks to employees.
  - View the status of all tasks (e.g., pending, completed, failed).
  - Manage users (add, edit, or delete employee accounts).
  - Filter and search tasks based on status or assigned employee.
- Dashboard displays task analytics, such as total tasks, pending tasks, and completed tasks.

### Employee Dashboard
- Allows employees to:
  - View assigned tasks in a clear and organized layout.
  - Accept tasks assigned by the administrator.
  - Mark tasks as completed after finishing.
  - Mark tasks as failed if they are unable to complete them, along with providing a reason.
- Displays a summary of task statuses for the employee.

---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Database:** local Storage
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Tailwind CSS for responsive and modern UI

---

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MohammedAffaq/Employee-Management-System.git
   cd project-management-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run the Application:**
   ```bash
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:5000`.

---

## Usage

### Administrator Workflow
1. Log in using admin credentials.
2. Access the dashboard to view, create, and manage tasks.
3. Assign tasks to employees.
4. Monitor task progress through status updates provided by employees.

### Employee Workflow
1. Log in using employee credentials.
2. View assigned tasks in the dashboard.
3. Accept tasks to start working on them.
4. Update task status to either:
   - **Complete**: Mark the task as successfully finished.
   - **Failed**: Mark the task as failed with an optional explanation.

---

## Screenshots
**Login Page**
![image](https://github.com/user-attachments/assets/1042fd07-03f2-40dc-8fbb-1303a5756091)

**Admin Dashboard**
![image](https://github.com/user-attachments/assets/50153eb4-f932-47b1-b738-48156953b079)

**Employee Dashboard**
![image](https://github.com/user-attachments/assets/0acbdd85-48e1-42a8-8efd-bc5569b1f88e)


---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
