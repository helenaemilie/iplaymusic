"use strict";

fetch("https://api.spotify.com/v1/browse/featured-playlists?country=EG&locale=eg_EG", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + myToken
  }
}).then(function (response) {
  return response.json();
}).then(function (result) {
  var main = document.querySelector("main");
  console.log(result);
  result.playlists.items.forEach(function (item) {
    console.log(item.images[0].url);
    var article = document.createElement("article");
    article.classList.add("featured-container");
    var img = document.createElement("img");
    img.classList.add("featured-img");
    img.src = item.images[0].url;
    article.appendChild(img);
    main.appendChild(article);
  });
});
//# sourceMappingURL=featured.js.map
