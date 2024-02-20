const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.
const lineWidth = document.getElementById("line-width");//line-width를 가져온다.
const color = document.getElementById("color");//color를 가져온다.
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);//color-option을 가져온다.
canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.lineWidth = lineWidth.value;//선의 두께
let isPainting = false;//그림을 그리는지 여부

function onMove(event) {//마우스가 움직일때마다 실행되는 함수
  if(isPainting) {//그림을 그리는지 여부)
    ctx.lineTo(event.offsetX, event.offsetY);//마우스가 움직일때마다 그림을 그린다.
    ctx.stroke();//그림을 그린다.
    return;//함수를 종료한다.
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offSetY);//마우스가 움직일때마다 캔버스 포인터 이동
}

function onMouseDown(){//마우스를 누를때 실행되는 함수
  isPainting = true;//그림을 그리는지 여부를 true로 바꾼다.
}

function onMouseUp(){//마우스를 뗐을때 실행되는 함수
  isPainting = false;//그림을 그리는지 여부를 false로 바꾼다.
}

function onLineWidthChange(event){//선의 두께를 바꾸는 함수
  ctx.lineWidth = event.target.value;//선의 두께를 바꾼다
}

function onColorChange(event){//색깔을 바꾸는 함수
  ctx.strokeStyle = event.target.value;//선 색깔을 바꾼다
  ctx.fillStyle = event.target.value;//면 색깔을 바꾼다
}

function onColorClick(event) {//색깔을 클릭하는 함수
  const colorValue = event.target.dataset.color;//색깔을 클릭하는 함수
  ctx.strokeStyle = colorValue;//선 색깔을 바꾼다
  ctx.fillStyle = colorValue;//면 색깔을 바꾼다
  color.value = colorValue;//color input 색깔을 바꾼다
}

canvas.addEventListener("mousemove",onMove);//마우스가 움직일 때 onMove 함수 실행
canvas.addEventListener("mousedown",onMouseDown);//마우스를 누를때 onMouseDown 함수 실행
canvas.addEventListener("mouseup",onMouseUp);//마우스를 놓을때 onMouseUp 함수 실행
canvas.addEventListener("mouseleave",onMouseUp)//마우스를 떠나면 onMouseUp 함수 실행
lineWidth.addEventListener("change",onLineWidthChange);//선의 두께를 바꾸면 onLineWidthChange 함수 실행
color.addEventListener("change",onColorChange);//색깔을 바꾸면 onColorChange 함수
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));//color-option을 클릭하면 onColorClick 함수 실행