var person = ['andrew', 24];
var personTwo = ['jen', 43];
var names = ['mike', 'ben'];
var final = [...names, 'oleg'];
function greeting(a, b) {
  console.log(`hi ${a} u are ${b}`);
};
greeting(...person);
greeting(...personTwo);
hail(final);



function hail(arr) {
  for(var i = 0; i < arr.length; i++){console.log(`hey ${arr[i]}`)};
};
