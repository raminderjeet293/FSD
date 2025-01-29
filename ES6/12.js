//12.1-Concatenate 2 arrays
var fruits=['Apple','Banana','Pears','Mango'];
var food=[...fruits,'Smoothies','Drinks'];
console.log("Concatenated array:"+food);
//12.2-Concatenate 2 objects
const model_details={
    Model:'Ignis',
    color:'Black',
};
const Financial_details={
    price:"7 Lakhs",
    year:"2000",
};
const details={...model_details,...Financial_details}
console.log("Concatenated object is as follows:")
console.log(details);
//12.3 pass elements of array as parameter to function using spread operators
function add(x,y)
{
   console.log(x+y);
}
var array=[1,2,3,4,5];
console.log(add(array));
console.log(add(...array.slice(1,3)));
//12.4,use scalar values along with spread operators
console.log(add(5,...array));