const clock = document.querySelector("h2#clock");

function getTime() {//현재 시간을 반환하는 함수
  const date = new Date();//현재 시간을 가져온다.
  const minutes = date.getMinutes();//분을 가져온다.
  const hours = date.getHours();//시간을 가져온다.
  const seconds = date.getSeconds();//초를 가져온다.
clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;//시간을 출력한다.
}
setInterval(getTime, 1000);//1초마다 getTime 함수를 실행한다.
