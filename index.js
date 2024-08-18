const express=require("express");
const cors=require("cors");
const {MongoClient} =require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:S0IwLMKyYPNYt19L@cluster0.ainly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("task24aug");
	const coll=db.collection("student");
	const doc={"_id":req.body.tno,"task":req.body.tdes};
	coll.insertOne(doc)
	.then(result=>res.send(result))	
	.catch(error=>res.send(error))


})

app.get("/read",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:S0IwLMKyYPNYt19L@cluster0.ainly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("task24aug");
	const coll=db.collection("student");
	coll.find({}).toArray()
	.then(result=>res.send(result))	
	.catch(error=>res.send(error))

})
app.delete("/remove",(req,res)=>{
	const url="mongodb+srv://kakadomkar03:S0IwLMKyYPNYt19L@cluster0.ainly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const con=new MongoClient(url);
	const db=con.db("task24aug");
	const coll=db.collection("student");
	const doc={"_id":req.body.tno};
	coll.deleteOne(doc)	
	.then(result=>res.send(result))	
	.catch(error=>res.send(error))
})


app.listen(9000,()=>{console.log("ready @ 9000");});