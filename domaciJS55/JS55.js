
// function a(arg)
// {
//   console.log("Neki kod");
//   console.log("nesto");
//   arg();
// }

// function hello()
// {
//   console.log("Hello wolrdd");
// }
// // a(hello);
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);


// function greet(name, myFunction) {
  // console.log('Hello world');

  // callback function
  // executed only after the greet() is executed
  // myFunction(name);
// }

// callback function
// function sayName(name) {
  // console.log('Hello' + ' ' + name);
// }

// calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);






// async function getData()
// {
//   try
//   {
//     const res=await fetch("https://jsonplaceholder.typicode.com/users");
//     const resJson=await res.json()
//     const name= resJson.map((el) =>{
//       return {name: el.name};
//     })
//     console.log(name);
    
//   }catch(err)
//   {
//     console.log("Problem sa serverom");
//   }
// }

// getData()

var novi = document.createElement('div');
var container1=document.getElementById("container") 
novi.style.border='1px solid black';
novi.style.width='300px';
novi.style.height='300px';
novi.style.backgroundColor='red';
container1.appendChild(novi);

