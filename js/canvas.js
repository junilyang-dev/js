const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.lineWidth = 2;//선의 두께
let isPainting = false;//그림을 그리는지 여부

function onMove(event) {//마우스가 움직일때마다 실행되는 함수
  if(isPainting) {//그림을 그리는지 여부)
    ctx.lineTo(event.offsetX, event.offsetY);//마우스가 움직일때마다 그림을 그린다.
    ctx.stroke();//그림을 그린다.
    return;//함수를 종료한다.
  }
  ctx.moveTo(event.offsetX, event.offSetY);//마우스가 움직일때마다 캔버스 포인터 이동
}

function onMouseDown(){//마우스를 누를때 실행되는 함수
  isPainting = true;//그림을 그리는지 여부를 true로 바꾼다.
}

function onMouseUp(){//마우스를 뗐을때 실행되는 함수
  isPainting = false;//그림을 그리는지 여부를 false로 바꾼다.
}

canvas.addEventListener("mousemove",onMove);//마우스가 움직일 때 onMove 함수 실행
canvas.addEventListener("mousedown",onMouseDown);//마우스를 누를때 onMouseDown 함수 실행
canvas.addEventListener("mouseup",onMouseUp);//마우스를 놓을때 onMouseUp 함수 실행
canvas.addEventListener("mouseleave",onMouseUp)//마우스를 떠나면 onMouseUp 함수 실행