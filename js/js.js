'use strict';


let regi = document.getElementById('regi');
regi.addEventListener("click", function(){
  let newLogin = prompt('enter login')
  return newLogin
})



function start(){
let hi = confirm('будем здороваться?')
if(hi){

    let name = prompt('как тебя зовут?')
    if(name.length>0){
        alert('привет ,' + name)
    } if(name.length===0){
        alert('имя не введено')
    }
}
else{
    alert('как хочешь')

}
}



let op;
function func(){
    let result;

    let num1 = Number(document.getElementById('num1'));
    let num2 = Number(document.getElementById('num2'));
    switch (op) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
    }
    document.getElementById("result").innerHTML = result; } // Теперь в результате получаю NaN пытался привести к числу, но не понимаю что не получается...

    let elem = document.getElementById('elem');
    elem.addEventListener("click", function(){
      alert("you clicked me")
    })

  
   

















   
// const hotel = {
//   name: 'У Ашота',
//   stars: 3,
//   capacity: 30,
// }
// console.log(hotel)

// const hotels = [hotel]

// console.log(hotels)
// const hotel1 = {
//   name:'У Вазгена',
//   stars: 4,
//   capacity: 100,
// }
// hotels.push(hotel1)
// console.log(hotels)
  