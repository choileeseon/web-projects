//입력받는 창
const textarea = document.getElementById('textarea');
//태그들을 넣을 객체
const tagsEl = document.getElementById('tags');

//처음 시작시 커서를 입력창에
textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    // console.log(e.target.value); // 입력한 값
    createTags(e.target.value);
    //엔터 입력시
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''; //클리어(공백)
        },10); //시간 뒤에 1번 함수 실행
        randomSelect(); //랜덤 선택
    }
});

function randomSelect(){
    const times = 30; //시간을 바꿀수 있도록
    //계속 반복 함수
    const interval = setInterval(()=>{
        // 0.1초마다 실행됨
        const randomTag = 랜덤태그선택();
        하이라이트(randomTag);

        setTimeout(() => {
            하이라이트제거(randomTag)
        }, 100); // 0.1초 뒤에 하리아리트 제거
    },100); 

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag = 랜덤태그선택();
            하이라이트(randomTag);
        },100);
    },times * 100); // 시간뒤에 멈추기
}

function 랜덤태그선택(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag){
    tag.classList.add('highlight');
}
function 하이라이트제거(tag){
    tag.classList.remove('highlight');
}

function createTags(input){
    const tags = input
    .split(",")
    .filter((tag)=>tag.trim() !== '') //공백만 있는것 제거
    .map((tag)=>tag.trim());          //공백이 있을때 공백제거

    // console.log(tags);
    tagsEl.innerHTML = ''; // 안에 태그들 전부 삭제
    tags.forEach((tag)=>{
        const tagEl = document.createElement('span'); // JS 스판태그 만들기
        tagEl.classList.add('tag'); // 태그 클래스 추가
        tagEl.textContent = tag; // 글자 내용을 tag로 입력
        tagsEl.appendChild(tagEl); // tags에 자식태그로 입력
    });
}