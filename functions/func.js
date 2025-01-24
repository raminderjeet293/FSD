//Anonymous function
const sqr =function(n){
    return n+n
}
console.log(sqr(5));

//arrow functions
const arrow_sqr=(n)=>
{
    return n*n;
}
console.log(arrow_sqr(10));

//default_parameter
function p_details(name,country='India')
{
    console.log(name+" "+country);
}
p_details("ABC","USA");
p_details("ABC")

//simple function with return values
function add(n,m)
{
     return (n+m);
}
// add(10,11);
const ret=add(10,12);
console.log(ret);