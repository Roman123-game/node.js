const express = require('express');
const app = express();


app.use(express.static("public"))

app.set("view engine","ejs")



const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000,function(req,res){ 
    console.log('Server started at 3000') 
})


