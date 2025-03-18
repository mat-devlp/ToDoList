<div align="center">

# ✅ To Do List
### To do list made with PostgreSQL Database

![image](https://github.com/user-attachments/assets/d770d0e9-0aae-4eb4-a06e-509e71feb010)


</div>

## 🚀 Overview
TodoList is a simple project that allows users to manage their tasks using a PostgreSQL database. The system stores tasks where you can edit and delete.

## 📦 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/mat-devlp/todolist.git
cd todolist
```

### 2️⃣ Install dependencies
```sh
npm i
```

### 3️⃣ Set up PostgreSQL database
Ensure you have PostgreSQL installed and running. Create a database and run the following SQL command to create the necessary table:

```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);
```

### 4️⃣ Configure database connection
Create a `.env` file in the root directory and add your PostgreSQL credentials:

```
  user: "postgres",
  host: "localhost",
  database: "[YOUR DATABASE],
  password: "[YOUR PASSWORD]",
  port: 5433
```

### ▶️ Running the TodoList System
Start the application using Nodemon:
```sh
npm install -g nodemon  # Install nodemon globally if you haven't
nodemon index.js
```

Your application should now be running and able to manage tasks in the PostgreSQL database.

## 📡 Features
- Add tasks to the database.
- Retrieve a list of tasks.
- Simple and efficient setup.
- Add, edit and remove.

