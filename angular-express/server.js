express=require("express")
app=express()
app.listen(2000)
app.use(express.static(__dirname))
console.log("server is listening at 2000")


/*express=require("express")
app=express()
app.listen(2525)
app.use(express.static(__dirname))
console.log("Server listening at 2525")
//console.log(__dirname)*/
