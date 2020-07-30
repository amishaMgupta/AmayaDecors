 const router = require('express').Router();

 router.use('/product',require('./products'));
// router.get('/',(req,res) => {
//     console.log("check");
//     res.send("hhhhhhh");
    
// })
 module.exports = router;