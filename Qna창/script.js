// v 버튼을 클릭했을때 active클래스를 객체(.faq)에 준다.
const toggles = document.querySelectorAll('.faq-toggle');

// 하나의 버튼을 매개변수로 
toggles.forEach((toggle)=>{
    // 모든 토글에 클릭시 상위객체 (.parentNode)를 찾아서 active클래스를 토글
    toggle.addEventListener('click',(e)=>{
        toggle.parentNode.classList.toggle('active'); //클릭한태그의 부모태그에 active추가 or 제거
        // console.log(toggle.parentNode);
        // 클래스 active가 있으면 제거,없으면 추가 
    });
});