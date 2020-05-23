const express = require('express');
var router = express.Router();
const studentModel = require('./studentModel')
const app = express();

app.use(express.json())
app.use(function(res,req,next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

/* GET home page. */
app.get('/getstudent', function(req, res) {
/*  res.render('index', { title: 'Express' });*/
  studentModel.getStudent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error =>{
    res.status(500).send(error);
  })

  res.send('this is the index page !')
})

app.post('/setstudent',(req,res) => {
  studentModel.createStudent(req.props)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })

})
module.exports = router;
