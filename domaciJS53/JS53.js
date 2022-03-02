// function wash(callBack) {
//   setTimeout(function () {
//     console.log("wash");
//     callBack();
//   }, 3000);
// }


// function dry(callBack) {
//     setTimeout(function () {
//       console.log("dry");
//       callBack();
//     }, 2000);
//   }

//   function fold(callBack) {
//     setTimeout(function () {
//       console.log("fold");
//       callBack();
//     }, 3000);
//   }

//   function doLaundary(actions){
//       actions[0](() =>{
//           actions[1](() =>{
//               actions[2](() =>{
//                   console.log("Done");
//               });
//           });
//       });
//   }


//   doLaundary([wash,dry,fold]);





// function a(arg)
// {
//   console.log("Neki kod");
//   console.log("nesto");
//   arg();
// }

// function hello()
// {
//   console.log("Hello wolrd");
// }
// a(hello);


function hello()
{
  console.log("Hello wolrd");
}

a=hello;
b=a;
c=b;
c();
