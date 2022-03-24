
var email=document.getElementById("email")
var name=document.getElementById("name")
var password=document.getElementById("pass")
var usernusername=document.getElementById("user")
let dugme = document.querySelector("#dugme")
dugme.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log({email,namer,passw,usern});
  const user = {
    email : e.target.form[0].value,
    name : e.target.form[1].value,
    password : e.target.form[2].value,
    username : e.target.form[3].value,
    
  }
  console.log(user);


  fetch("https://serene-fortress-45917.herokuapp.com/v1/auth/signup",
  {
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
})
 
// Converting to JSON
.then(response => response.json())
.then(response => {
  console.log(response);
})
 
// Displaying results to console
.catch(err=>{
  console.log(err);
})
})
