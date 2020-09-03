"use strict";

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
  fetch("https://api.spotify.com/v1/browse/new-releases", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + myToken
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result);
    var albumsContainer = document.querySelector(".albums-text_container");
    result.albums.items.forEach(function (item) {
      var div = document.createElement("div");
      div.className = "albums-text";
      div.innerHTML = "\n                <div class=\"albums-cover\">\n                        <img class=\"albums-img\" src=\"".concat(item.images[1].url, "\">\n                    </div>\n                        <div class=\"albums-text_container\">\n                            <p class=\"albums-text_title\">").concat(item.name, "</p>\n                            <p class=\"albums-text_artist\">").concat(item.artists[0].name, "</p>\n                        </div>\n                        <div class=\"song-number\"><p>").concat(item.total_tracks, "</p></div>\n                    </div>\n                </div>\n                ");
      albumsContainer.appendChild(div);
    });
  });
});
//# sourceMappingURL=albums.js.map
