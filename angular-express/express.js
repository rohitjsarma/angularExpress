express=require("express")
app=express()
app.listen(5000)
console.log("server is listening at 5000")
app.use(express.static(__dirname))