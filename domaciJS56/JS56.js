// function pageNav(vals)
// {
//   let nav=document.createElement('button');
//   nav.innerHTML=vals.label
//   if(vals.active)
//   {
//     nav.style.backgroundColor='#ff9900'
//   }
//   if(!vals.url)
//   {
//     nav.classList.add("disabled-href")
//   }
//   nav.onclick = function (e)
//   {
//     e.preventDefault()

//     fetchLink=vals.url
//     fetchData()
//   }
//   return nav
// }




// function generateCard(vals)
// {
//   var subEl=document.createElement('div');
//   subEl.style.backgroundColor='#ff9900';
//   subEl.style.borderBottom='10px solid #001a00';
//   subEl.style.width='300px';
//   subEl.style.height='200px';
//   subEl.style.margin='10px';
//   subEl.innerHTML=vals.fact;
//   return subEl

// }

// var ctr=document.getElementById('container');
// ctr.style.display='flex';
// ctr.style.justifyContent='flex-start';
// ctr.style.flexWrap='wrap';


// var pagintationCtr = document.getElementById("pagination-container");


// var fetchLink="https://catfact.ninja/facts"


// function fetchData()
// {

// fetch(fetchLink)
// .then((res) => {
//   return res.json();
// })
// .then((res) =>{
//   ctr.innerHTML=''
//   for(let i=0; i<res.data.length;i++)
//   {
//     ctr.appendChild(generateCard(res.data[i]))
//   }

//   pagintationCtr.innerHTML=""
  
//   for(i=0;i<res.links.length;i++)
//   {
//     pagintationCtr.appendChild(
//       pageNav(res.links[i])
//     )
//   }
// })
// .catch((error) =>{
//   console.log(error);
// })
// }

// fetchData();

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















