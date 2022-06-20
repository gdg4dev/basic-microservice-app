const express = require('express')
const app = express()
const axios =require("axios")

app.use(express.json())

app.post("/events", (req,res) => {
    const event = req.body
    // post 
    axios.post("http://localhost:4000/events", event)
    //comment
    axios.post("http://localhost:4001/events", event)
    // query-service
    axios.post("http://localhost:4002/events", event)

    res.send({status: "OK"})
})

app.listen(4005, () => console.log("event bus started at port 4005"))