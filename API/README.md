# codeit-mernstack

we are going to create full stack web app using mern stack with the help of CodeIT

## Packages are used

- Express Framework -> `npm install express`
- Nodemon, as a dev devDependencies -> `npm install --save-dev nodemon`
- DotEnv, for Environmental variables. -> `npm install dotenv`
- Mongo DB
- Mongoose

## Express js

- Minimalist, fast, unopinionated framework.
- It simplifies the HTTP module of node.js

## HTTP Methods

- GET (Read/Fetch)
- POST (Creat)
- PUT (Update)
- DELETE (Delete)
- PATCH (Partisal Update)

## Rest API (Representational State Transfer)

JSON.stringify: JS Objet 2 JSON
JSON.parse: JSON 2 JS Object

JSON => JavaScript Object Notation => Lightweight string format.

```

Get users data: GET /users
Create user: POST /users
Create product: POST /products
Update product: PUT /products/:id

```

## Layered Architecture Based Project Structure

1. API Layer
   a. Routes : Endpoints
   b. Controllers : Request/Response
   c. Middlewares : Auth
2. Business Logic Layer
   a. Services
3. Data Layer
   a. Models : Schemas

- first request comes in API Layer
  -- routes -> middleware -> controllers
- seconds request goes to SERVICES Layer
- third request goes to DATA Layer

## MONGO db

- Non relational database.
- Data are stored in collections (tables) & documents (rows).

### Tools used

- Local : MongoDB community for DB and Compass for GUI.
- Cloud : MongoDB Atlas

### MongoDB Queries

- `show dbs` : Listing all DataBase.
- `use` <dbName> : Create or Switch the Database.
- `show collections` : Listing all collection.
- `db.users.insertOne({name: "Ram"})` : It use users collection and insert one record into current database.
- `db.users.insertMany([{name: "Sita"}, {name: "Hari"}])` : It use users collection and insert one record into current database.
- `db.users.find()`
- `db.users.find({name:"Ram"})`
