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
    div.classList.add("playlist-slider");
    var img = document.createElement("img");
    img.classList.add("playlist-active_player");
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
        var albumsContainer = document.querySelector(".albums-content");
        albumsContainer.innerHTML = "";
        data.tracks.items.forEach(function (item) {
          var div = document.createElement("div");
          div.className = "albums-text";
          div.innerHTML = "\n                <div class=\"albums-play\">\n                        <ion-icon class=\"albums-play_icon\" name=\"play-sharp\"></ion-icon>\n                    </div>\n                        <div class=\"albums-text_container\">\n                            <p class=\"albums-text_title\">".concat(item.track.name, "</p>\n                            <p class=\"albums-text_artist\">").concat(item.track.artists[0].name, "</p>\n                        </div>\n                        <div class=\"song-time\"><p>").concat(millisToMinutesAndSeconds(item.track.duration_ms), "</p></div>\n                    </div>\n                </div>\n                ");
          albumsContainer.appendChild(div);

          function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = (millis % 60000 / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
          }
        });
      });
    });
  });
});
//# sourceMappingURL=playlists.js.map
