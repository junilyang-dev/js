/*
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

*/ 
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//https://api.quotable.io/quotes?tags=inspirational
/*
fetch('https://api.quotable.io/random')
.then(response => response.json())
.then(data => {
  if (data.length > 0) {
    quote.innerText = `"${data.content}"`;
    quote.style.fontStyle = "italic";
    quote.style.fontSize = "1.2em";
    author.innerText = `- ${data.author}`;
    author.style.fontWeight = "bold";
    translateToKorean(`"${data.content}"- ${data.author}`);//번역
  } else {
    console.log('해당 태그의 명언이 없습니다.');
  }
})
.catch(error => console.error('API 호출 중 오류 발생:', error));

async function translateToKorean(englishQuote) {
  const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=' + encodeURIComponent(englishQuote));
  const data = await response.json();
  let krTrans = '';
  data[0].forEach(e=>{krTrans+=e[0]});
  let trans = document.createElement('p');
  trans.innerText = krTrans;
  document.getElementById("quote").appendChild(trans);
}
*/

async function translateToKorean(englishQuote) {
  const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=' + encodeURIComponent(englishQuote));
  const data = await response.json();
  let krTrans = '';
  data[0].forEach(e=>{krTrans+=e[0]});
  return krTrans;
}

// Quotable API로부터 영어 명언 가져오기
async function getEnglishQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return {quote: data.content,
          author: data.author};
}

// 명언 가져와서 한국어로 번역하기
async function getKoreanQuote(englishQuote) {
  
  const koreanQuote = await translateToKorean(englishQuote.quote);
  const koreanAuthor = await translateToKorean(englishQuote.author);
  return {quote: koreanQuote,
          author: koreanAuthor};
}

// 명언 가져와서 출력하기
async function displayQuotes() {
  //영어 명언 가져오기 return 값(object)-object.quote, object.author
  const englishQuote = await getEnglishQuote();
  //영어 명언 
  const koreanQuote = await getKoreanQuote(englishQuote);
  
  quote.innerText = `"${englishQuote.quote}"`;
  quote.style.fontStyle = "italic";
  quote.style.fontSize = "1.2em";
  
  author.innerText = `- ${englishQuote.author}`;
  author.style.fontWeight = "bold";
  
  let transLine = document.createElement('br');
  document.getElementById("quote").appendChild(transLine);
  
  let transQuote = document.createElement('span');
  transQuote.innerText = `"${koreanQuote.quote}"`;
  transQuote.style.fontStyle = "italic";
  transQuote.style.fontSize = "1.2em";
  document.getElementById("quote").appendChild(transQuote);
  
  let transAuthor = document.createElement('span');
  transAuthor.innerText = `- ${koreanQuote.author}`;
  transAuthor.style.fontWeight = "bold";
  document.getElementById("quote").appendChild(transAuthor);
}

// 호출
displayQuotes();
