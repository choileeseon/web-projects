const API_URL =
  'https://api.themoviedb.org/3/discover/tv?api_key=426834032958d768b5a54b5abade0bbd&language=ko&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/tv?api_key=426834032958d768b5a54b5abade0bbd&language=ko&page=1&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getTv(API_URL);

async function getTv(url) {
  const res = await fetch(url);
  const data = await res.json();
  ShowTv(data.results);
  // console.log(data.results);
}

function ShowTv(tvs) {
  main.innerHTML = '';
  tvs.forEach((tv) => {
    const name = tv.name;
    const backdrop_path = tv.backdrop_path; //티비 이미지
    const vote_average = tv.vote_average; //평점표
    const overview = tv.overview;

    const tvEl = document.createElement('div');
    tvEl.classList.add('tv');

    tvEl.innerHTML = `
      <img
        src="${IMG_PATH + backdrop_path}"
        alt="${name}"
      />
      <div class="tv-info">
        <h3>${name}</h3>
        <span class="${voteColor(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>상세 보기</h3>
        ${overview}
      </div>
    `;
    main.appendChild(tvEl);
  });
}

function voteColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}

// 검색창으로 검색했을때(이벤트)
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
