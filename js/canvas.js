const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.lineWidth = '2';//선의 두께

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];//색깔을 배열로 저장한다.

function onClick(event){
  ctx.beginPath();
  ctx.moveTo(800,800);//시작점
  const color = colors[Math.floor(Math.random() * colors.length)];//무작위로 색깔을 선택한다.
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);//캔버스에 점을 그린다.
  ctx.stroke();
}

canvas.addEventListener("click", onClick);//canvas에 클릭이벤트가 발생하면 onClick함수 실행