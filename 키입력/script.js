//입력할 태그 객체
const insert = document.getElementById('insert');

//키 입력 이벤트 ? 윈도우창에 이벤트 발생
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
<div class="key">
    ${e.key}
    <small>event.key</small>
</div>

<div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${e.keyCode}    
    <small>event.code</small>
</div>
    `;
});

window.addEventListener('click',(e) => {
    console.log(`클릭한 좌표 : ( ${e.clientX}px, ${e.clientY}px )`);
});