const title = document.getElementById("title");
const colors = ["red", "green", "blue", "purple", "orange"];
let colorIndex = 0;

const superEventHandler = {
  handleMouseOver: function () {
    title.textContent = "The mouse is here!";
    this.changeColor();
  },
  handleMouseOut: function () {
    title.textContent = "The mouse is gone!";
    this.changeColor();
  },
  handleResize: function () {
    title.textContent = "You just resized!";
    this.changeColor();
  },
  handleRightClick: function (event) {
    //event.preventDefault();
    title.textContent = "That was a right click!";
    this.changeColor();
  },
  changeColor: function () {
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  },
};

title.addEventListener(
  "mouseover",
  superEventHandler.handleMouseOver.bind(superEventHandler),
);
title.addEventListener(
  "mouseout",
  superEventHandler.handleMouseOut.bind(superEventHandler),
);
window.addEventListener(
  "resize",
  superEventHandler.handleResize.bind(superEventHandler),
);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleRightClick.bind(superEventHandler),
);
