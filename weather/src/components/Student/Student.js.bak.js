import React, {useState,useEffect} from 'react';


const Student = () => {

  let [students, setStudents] = useState(false);
  let [sName, setsName]= useState(false)
  let [sAge, setsAge]= useState(false);
  let [sClass, setsClass]= useState(false);
  let [sGender, setsGender]= useState(false);

/*
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }
  componentWillMount(){

  }
  */

  function studentDataSubmit(event){
    event.preventDefault();
        const studentData = new FormData(event.target);
        let [name,age,standard,gender] = [studentData.stuName, studentData.stuAge,
        studentData.stuClass, studentData.stuGender];
        setsName(studentData.stuName);
        setsAge(studentData.stuAge);
        setsClass(studentData.stuClass);
        setsGender(studentData.stuGender);
        console.log(sName);
        console.log(sAge);


  }

  function setStudent(event){
    event.preventDefault();
     fetch('http://localhost:4000/student/setstudent',{

       method:'post',
       headers:{
         'Content-Type': 'application/json',
       },
       props: JSON.stringify({sName, sAge, sClass, sGender}),
     })
     .then(response => {
       return response.text();
     })

     .then(data => {
       alert(data);
       getStudent();
     })
  }

  function getStudent(event){
    event.preventDefault();
    fetch('http://localhost:4000/student')
    .then(response => {
      return response.txt();
    })
    .then(data => {
      setStudents(data);
    });
  }


//  render(){
    return(

      <div class ="container">
      <header className="Component-header">
        <h1>Student Form</h1>
      </header>
        <form onSubmit={studentDataSubmit}>
          <div class="row">
            <div class="col-25">
              <label>Name :</label>
            </div>
            <div class="col-75">
              <input type="text" placeholder="Enter your name" maxLength="30"
               id="stuName" name="stuName"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Age</label>
            </div>
            <div class="col-75">
              <input type="number" placeholder="Age" min="3" max="20"
                 id="stuAge" name="stuAge"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Class</label>
            </div>
            <div class="col-75">
              <select id="stuClass" name="stuClass" >
                <option value="-2">Nursery</option>
                <option value="-1">LKG</option>
                <option value="0">UKG</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>

              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Gender</label>
            </div>
            <div class="col-75">

              <label>
                <input type="radio"  id="GenderF"
                  value="Female"  name="stuGender" checked
                />
                Female
              </label>
              <label>
                <input type="radio" id="genderM"
                  value="Male"  name="stuGender"
                />
                Male
              </label>
              <label>
                <input type="radio" id="genderO"
                  value="Apache Helicopter"  name="stuGender"
                />
                Other
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label> Choose Subjects</label>
            </div>
            <div class="col-75">
              <input type="checkbox" id="english" value="english" />
              <label>English</label>
              <input type="checkbox" id="hindi" value="hindi"/>
              <label>Hindi</label>
            </div>
            <div class="col-25">
            </div>
            <div class="col-75">
              <input type="checkbox" id="math" value="math"/>
              <label>Math</label>
              <input type="checkbox" id="physics" value="physics"/>
              <label>Physics</label>
            </div>
            <div class="col-25">
            </div>
            <div class="col-75">
              <input type="checkbox" id="chemistry" value="chemistry"/>
              <label>Chemistry</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>


    );
//  }


}
export default Student;
