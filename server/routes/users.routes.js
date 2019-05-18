// File contains user related routes

const express = require('express');
const router =  express.Router();
const user = require('../controllers/user.controller');

router.get('/', user.getUsers);
router.get('/:id', user.getUser);
router.post('/', user.createUser);
router.delete('/:id', user.deleteUser);

// Use put to update a user
// Use delete to delete a user
// if want to delete, use: 


module.exports = router;