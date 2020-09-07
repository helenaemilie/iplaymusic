"use strict";

fetch("https://api.spotify.com/v1/browse/categories", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + myToken
  }
}).then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result);
  var article = document.querySelector("article");
  result.categories.items.forEach(function (item) {
    var button = document.createElement("button");
    button.classList.add("categories-button");
    var div = document.createElement("div");
    div.classList.add("categories-dropdown");
    div.setAttribute("data-id", item.id);
    button.appendChild(div);
    article.appendChild(div);
    button.addEventListener("click", function () {
      console.log(event.target.dataset.id);
      var clickId = event.target.dataset.id;
    });
  });

  function categoriesOpen() {
    document.getElementById("categoriesDrop").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches('.categories-button')) {
      var dropdowns = document.getElementsByClassName("categories-dropdown");
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
//# sourceMappingURL=dropdown.js.map
