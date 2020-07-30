const router = require('express').Router();

router.post('/',(req,res) =>{
    console.log("------",req.body);
    console.log(req.file);
    
    console.log("hello post method");
    
   // res.send("hello");
    
});

router.get('/',(req,res) =>{
    // console.log(req.body);
    
    res.send("hello");
    
});

module.exports = router

