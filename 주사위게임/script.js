// alert('테스트');

//상수 const로 태그 객체를 저장
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

img1.setAttribute('src', 'images/dice6.png');
img2.setAttribute('src', 'images/dice6.png');

// 랜덤숫자를 만들어서 그 숫자값의 주사위를 출력한다.
// 변수 let (자바스크림트는 타입이 필요없음)
//Math.random() : 0~1사이의 수많은 실수들 -> floor로 소수점 버리기
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;

console.log(n1);
console.log(n2);

img1.setAttribute('src', 'images/dice' + n1 + '.png');
img2.setAttribute('src', 'images/dice' + n2 + '.png');

if (n1 > n2) {
  h1.textContent = '👌Player1 Wins';
} else if (n2 > n1) {
  h1.textContent = 'Player2 Wins👌';
} else {
  h1.textContent = 'Draws!😒';
}
