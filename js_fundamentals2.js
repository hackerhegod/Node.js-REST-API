/*

WORKING WITH DATABASES (MongoDB)
1. What databases are and why we need them
2. SQL vs NoSQL: Understanding the difference
3. Introduction to MongoDB (beginner-friendly NoSQL database)
4. MongoDB basics: collections, documents
5. Using Mongoose for easier database interactions
6. CRUD operations with MongoDB

What databases are and why we need them
A databaseis an organized collection of data stored electronically in a computer system. It allows data to be stored, retrieved, updated, and managed efficiently. 

Databases are managed using software called a Database Management System (DBMS), such as:
•  MySQL
•  PostgreSQL
•  SQL Server
•  Oracle
•  MongoD

Why we need Database
•  Data Organization 
•  Fast Data Access 
•  Data Accuracy and Consistency 
•  Data Security
•  Data Backup and Recovery
•  Multi-User Access
•  Scalability
•  Data Integrity

SQL vs NoSQL: Understanding the difference
SQL databasesare structured, relational databases that store data in tables with fixed schemas and use Structured Query Language (SQL)  to manage and query data.  

NoSQL databasesare non-relational databases designed to store data in flexible formats (documents, key-value pairs, columns, or graphs) and are optimized for scalability and high-performance applications.

Key Difference in One Sentence
👉SQL databases focus on structured data and strong consistency, while NoSQL databases focus on flexibility, scalability, and handling large volumes of unstructured or semi-structured data

Simple Analogy 
•  SQLis like an Excel spreadsheetwith fixed columns.
•  NoSQLis like a folder of JSON fileswhere each file can look different

Introduction to MongoDB (beginner-friendly NoSQL database)
MongoDBis a NoSQL, document-based databasedesigned to store and manage data in a flexible, scalable, and high-performance way.

Instead of storing data in tables and rows, MongoDB stores data as documentswritten in JSON-like format (BSON).

How MongoDB Stores Data
•  Database→ contains collections
•  Collection→ contains documents
•  Document→ a JSON-like object with key-value pairs

📌Each document can have a different structure, unlike SQL

            Example document
            json

            {
                "name": "John Doe",
                "email": "john@example.com",
                "age": 30
            }

Why MongoDB Is Called NoSQL
MongoDB:
•  Does notuse tables, rows, or SQL
•  Does not require a fixed schema
•  Allows data to grow and change easily

This makes it ideal for applications with changing or unpredictable data

Key Features of MongoDB
•  Flexible Schema
•  High Performance
•  Scalability
•  Easy to Use
•  Strong Community and Tools

MongoDB basics: collections, documents
How MongoDB Organizes Data
MongoDB stores data in the following structure:
Database → Collections → Documents

What Is a Document?A documentis the basic unit of datain MongoDB.
•  Stored in JSON-like format (BSON)
•  Contains key–value pairs
•  Each document can have a different structure

What Is a Collection?
A collectionis a group of related documents.
•  Similar to a table in SQL
•  Does not require a fixed schema
•  Documents in the same collection can have different fields

            Example document
            json

            {
                "name": "John Doe",
                "email": "john@example.com",
            }
            {
                "name": "John Doe",
                "email": "john@example.com",
                "phone number": "0123456789"
            }

Key Differences from SQL
SQL                       MongoDB
•  Table                  •  Collection
•  Row                    •  Document
•  Column                 •  Field
•  Fixed schema           •  Flexible schema

Using Mongoose for easier database interaction
What Is Mongoose?
Mongoose is an Object Data Modeling (ODM) library for MongoDBused in Node.js applications.

It provides a structured way to:
•  Define how data should look
•  Interact with MongoDB easily
•  Manage relationships and validations

Why Use Mongoose Instead of Plain MongoDB?
Without Mongoose:
•  You work directly with raw MongoDB queries
•  No built-in data validation•No structure for documents

With Mongoose:
•  Cleaner and more organized code
•  Automatic data validation
•  Easier data relationships
•  Better developer experience

Key Features of Mongoose
1. Schemas
A schemadefines the structure of a document.
•  Specifies fields and their data types
•  Adds validation rules
•  Controls default values

            Example
            const UserSchema = new mongoose.Schema({
                name: String
                email: String
                age: Number
            });

2. Models
A modelis created from a schema and represents a MongoDB collection.
•  Used to create, read, update, and delete data
•  Automatically maps to a collection

            Example
            const User = mongoose.Model("User", UserSchema);

3. Easy CRUD Operations
Mongoose simplifies database operations:
•  Create: User.create()
•  Update: User.updateOne()
•  Delete: User.deleteOne()
•  Read: User.find()

4. Built-In Validation
Mongoose can:
•  Enforce required fields
•  Validate data types
•  Prevent invalid data from being saved

5. Middleware (Hooks)
Middleware allows actions before or afterdatabase operations.
Examples:
•  Hash passwords before saving
•  Log changes
•  Validate data

When Should You Use Mongoose?
Mongoose is ideal for:
•  Beginner developers
•  Structured MongoDB projects
•  Applications needing validation and clean data models
•  Medium to large Node.js application

CRUD operations with MongoDB 
What Is CRUD?
CRUDrepresents the four basic operations performed on a database:

•  Create – Add new data
•  Read – Retrieve existing data
•  Update – Modify existing data
•  Delete – Remove data

These operations are the foundation of all database interactions.

TO READ
•  What is a Database Management System (DBMS)?
•  State five advantages of using a DBMS.
•  Differentiate between a Primary Key and a Foreign Key.
•  Explain the difference between SQL and a Database.
•  Define normalization and state its first three normal forms.

Assignments
•  Install MongoDB and MongoDB Compass
•  Create a database name: “Ts-Academy” and five collection (eg Backend, Frontend, AI, Content etc). Add at least 10 students records in each Collection using Compass.
•  Perform basic CRUD operations (Create, Read, Update, and Delete) using Compass, organize all your queries in a word documents 
•  Practice writing simple MongoDB queries (filter, sort, limit)

*/

/*

CLASS WALKTHROUGH - SQL

-- Create Database
CREATE Database HajimeCohort

-- Set Database
USE HajimeCohort

-- Create Table
CREATE Table BackendDev(
StudentID INT PRIMARY KEY IDENTITY(1,1),
FullName VARCHAR(50),
Gender VARCHAR(50),
Department VARCHAR(50),
Age INT,
Score INT
) 

-- CRUD

-- Create
INSERT INTO BackendDev(FullName, Gender, Department, Age, Score) VALUES('John Doe', 'Male', 'Backend Development', 22, 79), VALUES('Jane Doe', 'Female', 'Backend Development', 23, 89), VALUES('John Doe', 'Male', 'Backend Development', 22, 79)

-- READ
SELECT * FROM BackendDev
SELECT * FROM BackendDev WHERE Score =  80
SELECT * FROM BackendDev WHERE Age < 23

-- UPDATE
UPDATE BackendDev set FUllName = 'John D. Doe' WHERE StudentID = 3

-- DELETE
DELETE BackendDev WHERE StudentID = 3
*/
