//object creation using object create method
var person={
fname:"Raminderjeet",
    lname:"Kaur",
 qualification:"Graduate",
    performs: function()
    {
        return "Her name is "+ this.fname + this.lname + " and she is a "+ this.qualification;
}
    }
var per=Object.create(person);
console.log(per.performs());

