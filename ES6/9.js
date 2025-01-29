let country=['India','USA','UK','Canada','Australia'];
function display()
{
    return country;
}
console.log(display());
//9.1
function convertToString(array)
{
    return array.toString();
}
console.log(convertToString(country));
console.log(display());
//9.2
function removeLastElement(array)
{
    return array.pop();
}
console.log("Last element removed:"+removeLastElement(country));
console.log(display());
//9.3
function removefirstElement(array)
{
    return array.shift();
}
console.log("First element removed:"+removefirstElement(country));
console.log(display());
//9.4
function addElement(array,element)
{
    return array.push(element);
}
console.log("Add element at last:"+addElement(country,'Japan'));
console.log(display());
//9.5
function addElementAtFirst(array,element)
{
    return array.unshift(element);
}
console.log("Add element at First:"+addElementAtFirst(country,'China'));
console.log(display());
//9.6 
function leftShift(array)
{
    return array.shift();
}
console.log("Left shift the array: "+leftShift(country));
console.log(display());
//9.7
function unshiftElement(array,element)
{
    return array.unshift(element);
}
console.log("Unshift the array:"+ unshiftElement(country,'Russia'));
console.log(display());
