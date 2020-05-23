import React, {useState,useEffect} from 'react';


class Student extends React.Component{
  //variable declaration
  varstudentsHook:null;
  varsName : null;
  varsAge : null;
  varsClass : null;
  varsGender : null;
  varsSubject:null;


  constructor(props){
    super(props);
    this.setStudent = this.setStudent.bind(this);
    this.studentDataSubmit = this.studentDataSubmit.bind(this);
    this.getStudent = this.getStudent.bind(this);
    //state declaration
    this.state = {
        studentsHook:null,
        sName : null,
        sAge : null,
        sClass : null,
        sGender : null,
        subjects:null,
      };
  }
  componentWillMount(){

  }

  studentDataSubmit = (event) =>{
    event.preventDefault();
        const sData= event.target;
        //can also make handler function for setting state using onChange method
        this.setState({sName:event.target.stuName.value});
        this.setState({sAge:event.target.stuAge.value});
        this.setState({sClass:event.target.stuClass.value});
        this.setState({sGender:event.target.stuGender.value});
        this.varsName = event.target.stuName.value;
        this.varsAge = event.target.stuAge.value;
        this.varsClass = event.target.stuClass.value;
        this.varsGender = event.target.stuGender.value;
        // this.varsSubject = {
        //   english:sData.english,
        //   hindi:sData.hindi,
        //   physics:sData.physics,
        //   chemistry: sData.chemistry,
        //   math: sData.math,
        // }
        this.varsSubject=[sData.english.checked,sData.hindi.checked,sData.physics.checked,sData.chemistry.checked,sData.math.checked];
        this.setStudent();
  }

  getStudent = () =>{
    fetch('http://localhost:4000/student')
    .then(response => response.text())
    .then(response => {
    //  console.log(response)
      this.setState({studentsHook:response}
      )
    })
    console.log(this.state.studentsHook)
  }

  setStudent(){
    //states not working as expected , value updates only after re-render
    let name = this.state.sName;
    let age = this.state.sAge;
    let standard = this.state.sClass
    let gender = this.state.sGender;
    // let subjects = this.state.sSubject;
    let subjects = [false,false,false,false,false];
    name = this.varsName;
    age = this.varsAge;
    standard = this.varsClass;
    gender = this.varsGender;
    // subjects = this.varsSubject
    for(var i=0;i<subjects.length;i++){
      if(this.varsSubject[i]){
        console.log(this.varsSubject[i]);
        subjects[i]=true;
      }

    }
    // subjects=[true,false,true,false,true];

    // console.log(name)
    // console.log(age)
    // console.log(gender)
    // console.log(standard)
    //  name = "Shauryan"
    //  age = 22;
    //  standard = 12;
    // gender = 'M';
    // console.log(name)
    // console.log(age)
    // console.log(gender)
    // console.log(standard)

     fetch('http://localhost:4000/student/setstudent',{

       method:'post',
       headers:{
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({name,age,gender,standard,subjects}),
     })
     .then(response => response.text())
     .then(response => {
       // return response.text();
       console.log(response)
     })

     .then(data => {
       alert(data);
       console.log(data)
       this.getStudent();
     })
  }

  render(){
    return(

      <div class ="container">
      <header className="Component-header">
        <h1>Student Form</h1>
      </header>
        <form onSubmit={this.studentDataSubmit}>
          <div class="row">
            <div class="col-25">
              <label>Name :</label>
            </div>
            <div class="col-75">
              <input type="text" placeholder="Enter your name" maxLength="30"
               id="stuName" name="stuName" alt="Shauryan"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Age</label>
            </div>
            <div class="col-75">
              <input type="number" placeholder="Age" min="3" max="25"
                 id="stuAge" name="stuAge" value="24"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Class</label>
            </div>
            <div class="col-75">
              <select id="stuClass" name="stuClass" value="12">
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
                  value="F"  name="stuGender" checked
                />
                Female
              </label>
              <label>
                <input type="radio" id="genderM"
                  value="M"  name="stuGender"
                />
                Male
              </label>
              <label>
                <input type="radio" id="genderO"
                  value="O"  name="stuGender"
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
              <input type="checkbox" id="english" name="english" />
              <label>English</label>
              <input type="checkbox" id="hindi" name="hindi"/>
              <label>Hindi</label>
            </div>
            <div class="col-25">
            </div>
            <div class="col-75">
              <input type="checkbox" id="math" name="math" checked/>
              <label>Math</label>
              <input type="checkbox" id="physics" name="physics" checked/>
              <label>Physics</label>
            </div>
            <div class="col-25">
            </div>
            <div class="col-75">
              <input type="checkbox" id="chemistry" name="chemistry"/>
              <label>Chemistry</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>


    );
  }


}
export default Student;
