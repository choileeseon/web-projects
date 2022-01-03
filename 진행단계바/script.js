// 객체 상수 만들기
const progress = document.getElementById('progress'); //막대기바
const prev = document.getElementById('prev'); //버튼이전
const next = document.getElementById('next'); //버튼다음

//서클 1234 들을 객체에 저장
const circles = document.querySelectorAll('.circle');

//단계 표시 변수
let currentActive = 1;

//다음버튼을 클릭했을때
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length; //다음버튼을 계속 눌러도 4이상 못가게
  }
  막대바업데이트();
});

//이전버튼을 클릭했을때
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1; //이전버튼을 계속 눌러도 1 이하는 X
  }
  막대바업데이트();
});

function 막대바업데이트() {
  circles.forEach((circle, idx) => {
    //객체와 인덱스 번호를 하나씩 정렬
    // console.log(circle, idx);
    if (idx < currentActive) {
      circle.classList.add('active'); //클래스 추가
    } else {
      circle.classList.remove('active'); //클래스 제거
    }
  });
  //막대바 업데이트
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; //circles.length - 1 : 1~2 한막대 2~3 둘 3~4 셋

  //이전버튼을 누를 수 있도록
  if (currentActive === 1) {
    //현재 상태가 1이면 이전버튼 사용못함
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true; //상태가 4이면 다음버튼 사용못함
  } else {
    prev.disabled = false; //그 이외는 전부 사용가능
    next.disabled = false;
  }
}
