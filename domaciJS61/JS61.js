

var link="https://catfact.ninja/facts"

function fetchData(){
fetch(link)
.then((podatak) =>{
    return podatak.json()
})
.then((podatak) =>{
    console.log(podatak);
    gl.innerHTML=""
    for(let i=0;i<podatak.data.length;i++)
    {
        generateCard(podatak.data[i])
    }
    pagintationCtr.innerHTML=""
    for(let i=0;i<podatak.links.length;i++)
    {
        generatePage(podatak.links[i])
    }
})

.catch((err) =>{
    console.log(err);
})
}

function generateCard(vals){
    kartica= document.createElement('div');
    kartica.style.backgroundColor = "purple"
    kartica.style.height = "300px"
    kartica.style.width = "300px"
    kartica.style.color="white"
    kartica.innerHTML = vals.fact;
    glavni=document.getElementById('glavni');
    glavni.appendChild(kartica);
    return kartica    
}


function generatePage(vals){
   
    page= document.createElement('button');
    page.style.backgroundColor = "purple"
    
    page.style.color="white"
    page.innerHTML = vals.label;
    page.onclick = function (e)
    {
      e.preventDefault()
  
      link=vals.url
      fetchData()
    }
    gla=document.getElementById('paginacija');
    gla.appendChild(page);
    
    return page    
}

gl=document.getElementById('glavni');
gl.style.display="flex";
gl.style.flexDirection="row";
gl.style.gap="15px";
gl.style.flexWrap="wrap"

var pagintationCtr = document.getElementById("paginacija");

paginacija=document.getElementById("paginacija");
paginacija.style.width="97 vw";
paginacija.style.height="70px";
paginacija.style.backgroundColor="grey";
paginacija.style.display="flex";
paginacija.style.flexDirection="row";
paginacija.style.alignItem="center";
paginacija.style.justifyContent="center";
paginacija.style.gap="5px";

fetchData();

