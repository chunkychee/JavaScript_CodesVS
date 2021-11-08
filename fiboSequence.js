const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter a an index number to stop at"));
console.log(num);
fiboGenerator(num);
function fiboGenerator(number){
  var i=2;
  var num1=0;
  var num2=1;
  var arrayInput = [0,1];

  while(i <= (number-1)){
    var result = (num1 + num2);
    arrayInput.push(result);
    i++; 
    num1 = num2;
    num2 = result;
  }
  console.log(arrayInput);
}
