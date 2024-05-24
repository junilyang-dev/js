function fnWhenResizeChangeColor() {
  const width = window.innerWidth;
  if (width < 300) {
    document.body.style.backgroundColor = "skyblue";
  } else if (width >= 300 && width < 600) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}
fnWhenResizeChangeColor();
window.addEventListener("resize", fnWhenResizeChangeColor);