const router = require('express').Router();
const fetch = require('node-fetch');

router.post('/',(req,res) =>{
    console.log(req.body);
    
    let data = req.body;
    
    fetch('http://localhost:3001/products', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

});

router.get('/',(req,res) =>{
    // console.log(req.body);
    
    res.send("hello");
    
});

module.exports = router

