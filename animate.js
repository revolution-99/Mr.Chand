const scrollElements = document.querySelectorAll(".scroll");

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return(
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

const displayScrollElement = (element) =>{
  element.classList.add("scrolled");
  console.log("scrolled class is added");
}

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  console.log("scrolled class is removed");
};

const handleScrollAnimation = () =>{
  scrollElements.forEach( el =>{
    if (elementInView(el, 100)) {
      displayScrollElement(el);
      console.log("display scroll");
    }
    else{
      hideScrollElement(el);
    }
  })
}

let throttleTimer = false;
const throttle = (callback, time) =>{
  if (throttleTimer) {
    return;
  }
  throttleTimer = true;
  setTimeout( () =>{
    callback();
    throttleTimer = false;
  }, time)
}
window.addEventListener ('scroll', () =>{
  throttle(handleScrollAnimation , 250)
})