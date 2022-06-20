const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/posts", (req,res) => {
    
})
const postData = {}
// processing events emmited from event bus
app.post("/events", (req,res) => {
    const {data, type} = req.body
    switch (type) {
        case "postCreated":
            post[data.id] = {postId: data.id, title}
            break;
        default:
            break;
    }

})

app.listen(4002, () => console.log("listening to 4002"))
