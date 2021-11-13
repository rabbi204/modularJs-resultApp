class Validate {

    // Set Alert Message4
    static setMsg(msg, type='danger'){
        return `<p class="alert alert-${type}">${msg}<button class="close" data-dismiss="alert">&times;</button></p>`;
    }

    // Check Empty Value
    static empty(value){

        // if('' == value){
        //     return true;
        // }else {
        //     return false;
        // }
        return ('' == value)? true : false;

    }

    // Check password and confirm password match or not
    static passConfirm(pass, cpass){

        return (pass === cpass)? true : false;

    }

}

export default Validate;