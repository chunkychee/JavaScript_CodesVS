/*let person = {
    name: "han",
    age:30
};
let selection = person.name;
console.log(selection);*/

let arrayNum = []; 
var i = 0;
while(arrayNum.length < 100){
   arrayNum.push(i++)
}
console.log(arrayNum)

for(i=1; i <=arrayNum.length; i++){
    if(i%2 === 0){
        console.log(i)
    }else{
        continue;
    }
}
 
