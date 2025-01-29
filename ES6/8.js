const myString = "This is our FSD class and we are practicing string search methods";
//8.1
function contains(string,search)
{
    return string.includes(search);
};
console.log("Do my string contains 'Testing':"+contains(myString,"Testing"));
//8.2
function location(string,search)
{
    return string.indexOf(search);
};
console.log("Location of FSD:"+location(myString,"FSD"));
//8.3
console.log("Is mystring contains'string'?:"+contains(myString,"string"));
