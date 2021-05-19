const express = require('express');
const router = express.Router();


//@Route    POST api/contacts
//@desc     ADD new contact
//@access   Private
router.post('/', (req, res) =>{
    res.send('Add new contact');
});

//@Route    PUT api/contacts/:id
//@desc     Delete contact
//@access   Private
router.post('/:id', (req, res) =>{
    res.send('Update Contacts');
});

//@Route    DELETE  api/contacts/:id
//@desc     Delete contact
//@access   Private
router.post('/:id', (req, res) =>{
    res.send('Delete Contacts');
});


module.exports = router;