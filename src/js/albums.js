fetch("https://api.spotify.com/v1/browse/featured-playlists?country=EG&locale=eg_EG", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + myToken
    }
})

.then(response => response.json())
.then(result => {
    let section = document.querySelector("section")
    result.playlists.items.forEach(item => {
        console.log(item.id);
        let div = document.createElement("div");
        div.classList.add("albums-featured_images");
        let img = document.createElement("img")
        img.classList.add("albums-featured_img")
        img.setAttribute("data-id", item.id)
        img.src = item.images[0].url
        div.appendChild(img);
        section.appendChild(div);
        img.addEventListener("click", function(){
            console.log(event.target.dataset.id)
            let clickId = event.target.dataset.id

        fetch("https://api.spotify.com/v1/playlists/"+clickId, {
            method: "GET",
            headers: {
            "Authorization": "Bearer " + myToken
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let songContainer = document.querySelector("albums-text_container")
            songContainer.innerHTML = ""
            data.tracks.items.forEach (item => {
                let div = document.createElement("div")
                div.className = "albums-text_container"
                div.innerHTML = `
                <div class="albums-cover">
                    <img class="albums-img" src="/assets/img/shinedown-2018-attention-attention-cd.jpg">
                </div>
                <div class="albums-text_container">
                    <p class="albums-text_title">${item.track.name}</p>
                    <p class="albums-text_artist">${item.track.artists[0].name}</p>
                </div>
                <div class="song-time"><p>14 songs</p></div>
        </div>
                `
                songContainer.appendChild(div)
            })
        })
    })
    })
})