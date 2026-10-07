# Node.js REST API

A beginner-friendly REST API built with **Node.js** and **Express.js** for managing student records.

This project was created as part of my backend development learning journey to practice building RESTful APIs, handling HTTP requests, working with Express middleware, and implementing CRUD operations.

> **Note:** This project uses an in-memory JavaScript array instead of a database. All data is lost when the server restarts.

## Features

* Create a new student
* Retrieve all students
* Retrieve a student by ID
* Update student information
* Delete a student
* JSON request and response handling
* Basic HTTP status code handling
* In-memory data storage

## Tech Stack

* **Node.js**
* **Express.js**
* **JavaScript**
* **Nodemon**
* **CommonJS**

## Project Structure

```text
Node.js-REST-API/
│
├── assignment.js
├── js_fundamentals.js
├── js_fundamentals2.js
├── package.json
├── package-lock.json
└── README.md
```

### Main Application

`assignment.js` contains the REST API implementation, including the Express server, routes, in-memory student data, and CRUD operations.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/hackerhegod/Node.js-REST-API.git
```

Navigate into the project:

```bash
cd Node.js-REST-API
```

Install the dependencies:

```bash
npm install
```

### Running the API

Start the server with:

```bash
node assignment.js
```

The API will run on:

```text
http://localhost:3000
```

## API Endpoints

| Method   | Endpoint             | Description                    |
| -------- | -------------------- | ------------------------------ |
| `POST`   | `/createstudent`     | Create a new student           |
| `GET`    | `/getstudents`       | Retrieve all students          |
| `GET`    | `/getstudent/:id`    | Retrieve a student by ID       |
| `PUT`    | `/student/:id`       | Update a student's information |
| `DELETE` | `/deletestudent/:id` | Delete a student               |

## API Usage

### Create a Student

**POST**

```text
/createstudent
```

Example request body:

```json
{
  "name": "John Doe",
  "age": 22,
  "course": "Computer Science",
  "cohort": "2026"
}
```

The API creates a student with an automatically assigned ID and an initial `isGraduated` value of `false`.

### Get All Students

**GET**

```text
/getstudents
```

Example response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 22,
    "course": "Computer Science",
    "cohort": "2026",
    "isGraduated": false
  }
]
```

### Get a Student by ID

**GET**

```text
/getstudent/1
```

Replace `1` with the ID of the student you want to retrieve.

### Update a Student

**PUT**

```text
/student/1
```

Example request body:

```json
{
  "name": "John Doe",
  "age": 23,
  "isGraduated": true
}
```

Only the fields provided in the request are updated. Existing values are retained for fields that are not provided.

### Delete a Student

**DELETE**

```text
/deletestudent/1
```

If the student exists, the API removes the student from the in-memory array.

Example response:

```json
{
  "message": "Student deleted succcessfully"
}
```

## Data Storage

This project intentionally uses an in-memory JavaScript array:

```javascript
const STUDENTS = [];
```

There is no MongoDB, PostgreSQL, MySQL, or other persistent database.

This makes the project useful for learning the fundamentals of REST APIs without introducing database configuration.

However, because the data exists only in memory:

* Data is lost when the server stops.
* Data is lost when the server restarts.
* The API is not intended for production use.

## Concepts Practiced

This project focuses on understanding the fundamentals behind REST API development, including:

* Node.js
* Express.js
* HTTP methods
* RESTful API design
* Routing
* Route parameters
* Request bodies
* JSON
* Express middleware
* CRUD operations
* HTTP status codes
* Array methods such as `find()` and `findIndex()`
* JavaScript destructuring
* Nullish coalescing (`??`)
* Basic error handling

## Learning Purpose

This repository is part of my backend development learning journey.

The goal is not simply to make the API work, but to understand what happens between an incoming HTTP request and the response returned by the server.

Future improvements may include:

* Request validation
* Better RESTful route naming
* Centralized error handling
* Controllers and services
* Persistent database storage
* Authentication and authorization
* Automated testing
* API documentation

## Author

**Hacker Hegod**

GitHub: [@hackerhegod](https://github.com/hackerhegod)

---

### License

This project is available for educational purposes.
