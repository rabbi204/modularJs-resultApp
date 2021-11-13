

class Result{

    /**
     * GPA Calculate
     * @param {*} marks 
     * @returns 
     */
    static gpa(marks){
        if( marks > 0 && marks <= 32 ){
            return 0;
        }else if( marks >= 33 && marks <= 39 ){
            return 1;
        }else if( marks >= 40 && marks <= 49 ){
            return 2;
        }else if( marks >= 50 && marks <= 59 ){
            return 3;
        }else if( marks >= 60 && marks <= 69 ){
            return 3.5;
        }else if( marks >= 70 && marks <= 79 ){
            return 4;
        }else if( marks >= 80 && marks <= 100 ){
            return 5;
        }else{
            return "Invalid";
        }
    }

    /**
     * Grade Calculate
     * @param {*} marks 
     * @returns 
     */
    static grade(marks){
        if( marks > 0 && marks <= 32 ){
            return 'F';
        }else if( marks >= 33 && marks <= 39 ){
            return 'D';
        }else if( marks >= 40 && marks <= 49 ){
            return 'C';
        }else if( marks >= 50 && marks <= 59 ){
            return 'B';
        }else if( marks >= 60 && marks <= 69 ){
            return 'A-';
        }else if( marks >= 70 && marks <= 79 ){
            return 'A';
        }else if( marks >= 80 && marks <= 100 ){
            return 'A+';
        }else{
            return "Invalid";
        }
    }

    /**
     * CGPA Calculate
     * @param {*} m1 
     * @param {*} m2 
     * @param {*} m3 
     * @param {*} m4 
     * @param {*} m5 
     * @param {*} m6 
     * @returns 
     */
    static cgpa(m1,m2,m3,m4,m5,m6){
        let total_gpa = this.gpa(m1) + this.gpa(m2) + this.gpa(m3) + this.gpa(m4) + this.gpa(m5) + this.gpa(m6);

        if( m1 > 32 && m2 > 32 && m3 > 32 && m4 > 32 && m5 > 32 && m6 > 32){
            let cgpa = total_gpa/6;
            return cgpa.toFixed(2);
        }else{
            return 0;
        }
    }

    /**
     * Final Result Calculation
     * @param {*} m1 
     * @param {*} m2 
     * @param {*} m3 
     * @param {*} m4 
     * @param {*} m5 
     * @param {*} m6 
     * @returns 
     */
    static result(m1,m2,m3,m4,m5,m6){
        let total_gpa = this.gpa(m1) + this.gpa(m2) + this.gpa(m3) + this.gpa(m4) + this.gpa(m5) + this.gpa(m6);

        if( m1 > 32 && m2 > 32 && m3 > 32 && m4 > 32 && m5 > 32 && m6 > 32){
            let cgpa = total_gpa/6;
            if(cgpa == 5){
                return "A+";
            }else if( cgpa >= 4 && cgpa < 5){
                return "A";
            }else if( cgpa >= 3.5 && cgpa < 4){
                return "A-";
            }else if( cgpa >= 3 && cgpa < 3.5){
                return "B";
            }else if( cgpa >= 2 && cgpa < 3){
                return "C";
            }else if( cgpa >= 1 && cgpa < 2){
                return "D";
            }else if( cgpa < 1 ){
                return 'Failed';
            }
        }else{
            return 'Failed';
        }
    }


}

export default Result;