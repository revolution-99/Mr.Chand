const nav = document.getElementById("myNavigation");
var elementIsClicked = 0; 

function openNav(){
  nav.classList.add("responsive");
  nav.addEventListener('click', clickHandler);
  console.log("Nav opens");
}

function closeNav(){
  nav.classList.remove("responsive");
  nav.removeEventListener('click', clickHandler);
  console.log("Nav closes");
}

function clickHandler(){
  elementIsClicked++;
  if (elementIsClicked >1) {
    closeNav();
    elementIsClicked = 0;
  }
  console.log("is clicked");
}



