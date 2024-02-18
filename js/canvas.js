const canvas = document.querySelector("canvas");//canvas를 가져온다.
const ctx = canvas.getContext("2d");//2d캔버스를 가져온다.

canvas.width = 800;//canvas의 너비
canvas.height = 800;//canvas의 높이

ctx.moveTo(50, 50);//50,50으로 포인터 이동
ctx.lineTo(150, 50);//150,50으로 선을 그리며 포인터 이동 
ctx.lineTo(150, 150);//150,150으로 선을 그리며 포인터 이동
ctx.lineTo(50, 150);//50,150으로 선을 그리며 포인터 이동
ctx.lineTo(50, 50);//50,50으로 선을 그리며 포인터 이동
ctx.stroke();//선 그리기
//ctx.fill();//채우기
