import express from "express";
const app = express();

//Creating routes
app.get("/",(req, res)=>{
    res.send("<h1>Home Page</h1>")
});

app.get("/about",(req, res)=>{
    res.send("<h2>About page</h2>")
})

//Creating backend server, at port 3000
app.listen(3000, ()=>{
    console.log(`server is running at port 3000`);
    
});
