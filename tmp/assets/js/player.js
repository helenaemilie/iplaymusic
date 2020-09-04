"use strict";

var play = document.querySelector(".player-play_play");
var song = document.querySelector(".audio-song");
var pause = document.querySelector(".player-play_pause");
play.addEventListener("click", function () {
  console.log("click");
  song.play();
});
pause.addEventListener("click", function () {
  console.log("click");
  song.pause();
});
fetch("https://api.spotify.com/v1/browse/new-releases", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + myToken
  }
}).then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result);
  var section = document.querySelector("section");
  result.albums.items.forEach(function (item) {
    var div = document.createElement("div");
    div.classList.add("albums-featured_images");
    var img = document.createElement("img");
    img.classList.add("albums-featured_img");
    img.setAttribute("data-id", item.id);
    img.src = "https://via.placeholder.com/150";
    img.setAttribute("data-src", item.images[0].url); //img.src = item.images[0].url

    div.appendChild(img);
    section.appendChild(div);
    img.addEventListener("click", function () {
      console.log(event.target.dataset.id);
      var clickId = event.target.dataset.id;
    });
  });
});
//# sourceMappingURL=player.js.map
