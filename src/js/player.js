let play = document.querySelector(".player-play_play")
let song = document.querySelector(".audio-song")
let pause = document.querySelector(".player-play_pause")

play.addEventListener("click",() => {
    console.log("click");
    song.play();
})
pause.addEventListener("click",() => {
    console.log("click");
    song.pause();
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
        let section = document.querySelector("section")
        result.albums.items.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("albums-featured_images");
            let img = document.createElement("img")
            img.classList.add("albums-featured_img")
            img.setAttribute("data-id", item.id)
            img.src = "https://via.placeholder.com/150"
            img.setAttribute("data-src", albums.images[0].url)
            //img.src = albums.images[0].url
            div.appendChild(img);
            section.appendChild(div);
            img.addEventListener("click", function () {
                console.log(event.target.dataset.id)
                let clickId = event.target.dataset.id

            })
    })
})