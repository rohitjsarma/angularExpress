exp=require("express")
app=exp()
bp=require("body-parser")
app.use(bp.json())
mongo=require("mongojs")
app.use(exp.static(__dirname))
app.listen(1500)
conn=mongo("mongodb://rohitjdb:rohitjdb123@ds263740.mlab.com:63740/rohitdb")
console.log("server is listening @ 1500")

app.get("/get_rec",function(req,res){
conn.newOne.find(function(err,result){
	if(err)
		res.send(err)
	else
		res.send(result)

})

})
app.post("/ins_rec",function(req,res){
	reqdata=req.body
	conn.newOne.insert(reqdata)
	res.send("Inserted")
})
app.post("/del_rec",function(req,res){
conn.newOne.remove(req.body)
res.send("Deleted One Record")
})
app.delete("/del_allRec",function(req,res){
conn.newOne.remove()
res.send("Deleted All Record")
})
