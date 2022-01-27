// alert('!!');

// 사용할 객체를 상수로
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
//id선택시 getElementById를 사용('id') 그 외 querySelector
const body = document.getElementById('gradient');

// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');
// //이벤트 리스너 달기
// button.addEventListener('click', set); //버튼을 클릭하면 셋실행

function set() {
  body.style.backgroundColor =
    'linear-gradient(to left,' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
