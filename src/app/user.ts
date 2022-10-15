export class User {

    /*
    private firstname : String;
    private lastname : String;
    private email : String;
    private phone : String;
    private password: String;
    constructor(firstname:string , lastname:string , email:string , phone:string , password:string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
*/

    constructor(
        private firstname?: string,
        private lastname?: string,
        private email?: string,
        private phone?: string,
        private password?: string,
        private id?:string,
    ) {


    }

}
