//object creation using class
class Person{
    constructor(fname,lname,qualification){
        this.fname=fname;
        this.lname=lname;
        this.qualification=qualification;
    }
    performs(){
        console.log("Her name is "+ this.fname + this.lname + " and she is a "+ this.qualification);
    }
};
var p1=new Person("Raminder","Kaur","Graduate");
console.log(p1.performs());
