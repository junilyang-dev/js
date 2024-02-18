const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.fillStyle = "#f3cf98";//채우기 색 진베이지
ctx.fillRect(210-40, 200-40, 15, 100);//캔버스에 사각형을 그린다.
ctx.fillRect(350-40, 200-40, 15, 100);//캔버스에 사각형을 그린다.
ctx.fillRect(260-40, 200-40, 60, 200);//캔버스에 사각형을 그린다. 
ctx.fill();//채우기
ctx.beginPath();//경로를 시작한다.
ctx.fillStyle = "beige";//채우기 색
ctx.arc(250, 100, 50, 0, 2 * Math.PI);//원을 그린다.x축, y축, 크기, startAngle, endAngle
ctx.fill();//채우기
ctx.beginPath();//경로를 시작한다.
ctx.fillStyle = "black";//채우기 색
ctx.arc(260+10, 80, 8, Math.PI, 2 * Math.PI);//원을 그린다.x축, y축, 크기, startAngle, endAngle
ctx.arc(220+10, 80, 8, Math.PI, 2 * Math.PI);//원을 그린다.x축, y축, 크기, startAngle, endAngle
ctx.fill();//채우기
ctx.beginPath();//경로를 시작한다.
ctx.fillStyle = "red";//채우기 색
ctx.arc(240+10, 100, 8, 0, 1 * Math.PI);//원을 그린다.x축, y축, 크기, startAngle, endAngle
ctx.fill();//채우기