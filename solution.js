const { add } = require("nodemon/lib/rules")

let int1 = 66
let int2 = 35


if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99))
    {console.log(true)}
else{console.log(false)}

let int3 = 77

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99))
    {console.log(true)}
else{console.log(false)}

function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
console.log(check_numbers(51))
console.log(check_numbers(101))
console.log(check_numbers(int1))
console.log(check_numbers(int2))
console.log(check_numbers(int3))


const a = 10
const b = 69
const c = 55

console.log(Math.max(a,b,c))
console.log(Math.max(int1,int2,int3))

const str = "thagoras"
const addStr = "Py"
console.log(addStr + str)


const int1and2 = int1 + int2
console.log(int1and2)

if ((int1and2 >= 50 && int1and2 <= 80))
    {console.log(65)}
else{console.log(80)}

const int4 = 16
const int5 = 15

if (int4 + int5 == 8 || int4 - int5 == 8 || int5 - int4 == 8) {
    console.log(true);
    } else {
    console.log(false);
    }


if (int4 + int5 == 15 || int4  == 15 || int5  == 15){
    console.log(true);
    } else {
    console.log(false);
    }


if ((int4 % 7 == 0) || (int4 % 11 == 0) || (int5 % 7 == 0) || (int5 % 11 == 0)){
    console.log(true);
    } else {
    console.log(false);
    }

if(int4 == int5){
    console.log((int4 + int5 )* 3)
}
else{
    console.log(int4 + int5)
}



if (int5 > 19) {
    console.log(2 *(int5-19));
    } else {
    console.log(19-int5);
    }





  

