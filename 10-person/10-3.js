//using object() constructor
function person(){
this.fname="Raminderjeet",
this.lname="Kaur",
this.qualification="Graduate",
this.performs=function()
{
    return "Her name is "+ this.firstName + this.lastName + " and she is a "+ this.qualification;
}
};
var p1=new person();
console.log("Name of person="+p1.fname+" "+p1.lname);
console.log(p1.performs());