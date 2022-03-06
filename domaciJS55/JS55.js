
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
// a(hello);
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);