/*

Assignment
Create a Node.js REST API to manage students using an in-memory database (JavaScript array). The API should support creating, retrieving, updating, and deleting students.

Requirements
Create a Node.js API application to:
1. Add a new student
2. Get all students
3. Get a student by ID
4. Update student information
5. Delete a student

The application should store data in memory (array) instead of a real database.

*/

/*

SOLUTION

*/
const express = require("express"); 

const app = express(); 

// OR const app = require("express")(); That way you create the above two line code in one.

// PORT
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use (express.json());  

// in-memory array to store student items
const STUDENTS = []; 

// Numbers of student in the STUDENTS, used to determine id upon student data creation. + 1 lets the id starts from one as without that id will start from 0 as STUDENTS is first empty. OR Date.now() can be used for randomisation of id.
let newID = STUDENTS.length + 1;

// API to create new student data
app.post ("/createstudent", (req, res) => {
    const { name, age, course, cohort } = req.body;

    const newStudent = {
        id: newID++,
        name,
        age,
        course,
        cohort,
        isGraduated: false,
    };

    STUDENTS.push(newStudent);

    res.status(200).json(newStudent);
});

// API to get all students data
app.get ("/getstudents", (req, res) => {
    res.json(STUDENTS);
});

// API to get a single student data by id
app.get ("/getstudent/:id", (req, res) => {
    const studentID = parseInt(req.params.id);

    const student = STUDENTS.find((t) => t.id === studentID);

    res.json(student);
});

// API to update a student's data using id
app.put ("/student/:id", (req, res) => {
    const studentID = parseInt(req.params.id);

    const { name, age, course, cohort, isGraduated } = req.body;

    const student = STUDENTS.find((t) => t.id === studentID);

    if (!student) {
        return res.status(404).json({ error: "Student not found." })
    };

    // I used Nullish Coalescing Operator (??) to fallback to the existing value if the incoming value is undefined
    student.name = name ?? student.name;
    student.age = age ?? student.age;
    student.course = course ?? student.course;
    student.cohort = cohort ?? student.cohort;
    student.isGraduated = isGraduated ?? student.isGraduated;

    res.json(student);
});

// API to delete a student's data
app.delete ("/deletestudent/:id", (req, res) => {
    const studentID = parseInt(req.params.id);

    const studentIndex = STUDENTS.findIndex((t) => t.id === studentID);

    if ( studentIndex === -1 ) {
        return res.status(404).json({ error: "Student not found" });
    };

    STUDENTS.splice( studentIndex, 1 );
    res.json({ message: "Student deleted succcessfully" });
});

app.listen(PORT, () => {
    console.log(`Service is running on ${PORT}`);
});


