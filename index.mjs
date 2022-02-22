import express from "express";
const app = express();
const port= 86;


app.get("/", (reqest, response) =>{

    response.send("this is my first server")
})

app.get("/water", (reqest, response) =>{

    response.send("this is your water")
})

app.get("/meal", (reqest, response) =>{

    response.send("this is your meal")
})

app.post("/dinner", (reqest, response) =>{

    response.send("this is dinner")
})



app.listen(port, () =>{
    console.log(`this is my first ever server on port ${port}`)
})