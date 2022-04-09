ime=document.getElementById("ime");
prezime=document.getElementById("Prezime");
username = document.getElementById("username");
dugme=document.getElementById("btn");

dugme.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(ime.value + prezime.value + username.value);
})

