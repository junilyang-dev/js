const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.fillRect(200, 200, 50, 200);//캔버스에 사각형을 그린다.
ctx.fillRect(400, 200, 50, 200);//캔버스에 사각형을 그린다.
ctx.fillRect(300, 300, 50, 100);//캔버스에 사각형을 그린다.
ctx.fillRect(200, 200, 200, 20);//캔버스에 사각형을 그린다.
ctx.moveTo(200, 200);//200,200으로 포인터 이동
ctx.lineTo(325, 100);//325,100으로 선을 그리며 포인터 이동
ctx.lineTo(450, 200);//450,200으로 선을 그리며 포인터 이동
ctx.fill();//채우기
