const express = require('express');
const router = express.Router();


//@Route POST api/users
//@desc register a user
//@access public
router.post('/', (req, res) =>{
    res.send('Register a user');


});


module.exports = router;