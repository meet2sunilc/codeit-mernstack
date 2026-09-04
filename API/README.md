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

## MongoDB

- Non relational database.
- Data are stored in collections (tables) & documents (rows).

### Tools used

- Local : MongoDB community for DB and Compass for GUI.
- Cloud : MongoDB Atlas

### MongoDB Queries

- `show dbs` : Listing all DataBase.
- `use` <dbName> : Create or Switch the Database.
- `show collections` : Listing all collection.

1. Creat

- `db.users.insertOne({name: "Ram"})`
- `db.users.insertMany([{name: "Sita"}, {name: "Hari"}])`

2. Read

- `db.users.find()`
- `db.users.find().limit(2)`//limit the search result.
- `db.users.find().skip(2)`//skip the number of result.
- `db.users.find().sort({name:1})` //| ASC = 1, DES = -1
- `db.users.find({name:"Ram"})`
- `db.users.findOne({age:"20"})`

3. Update

- `db.users.updateOne({age:"20"}, {$set:{age: 23}})`
- `db.users.updateMany([{age:"20"}, {$set:{age: 23}}])`

4. Delete

- `db.users.deleteOne({_id: ObjectId('6a9acd5812073debfc7f44f3')})`

### Complex Filter

- `db.user.find({name:{$eq:'raju'}})` //equal to
- `db.user.find({age:{$ne:29}})` //not equal to
- `db.user.find({age:{$gt:29}})` //greter than
- `db.user.find({age:{$gte:29}})` //greter than or equal to
- `db.user.find({age:{$lt:29}})` //less than
- `db.user.find({age:{$lte:29}})` //less than or equal to
- `db.user.find({$and:[{name:"rasmila"}, {age: 36}]})` //And operation
- `db.user.find({$or:[{name:"rasmila"}, {age: 36}]})` //or operation

## Mongoose

`npm install mongoosee `

- ODM (Object Data Modeling) of MongoDB for node.js
- Create schema (Properties or rules of a data/entity)
- Validate Schema.
- Create models (usable form of schema) using schema.
- Relationship.
