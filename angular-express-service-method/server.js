express =require ("express")
bp=require ("body-parser")
ap=express()
ap.listen(1000)
ap.use(express.static(__dirname))
ap.use(bp.json())

ap.get("/met1",function(req,res){
res.send("From server")
})

ap.post("/met2",function(rq,re){
	dt=rq.body
re.send("sent")
	console.log(dt)
})