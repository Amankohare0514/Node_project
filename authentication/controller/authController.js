const User = require("../models/user")

function postRegister  (req, res) {
    try {
      const { name, email, password } = req.body;
       (name, email, password);
      res.redirect('/login');
      res.send(name, email , password)
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };


  module.exports =  postRegister