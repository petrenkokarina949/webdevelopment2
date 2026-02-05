const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));


const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
  let readMoreDiv = document.querySelector("#readmore");
  readMoreDiv.classList.toggle("hideshow");
});

const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let parts = username.split(" ");
 let name = ""
 for (let i = 0; i < parts.length; i++) {
    name += parts[i].charAt(0).toUpperCase()+parts[i].substring(1).toLowerCase() + " "
 }






  document.querySelector("h1").textContent = `Welcome to the App, ${name.substring(0, name.length -1)}!`;
});