fetch("https://api.spotify.com/v1/browse/new-releases", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + myToken
    }
})

    .then(response => response.json())
    .then(result => {
        console.log(result)
        let section = document.querySelector("section")
        result.albums.items.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("albums-featured_images");
            let img = document.createElement("img")
            img.classList.add("albums-featured_img")
            img.setAttribute("data-id", item.id)
            img.src = "https://via.placeholder.com/150"
            img.setAttribute("data-src", item.images[0].url)
            //img.src = item.images[0].url
            div.appendChild(img);
            section.appendChild(div);
            img.addEventListener("click", function () {
                console.log(event.target.dataset.id)
                let clickId = event.target.dataset.id

            })
    })



fetch("https://api.spotify.com/v1/browse/new-releases", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + myToken
    }
})

    .then(response => response.json())
    .then(result => {
        console.log(result)
        let albumsContainer = document.querySelector(".albums-text_container")
        result.albums.items.forEach(item => {
            let div = document.createElement("div")
            div.className = "albums-text"
            div.innerHTML = `
                <div class="albums-cover">
                        <img class="albums-img" src="${item.images[1].url}">
                    </div>
                        <div class="albums-text_container">
                            <p class="albums-text_title">${item.name}</p>
                            <p class="albums-text_artist">${item.artists[0].name}</p>
                        </div>
                        <div class="song-number"><p>${item.total_tracks}</p></div>
                    </div>
                </div>
                `
            albumsContainer.appendChild(div);
        })
    })
    })