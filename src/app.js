window.onscroll = function() {
  scrollNav();
  scrollBack();
};

const mybutton = document.getElementById("myBtn");

function scrollNav() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-container").style.padding = "1rem 1rem";
  } else {
    document.getElementById("nav-container").style.padding = "2rem 1rem";
  }
}

function scrollBack() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
