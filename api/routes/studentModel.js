var express = require("express");
var router=express.Router();

const pgsql = require('pg').Pool
const pool = new pgsql({
  user:'makpoc',
  host:'localhost',
  database:'facility',
  password:'sample',
  port:'5432',

});
var sub = ['English','Hindi','Physics','Chemistry','Math'];
const getStudent = ()=>{
  return new Promise(function (resolve, reject){
    pool.query('SELECT *  FROM students ORDER BY id ASC',(error,result) =>{
      if(error){
        reject(error)
      }
      resolve(result.rows);
    })
  })
}

const createStudent = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, age, gender, standard, subjects} = body;
    console.log(name);
    pool.query('INSERT INTO students (name, age, gender, class) VALUES ($1, $2, $3, $4) RETURNING *', [name, age, gender, standard], (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(`New student details inserted: ${results.rows[0]}`)
      for(var i=0; i<sub.length; i++){
        if (subjects[i] == true) {
          var stuSub=sub[i];
          console.log(stuSub);
          pool.query('INSERT INTO enrollment (student_id,subject_id)   SELECT st.id , sb.id FROM students st, subject sb WHERE st.name = $1 AND sb.name = $2', [name, stuSub], (error, results) => {
            if (error) {
              reject(error)
            }
            // resolve(`New student details inserted: ${results.rows[0]}`)
          })
        }
      }

    })//query end

  })
}

router.get('/', function(req,res,next){

  getStudent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error =>{
    res.status(500).send(error);
  })
})

router.post('/setstudent',(req,res) => {
  createStudent(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })

})



module.exports = {createStudent, getStudent};
module.exports = router ;
