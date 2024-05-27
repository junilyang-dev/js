const btnPlay = document.getElementById("btnPlay");
const chooseMaxNum = document.getElementById("chooseMaxNum");
const chooseNum = document.getElementById("chooseNum");
const randomNm = document.getElementById("randomNm");
const result = document.getElementById("result");

function buttonEventHandler() {
  
  let chooseMaxValue = chooseMaxNum.value;
  let chooseNumValue = chooseNum.value;
  if(chooseMaxValue === "") {
    alert("choose Maxnumber!!");
    chooseMaxNum.focus();
    return;
  }
  if(chooseNumValue === "") {
    chooseNum.focus();
    alert("choose number!!");
    return;
  }
  randomNm.style.visibility ='visible';
  result.style.visibility ='visible';
  let random = Math.floor(Math.random() * (chooseMaxValue * 1 + 1));
  randomNm.innerText = `You chose: ${chooseNumValue}, the machine chose: ` + random;
  if(chooseNumValue * 1 === random * 1) {
    result.innerText = "You won!";
  }else{
    result.innerText = "You lost!";
  }
}

btnPlay.addEventListener("click",buttonEventHandler);