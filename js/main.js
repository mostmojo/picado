document.getElementById("myBtnReadMoreLess").addEventListener("click", readMoreLess);

// Read More or Less function
function readMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtnReadMoreLess");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// const popup = document.querySelector(".popup");
// const x = document.getElementById("xIt");

// window.onload = setTimeout(function () {
//   popup.classList.add("popup-down");
// }, 5000);

// x.addEventListener("click", removePopup);

// function removePopup() {
//   popup.classList.remove("popup-down");
// }
