import Validate from './app/Validate.js';
import Regex from './app/Regex.js';
import Result from './app/Result.js';


// get elements
let student_form = document.querySelector('#student_form');
let msg = document.querySelector('.msg');


// feild Value check
let marks_field = student_form.querySelectorAll('.marks-field');

for (let i = 0; i < marks_field.length; i++) {
    marks_field[i].addEventListener('keyup', function(){
        if( Regex.numCheck(this.value) ){
            return true;
        }
        else{
            this.value= '';
        }
    });
}


// student form submit
student_form.addEventListener('submit', function(event){
    event.preventDefault();
    
    // get form element
    let name = student_form.querySelector('#name').value;
    let roll = student_form.querySelector('#roll').value;
    let bn = student_form.querySelector('#bn').value;
    let en = student_form.querySelector('#en').value;
    let math = student_form.querySelector('#math').value;
    let ssci = student_form.querySelector('#ssci').value;
    let sci = student_form.querySelector('#sci').value;
    let reli = student_form.querySelector('#reli').value;

    let result_box = document.querySelector('.result_box');


    if( Validate.empty(name) || Validate.empty(roll) || Validate.empty(bn) || Validate.empty(en) || Validate.empty(math) || Validate.empty(ssci) || Validate.empty(sci) || Validate.empty(reli) ){
        msg.innerHTML = Validate.setMsg('All Fields Are Required');
    }else if( Regex.numCheck(roll) == false ){
        msg.innerHTML = Validate.setMsg('Roll number should be a number', 'warning' );
    }else{
       
        // result app
        result_box.innerHTML = `<div class="card">
                <div class="card-header">
                    <h2 class="card-title">${name} Result</h2>
                </div>
                <div class="card-body">
                    <h1>Name: ${name}</h1>
                    <p>Roll : ${roll}</p>
                    <hr>
                    <table class="table table-striped table-bordered table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>GPA</th>
                                <th>Grade</th>
                                <th>CGPA</th>
                                <th>Final Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bangla</td>
                                <td>${bn}</td>
                                <td>${ Result.gpa(bn) }</td>
                                <td>${ Result.grade(bn) }</td>
                                <td rowspan="6">${ Result.cgpa(bn,en,math,ssci,sci,reli) }</td>
                                <td rowspan="6">${ Result.result(bn,en,math,ssci,sci,reli) }</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>${en}</td>
                                <td>${ Result.gpa(en) }</td>
                                <td>${ Result.grade(en) }</td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>${math}</td>
                                <td>${ Result.gpa(math) }</td>
                                <td>${ Result.grade(math) }</td>
                            </tr>
                            <tr>
                                <td>Social Science</td>
                                <td>${ssci}</td>
                                <td>${ Result.gpa(ssci) }</td>
                                <td>${ Result.grade(ssci) }</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>${sci}</td>
                                <td>${ Result.gpa(sci) }</td>
                                <td>${ Result.grade(sci) }</td>
                            </tr>
                            <tr>
                                <td>Religion</td>
                                <td>${reli}</td>
                                <td>${ Result.gpa(reli) }</td>
                                <td>${ Result.grade(reli) }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;


    }

});
