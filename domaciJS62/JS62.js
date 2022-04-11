// ime=document.getElementById("ime");
// prezime=document.getElementById("Prezime");
// username = document.getElementById("username");
// dugme=document.getElementById("btn");

// dugme.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(ime.value + prezime.value + username.value);
// })

// function fetchData(){
// var link = "https://catfact.ninja/facts";
// fetch(link)
// .then((res) =>{
//     return res.json();
// })
// .then((res) => {
//     console.log(res);
//     gl.innerHTML=""
//     for (let i = 0; i < res.data.length; i++) {
//         generateCard(res.data[i])
//     }
//     paginacija.innerHTML=""
//     for (let i = 0; i< res.links.length; i++) {
//       generatePage(res.links[i]);
       
//     }
// })

// .catch((err) =>{
//     console.log(err);
// })
// }

// function generateCard(vals)
// {
//     kartica=document.createElement("div");
//     kartica.style.backgroundColor="orange";
//     kartica.style.width="300px";
//     kartica.style.height="300px";
//     kartica.style.color="300px";
//     kartica.innerHTML= vals.fact
//     glavni=document.getElementById("glavni");
//     glavni.appendChild(kartica);
//     return kartica;
// }

// function generatePage(vals)
// {
//     page=document.createElement('button');
//     page.style.backgroundColor="purple";
//     page.innerHTML=vals.label;
//     page.onclick = function (e)
//     {
//       e.preventDefault()
  
//       link=vals.url
//       fetchData()
//     }
//     gla=document.getElementById('paginacija');
//     gla.appendChild(page);
// }


// gl=document.getElementById("glavni");
// gl.style.display="flex";
// gl.style.flexDirection="row";
// gl.style.gap="15px";
// gl.style.flexWrap="wrap"


// paginacija=document.getElementById("paginacija");
// paginacija.style.width="97 vw";
// paginacija.style.height="70px";
// paginacija.style.backgroundColor="grey";
// paginacija.style.display="flex";
// paginacija.style.flexDirection="row";
// paginacija.style.alignItem="center";
// paginacija.style.justifyContent="center";
// paginacija.style.gap="5px";





// fetchData()

function patern(n){
    var red = 1
    for (var i = 2; i <= n; i++) {
        red += "\n" + 1 + Array(i).join("*") + i
    }
    return red;
    
}
console.log(patern(10));







