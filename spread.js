//spread operator
//Merging 2 arrays
// var fruits=["Abc","XYZ"];
// var fruits2=[...fruits,"MNO","PQR"];
// console.log(fruits2);

//merging 2 objects
// var car={model:'ignis',color:"black"};
// var f_details={''}

//rest parameters
function fun(...x)
{
    for(var i=0;i<x.length;i++)
    {
          console.log(x[i])
    }
}
fun(6,2,1,1,2)