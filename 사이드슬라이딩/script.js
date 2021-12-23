// 클릭하는 곳에 active생성하기

// 클래스 panel들을 모두 선택해 상수 panels에 담기
// querySelectorAll 여러개를 배열로 저장
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    //()이름없는 funtion=함수를 클릭하면 {}안을 실행한다
    removeActive();
    panel.classList.add('active'); /*패널에 active클래스를 추가*/
  });
});

// 모든 패널에 active 클래스 제거
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
