/*
const images = [
  "0.jpg","1.jpg","2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector(".background-img");

bgImage.src = `/image/${chosenImage}`;
*/

const bgImage = document.querySelector(".background-img");

const width = window.innerWidth;
const height = window.innerHeight;

// 랜덤 이미지를 가져와 배경으로 설정
  bgImage.src = `https://picsum.photos/${width}/${height}`;