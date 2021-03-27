exp=require ("express")
app=exp()
bp=require ("body-parser")
app.listen(6000)
app.use(exp.static(__dirname))
console.log("serevr is listening at 6000")
app.use(bp.json())

app.get("/met1",function(req,res){
	res.send("from server")
})

app.post("/met2",function(req,res){
	dt=req.body
	res.send("send to server")
	console.log(dt)
})
