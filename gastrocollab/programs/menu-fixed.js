// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-400px";
  }
}