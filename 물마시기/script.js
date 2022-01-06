// 상수 정의
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// 작은컵을 마우스 클릭시 => 컵채우기 (full클래스)
smallCups.forEach((cup,idx)=>{
    // 작은컵에 클릭이벤트 달때 함수에 idx(인덱스번호) 매개변수
    cup.addEventListener('click',()=> 작은컵들채우기(idx));
});
// 시작할때 남은 물량 계산
큰컵채우기();

function 작은컵들채우기(idx){
    // 마지막 컵을 클릭했는데 이미 다 차있을 경우와 중간컵을 클릭했는데 다 차있을경우
    if(idx === 7 && smallCups[idx].classList.contains('.full')) idx--;
    else if (
        smallCups[idx].classList.contains('full') &&  //클릭한건 물이 차있고
        !smallCups[idx].nextElementSibling.classList.contains('full') //클릭한 옆에꺼는 물이 안차있고 
    ) {
        idx--;
    }
    //일반적인 경우 클릭한 컵 이하로는 다 full아니면 다 
    smallCups.forEach((cup,i)=>{
        if(i <= idx){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    큰컵채우기();

}

function 큰컵채우기(){
    // 물이 채워진 full 작은컵의 개수를 저장
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length; // 총 작은물컵의 개수
  
    if (fullCups === 0) { // 채운컵이 없을경우 퍼센트는 안보이고 높이가 0
      percentage.style.visibility = 'hidden';
      percentage.style.height = 0;
    } else { // 채운컵이 있으면 보이고 높이는 
      percentage.style.visibility = 'visible';
      percentage.style.height = `${(fullCups / totalCups) * 330}px`;
      percentage.textContent = `${(fullCups / totalCups) * 100}%`;
    }
  
    if (fullCups === totalCups) { // 모든 컵이 다 채워졌을경우 리메인은 안보이게 높이 0
      remained.style.visibility = 'hidden';
      remained.style.height = 0;
    } else {
      remained.style.visibility = 'visible';
      liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}