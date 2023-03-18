(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const API_URl = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=1";
    const API_URl_2 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=2";
    const API_URl_3 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=3";
    const API_URl_4 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=4";
    const API_URl_5 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=5";
    const API_URl_6 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=6";
    const API_URl_7 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=7";
    const API_URl_8 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=8";
    const API_URl_9 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=9";
    const API_URl_10 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=10";
    const API_URl_11 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=11";
    const API_URl_12 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=12";
    const API_URl_13 = "https://api.themoviedb.org/3/movie/popular?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=13";
    const API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=9bf74e379025d3a5253c5928f78a4a11&language=en-US&page=1&include_adult=false&query=";
    getMovies(API_URl);
    async function getMovies(url) {
        const resp = await fetch(url);
        const respData = await resp.json();
        console.log(respData);
        showMovies(respData);
    }
    function getClassByVote(vote) {
        if (vote >= 7) return "green"; else if (vote > 5) return "orange"; else return "red";
    }
    function showMovies(data) {
        const moviesEl = document.querySelector(".movies");
        document.querySelector(".movies").innerHTML = "";
        data.results.forEach((movie => {
            const {title, poster_path, vote_average, overview, genre_ids, release_date, id} = movie;
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `\n    <div class="movie__cover-inner">\n      <img src="${movie.poster_path ? IMG_PATH + poster_path : "https://i.pinimg.com/originals/bf/7a/3b/bf7a3b774d9dde18953fbea669a2a23a.jpg"}" alt="" class="movie_cover">\n      <div class="movie__cover--darkened"></div>\n    </div>\n    <div class="movie__info">\n      <div class="movie__title">${movie.title}</div>\n      <div class="movie__category"></div>\n      <div class="movie__average movie__average--${getClassByVote(movie.vote_average)}">${movie.vote_average.toFixed(1)}</div>\n    </div>\n        `;
            moviesEl.appendChild(movieEl);
        }));
    }
    const script_form = document.querySelector(".search-form");
    const search = document.querySelector(".search-form__input");
    script_form.addEventListener("submit", (e => {
        e.preventDefault();
        const apiSearch = `${API_URL_SEARCH}${search.value}`;
        if (search.value) {
            getMovies(apiSearch);
            search.value = "";
        }
    }));
    const first = document.getElementById("1");
    const second = document.getElementById("2");
    const third = document.getElementById("3");
    const fourth = document.getElementById("4");
    const fifth = document.getElementById("5");
    const sixth = document.getElementById("6");
    const seventh = document.getElementById("7");
    const eighth = document.getElementById("8");
    const ninth = document.getElementById("9");
    const tenth = document.getElementById("10");
    const eleventh = document.getElementById("11");
    const twelfth = document.getElementById("12");
    const thirteenth = document.getElementById("13");
    var buttons = document.querySelectorAll(".page-number");
    buttons.forEach((function(button) {
        button.addEventListener("click", (function(e) {
            e.preventDefault();
            var activeButton = document.querySelector(".page-number.active");
            if (activeButton) activeButton.classList.remove("active");
            button.classList.add("active");
        }));
    }));
    first.addEventListener("click", (function firstFn(e) {
        e.preventDefault();
        getMovies(API_URl);
    }));
    second.addEventListener("click", (function secondFn(e) {
        e.preventDefault();
        getMovies(API_URl_2);
    }));
    third.addEventListener("click", (function thirdFn(e) {
        e.preventDefault();
        getMovies(API_URl_3);
    }));
    fourth.addEventListener("click", (function fourthFn(e) {
        e.preventDefault();
        getMovies(API_URl_4);
    }));
    fifth.addEventListener("click", (function fifthFn(e) {
        e.preventDefault();
        getMovies(API_URl_5);
    }));
    sixth.addEventListener("click", (function sixthFn(e) {
        e.preventDefault();
        getMovies(API_URl_6);
    }));
    seventh.addEventListener("click", (function seventhFn(e) {
        e.preventDefault();
        getMovies(API_URl_7);
    }));
    eighth.addEventListener("click", (function eighthFn(e) {
        e.preventDefault();
        getMovies(API_URl_8);
    }));
    ninth.addEventListener("click", (function ninthFn(e) {
        e.preventDefault();
        getMovies(API_URl_9);
    }));
    tenth.addEventListener("click", (function tenthFn(e) {
        e.preventDefault();
        getMovies(API_URl_10);
    }));
    eleventh.addEventListener("click", (function eleventhFn(e) {
        e.preventDefault();
        getMovies(API_URl_11);
    }));
    twelfth.addEventListener("click", (function twelfthFn(e) {
        e.preventDefault();
        getMovies(API_URl_12);
    }));
    thirteenth.addEventListener("click", (function thirteenthFn(e) {
        e.preventDefault();
        getMovies(API_URl_13);
    }));
    const searchButton = document.querySelector(".search-form__btn");
    searchButton.addEventListener("click", (function showSearch() {
        script_form.classList.toggle("_active");
    }));
    window["FLS"] = true;
    isWebp();
})();