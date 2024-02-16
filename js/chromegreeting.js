const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
//const loginButton = loginForm.querySelector('button');
const greeting = document.getElementById('greeting');
const HIDDEN_CLASSNAME = 'hidden';

function onLoginBtnClick() {
  const username = loginInput.value;//input의 value값을 username에 저장
  console.log(username);
}

//loginButton.addEventListener('click', onLoginBtnClick);
loginForm.addEventListener('submit', onLoginSubmit);//submit이벤트가 발생하면 onLoginSubmit함수 실행
function onLoginSubmit(event) {
  event.preventDefault();//이벤트가 발생했을때 기본동작을 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);//loginForm의 classList에 hidden을 추가한다.
  const username = loginInput.value;
  localStorage.setItem("username", username);//local storage에 저장
  //greeting.innerText = "Hello " + username;
  printGreeting(username);//printGreeting함수 실행
}

function printGreeting(username) {
  greeting.innerText = `Hello ${username}`;//greeting에 Hello username을 출력
  greeting.classList.remove(HIDDEN_CLASSNAME)//greeting에 hidden을 제거
}

const savedUsername = localStorage.getItem("username");//local storage에서 username을 가져온다.
if (savedUsername === null) {//savedUsername이 null이면

} else {//savedUsername이 null이 아니면
  loginForm.classList.add(HIDDEN_CLASSNAME);//loginForm에 hidden을 추가
  printGreeting(savedUsername);//printGreeting함수 실행
}
