const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.
const lineWidth = document.getElementById("line-width");//line-width를 가져온다.
const color = document.getElementById("color");//color를 가져온다.
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);//color-option을 가져온다.
const modeBtn = document.getElementById("mode-btn");//mode-btn를 가져온다.
const destroyBtn = document.getElementById("destroy-btn");//destroy-btn를 가져온다.
const eraserBtn = document.getElementById("eraser-btn");//eraser-btn를 가져온다.
const fileInput = document.getElementById("file");//file를 가져온다.
const textInput = document.getElementById("text");//text를 가져온다.

const CANVAS_WIDTH = 800;//canvas의 너비
const CANVAS_HEIGHT = 800;//canvas의 높이

canvas.width = CANVAS_WIDTH;//canvas의 너비
canvas.height = CANVAS_HEIGHT;//canvas의 높이
ctx.lineCap = "round";//ctx의 lineCap을 round로 설정
ctx.lineWidth = lineWidth.value;//선의 두께
let isPainting = false;//그림을 그리는지 여부
let isFilling = false;//채우는지 여부


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


function onModeClick() {//모드를 바꾸는 함수
  if (isFilling) {//채우는지 여부가 true일때
    isFilling = false;//채우는지 여부를 false로 바꾼다.
    modeBtn.innerText = "Fill";//Fill 버튼을 눌렀을때 Fill로 바꾼다.
  } else {
    isFilling = true;//채우는지 여부를 true로 바꾼다.
    modeBtn.innerText = "Draw";//Draw 버튼을 눌렀을때 Draw로 바꾼다.
  }
}

function onCanvasClick() {//캔버스를 클릭하는 함수
  if (isFilling) {//채우는지 여부가 true일때
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);//캔버스 전체 채우기
  }
}

function onDestroyClick() {//캔버스를 초기화하는 함수
  ctx.fillStyle = "white";//캔버스를 흰색으로 채우기로 변경한다.
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);//캔버스 전체 채우기
  //흰색으로 바꾼 fillstyle 다시 원래 색으로 변경
  ctx.strokeStyle = color.value;//선 색깔을 바꾼다
  ctx.fillStyle = color.value;//면 색깔을 바꾼다
}

function onEraserClick() {//지우개를 눌렀을때 실행되는 함수
  ctx.strokeStyle = "white";//지우개를 흰색으로 바꾼다.
  isFilling = false;//채우는지 여부를 false로 바꾼다.
  modeBtn.innerText = "Fill";//Fill 버튼을 눌렀을때 Fill로 바꾼다.
}

function onFileChange(event) {//파일을 선택하는 함수
  const file = event.target.files[0];//이벤트에서 파일을 가져온다.
  const url = URL.createObjectURL(file);//파일을 가져와 URL형태로 만든다.
  const image = new Image();//이미지 태그를 생성한다.
  image.src = url;//이미지 태그에 URL 타입의 이미지를 넣는다.
  image.onload = function () {//이미지가 로드되면 실행되는 함수
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);//이미지를 그린다.
    fileInput.value = null;//파일을 비운다.
  };
}

function onDoubleClick(event) {//마우스르 두번 눌렸을때 실행되는 함수
  const text = textInput.value;//textInput의 값을 가져온다.
  if (text) {//text가 있다면
    ctx.save();//캔버스를 저장한다.
    ctx.lineWidth = 1;//선의 두께를 1로 설정한다.
    ctx.font = "68px 'Press Start 2P'";//font를 설정한다.
    ctx.fillText(text, event.offsetX, event.offsetY);//text를 캔버스에 그린다.(텍스트, X축, Y축)
    ctx.restore();//캔버스를 복원한다.
    }
}

canvas.addEventListener("click", onCanvasClick);//canvas를 클릭할때 실행되는 함수
canvas.addEventListener("mousemove",onMove);//마우스가 움직일 때 onMove 함수 실행
canvas.addEventListener("mousedown",onMouseDown);//마우스를 누를때 onMouseDown 함수 실행
canvas.addEventListener("mouseup",onMouseUp);//마우스를 놓을때 onMouseUp 함수 실행
canvas.addEventListener("mouseleave",onMouseUp)//마우스를 떠나면 onMouseUp 함수 실행
canvas.addEventListener("dblclick",onDoubleClick);//마우스로 더블클릭시 onDoubleClick 함수 실행
lineWidth.addEventListener("change",onLineWidthChange);//선의 두께를 바꾸면 onLineWidthChange 함수 실행
color.addEventListener("change",onColorChange);//색깔을 바꾸면 onColorChange 함수
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));//color-option을 클릭하면 onColorClick 함수 실행
modeBtn.addEventListener("click", onModeClick);//모드 버튼을 클릭하면 onModeClick 함수 실행
destroyBtn.addEventListener("click", onDestroyClick);//destroy 버튼을 클릭하면 onDestroyClick 함수 실행
eraserBtn.addEventListener("click", onEraserClick);//eraser 버튼을 클릭하면 onEraserClick 함수 실행
fileInput.addEventListener("change", onFileChange);//file을 선택하면 onFileChange 함수 실행
