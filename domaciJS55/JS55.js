


async function getData()
{
  try
  {
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const resJson=await res.json()
    const name= resJson.map((el) =>{
      return {name: el.name};
    })
    console.log(name);
    
  }catch(err)
  {
    console.log("Problem sa serverom");
  }
}

getData()
var novi = document.createElement('div');
var container1=document.getElementById("container") 
novi.style.border='1px solid black';
novi.style.width='300px';
novi.style.height='300px';
novi.style.backgroundColor='red';
novi.style.display='flex';
novi.style.alignItems='center';
novi.style.justifyContent='center';
container1.appendChild(novi);


function pageNav(vals)
{
  let nav=document.createElement('a');
  nav.innerHTML=vals.label
  if(vals.active)
  {
    nav.style.backgroundColor='white'
  }
  if(!vals.url)
  {
    nav.classList.add("disabled-href")
  }
  nav.onclick = function (e)
  {
    e.preventDefault()

    fetchLink=vals.url
    fetchData()
  }
  return nav
}




















