//object as literal
var person={
    firstName:"John",
    lastName:"Doe",
    qualification:"Graduate",
    performs:function(){
        return "His name is"+ this.firstName + this.lastName + " and he is a "+ this.qualification;
    }

};
console.log("First name=",person.firstName)
console.log("Last name=",person.lastName)
console.log(person.performs())