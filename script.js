function Menu() {
  var x = document.querySelector(".topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function backArrow() {
  let scrollContainer = document.querySelector(".gallery");
  let scrollAmount = Math.min(scrollContainer.scrollLeft, 300);

  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
}

function forwardArrow() {
  let scrollContainer = document.querySelector(".gallery");
  let scrollWidth = scrollContainer.scrollWidth;
  let clientWidth = scrollContainer.clientWidth;

  let scrollableWidth = scrollWidth - clientWidth;

  let scrollAmount = Math.min(scrollableWidth, 300);

  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
}
