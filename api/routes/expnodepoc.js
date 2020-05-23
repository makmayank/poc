var express = require("express");
var router=express.Router();

router.get("/tat",function(req,res,next){
	res.send('Hello , I am your tat Server !')
})

router.get("/",function(req,res,next){
	res.send('Hello , I am your Server !')
})


module.exports=router;
