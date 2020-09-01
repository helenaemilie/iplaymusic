fetch("https://api.spotify.com/v1/browse/featured-playlists?country=EG&locale=eg_EG", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + myToken
    }
})

.then(response => response.json())
.then(result => {
    let main = document.querySelector("main")
    console.log(result);
    result.playlists.items.forEach(item => {
        console.log(item.images[0].url);
        let article = document.createElement("article");
        article.classList.add("featured-container");
        let img = document.createElement("img")
        img.classList.add("featured-img")
        img.src = item.images[0].url
        article.appendChild(img);
        main.appendChild(article);
    })
})
