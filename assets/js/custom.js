// get elements 
const sign_up_form = document.querySelector('#sign_up');
const msg = document.querySelector('.msg');



// Form Submit 
sign_up_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value; 
    let email = this.querySelector('input[name="email"]').value; 
    let cell = this.querySelector('input[name="cell"]').value; 
    let uname = this.querySelector('input[name="uname"]').value; 
    let pass = this.querySelector('input[name="pass"]').value; 
    let cpass = this.querySelector('input[name="cpass"]').value; 


   

    // form validation 
    if( Validate.empty(name) || Validate.empty(email) || Validate.empty(cell) || Validate.empty(uname)  || Validate.empty(pass) ){

        msg.innerHTML = Validate.setMsg('All fields are required');
        
    } else if(Regx.checkEmail(email) == false){

        msg.innerHTML = Validate.setMsg('Invalid Email address', 'warning');

    } else if( Regx.checkCell(cell) == false ){

        msg.innerHTML = Validate.setMsg('Invalid mobile number', 'warning');

    }else if(Validate.passConfirm(pass, cpass) == false){

        msg.innerHTML = Validate.setMsg('Confirm password not match', 'info');
        
    } else {

        msg.innerHTML = Validate.setMsg('Data stable', 'success');

    }



});