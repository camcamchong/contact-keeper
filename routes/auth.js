const express = require('express');
const router = express.Router();


//@Route    GET api/auth
//@desc     get logged in user
//@access   Private
router.post('/', (req, res) =>{
    res.send('Get logged in user');

});


//@Route    POST api/auth
//@desc     Auth user and get token
//@access   Public
router.post('/', (req, res) =>{
    res.send('Log in user');

});



module.exports = router;