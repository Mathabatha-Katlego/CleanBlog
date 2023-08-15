const User = require('../models/User.js')
const path = require('path')

module.exports = (req,res) =>{  //exports a function that acts as the route handler for user registration
    User.create(req.body, (error, user) =>{ // create a new user in database
        if(error){
          const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)  //if error, extracts error from error object        
          req.flash('validationErrors',validationErrors)// stores the errors in a flash message
          req.flash('data',req.body)
          return res.redirect('/auth/register')    
        }        
        res.redirect('/')
    })
}