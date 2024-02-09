const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
//const loginButton = loginForm.querySelector('button');
const greeting = document.getElementById('greeting');
const HIDDEN_CLASSNAME = 'hidden';
function onLoginBtnClick(){
  const username = loginInput.value;
  console.log(username);
}


//loginButton.addEventListener('click', onLoginBtnClick);
loginForm.addEventListener(
  'submit',onLoginSubmit);
function onLoginSubmit(event){
  event.preventDefault();//이벤트가 발생했을때 기본동작을 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username",username);
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}