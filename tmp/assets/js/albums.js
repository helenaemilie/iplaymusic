"use strict";

fetch("https://api.spotify.com/v1/browse/featured-playlists?country=EG&locale=eg_EG", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + myToken
  }
}).then(function (response) {
  return response.json();
}).then(function (result) {
  var section = document.querySelector("section");
  result.playlists.items.forEach(function (item) {
    console.log(item.id);
    var div = document.createElement("div");
    div.classList.add("albums-featured_images");
    var img = document.createElement("img");
    img.classList.add("albums-featured_img");
    img.setAttribute("data-id", item.id);
    img.src = item.images[0].url;
    div.appendChild(img);
    section.appendChild(div);
    img.addEventListener("click", function () {
      console.log(event.target.dataset.id);
      var clickId = event.target.dataset.id;
      fetch("https://api.spotify.com/v1/playlists/" + clickId, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + myToken
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        var songContainer = document.querySelector("albums-text_container");
        songContainer.innerHTML = "";
        data.tracks.items.forEach(function (item) {
          var div = document.createElement("div");
          div.className = "albums-text_container";
          div.innerHTML = "\n                <div class=\"albums-cover\">\n                    <img class=\"albums-img\" src=\"/assets/img/shinedown-2018-attention-attention-cd.jpg\">\n                </div>\n                <div class=\"albums-text_container\">\n                    <p class=\"albums-text_title\">".concat(item.track.name, "</p>\n                    <p class=\"albums-text_artist\">").concat(item.track.artists[0].name, "</p>\n                </div>\n                <div class=\"song-time\"><p>14 songs</p></div>\n        </div>\n                ");
          songContainer.appendChild(div);
        });
      });
    });
  });
});
//# sourceMappingURL=albums.js.map
