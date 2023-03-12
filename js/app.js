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
    const API_KEY = "2a74575afamsh37cfe83865dbcacp108f04jsnf4261c2aedbf";
    const API_HOST = "imdb-top-100-movies.p.rapidapi.com";
    const API_URl = "https://imdb-top-100-movies.p.rapidapi.com/";
    getMovies(API_URl);
    async function getMovies(url) {
        const resp = await fetch(url, {
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": API_HOST
            }
        });
        const respData = await resp.json();
        console.log(respData);
        showMovies(respData);
    }
    function getClassByVote(vote) {
        if (vote >= 7) return "green"; else if (vote > 5) return "orange"; else return "red";
    }
    function showMovies(data) {
        const moviesEl = document.querySelector(".movies");
        data.forEach((movie => {
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `\n    <div class="movie__cover-inner">\n      <img src="${movie.image}" alt="" class="movie_cover">\n      <div class="movie__cover--darkened"></div>\n    </div>\n    <div class="movie__info">\n      <div class="movie__title">${movie.title}</div>\n      <div class="movie__category">${movie.genre}</div>\n      <div class="movie__average movie__average--${getClassByVote(movie.rating)}">${movie.rating}</div>\n    </div>\n        `;
            moviesEl.appendChild(movieEl);
        }));
    }
    window["FLS"] = true;
    isWebp();
})();