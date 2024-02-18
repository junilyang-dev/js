const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.rect(50, 50, 100, 100);//50, 50의 위치에 100, 100의 넓이를 가진 사각형을 그린다.
ctx.rect(150, 150, 100, 100);//150, 150의 위치에 100, 100의 넓이를 가진 사각형을 그린다.
ctx.rect(250, 250, 100, 100);//250, 250의 위치에 100, 100의 넓이를 가진 사각형을 그린다.
ctx.fill();//사각형을 채운다.
ctx.beginPath();//새로운 경로를 시작한다.
ctx.rect(350, 350, 100, 100);//350, 350의 위치에 100, 100의 넓이를 가진 사각형을 그린다.
ctx.fillStyle = "red";//사각형을 red로 채운다.
ctx.fill();//사각형을 채운다.

