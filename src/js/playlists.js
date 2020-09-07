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
        div.classList.add("playlist-slider");
        let img = document.createElement("img")
        img.classList.add("playlist-active_player")
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
            let albumsContainer = document.querySelector(".albums-content")
            albumsContainer.innerHTML = ""
            data.tracks.items.forEach (item => {
                let div = document.createElement("div")
                div.className = "albums-text"
                div.innerHTML = `
                <div class="albums-play">
                        <ion-icon class="albums-play_icon" name="play-sharp"></ion-icon>
                    </div>
                        <div class="albums-text_container">
                            <p class="albums-text_title">${item.track.name}</p>
                            <p class="albums-text_artist">${item.track.artists[0].name}</p>
                        </div>
                        <div class="song-time"><p>${millisToMinutesAndSeconds(item.track.duration_ms)}</p></div>
                    </div>
                </div>
                `
                albumsContainer.appendChild(div);

                function millisToMinutesAndSeconds(millis) {
                    var minutes = Math.floor(millis / 60000);
                    var seconds = ((millis % 60000) / 1000).toFixed(0);
                    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                }
            })
        })
    })
    })
})