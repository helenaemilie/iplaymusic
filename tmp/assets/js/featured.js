"use strict";

var offset = 0;

function loadItems(offset) {
  fetch("https://api.spotify.com/v1/browse/featured-playlists?country=EG&locale=eg_EG&offset=" + offset, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + myToken
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    var main = document.querySelector("main");
    result.playlists.items.forEach(function (item) {
      console.log("stop");
      var article = document.createElement("article");
      article.classList.add("featured-container");
      var img = document.createElement("img");
      img.classList.add("featured-img");
      img.src = item.images[0].url;
      article.appendChild(img);
      main.appendChild(article);
    });
  });
}

function triggerObserver(entries) {
  if (entries[0].IntersectionRatio <= 0) return;
  offset = offset + 2;
  loadItems(offset);
  console.log("pis");
}

var options = {
  threshold: 0
};
var io = new IntersectionObserver(triggerObserver, options);
io.observe(document.querySelector(".observeMe"));
//# sourceMappingURL=featured.js.map
