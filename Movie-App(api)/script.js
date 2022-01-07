// 본인 api_key 입력하고 인기도수능로 영화 정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=426834032958d768b5a54b5abade0bbd&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
// 포스터 이미지 앞 주소
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=426834032958d768b5a54b5abade0bbd&language=ko&query="'; // 뒤에 큰 따옴표를 넣어야 오류가 안남 (이유는 잘 모름)

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url); // url 주소로 요청해서 데이터를 전송받음, await는 다 받을때까지 대기
  const data = await res.json(); // 데이터 문자열을 제이슨으로 변환해서 data로 저장, await 로 대기
  console.log(data.results);
  영화보여주기(data.results); //필요한 영화 정보만 배열로 출력
}

// 검색창으로 검색했을때(이벤트)
form.addEventListener('submit', (e) => {
  e.preventDefault(); //원래 이벤트 제거, 폼 submit 이벤트는 서버로 입력데이터를 보냄
  const searchTerm = search.value; // 스파이더
  //   console.log(searchTerm);
  if (searchTerm && searchTerm !== '') {
    // 입력내용이 공백이 아닐 경우 처리
    getMovies(SEARCH_API + searchTerm);
    // console.log(SEARCH_API + searchTerm);
    search.value = ''; // 검색창 비우기
  } else {
    //공백이면
    window.location.reload(); // 새로고침
  }
});

// 영화정보들만 있는 함수
function 영화보여주기(movies) {
  main.innerHTML = ''; //처음엔 비우기

  movies.forEach((movie) => {
    const title = movie.title; //영화제목
    const poster_path = movie.poster_path; //영화이미지
    const vote_average = movie.vote_average; //평점표
    const overview = movie.overview; //영화 소개글

    const moveEl = document.createElement('div'); // div태그 생성
    moveEl.classList.add('movie'); //<div class="movie"></div>
    // console.log(moveEl);

    //변수를 넣기위해 백틱처리
    moveEl.innerHTML = `    
    <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
    />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${평점색선택(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>상세 보기</h3>
        ${overview}
    </div>
    `;
    main.appendChild(moveEl);
  });
}

function 평점색선택(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
