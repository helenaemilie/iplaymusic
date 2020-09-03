"use strict";

var songs = ["/assets/songs/neffex.mp3", "/assets/songs/biv.mp3", "/assets/songs/biv.mp3"];
var poster = ["/assets/img/neffex.jpg", "/assets/img/biv.jpg", "/assets/img/noah.jpg"];
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var song = new Audio();
var currentSong = 0;
window.onload = playSong;

function playSong() {
  song.src = songs[currentSong]; //set the source of 0th song 

  songTitle.textContent = songs[currentSong]; // set the title of song

  song.play();
}

function playOrPauseSong() {
  if (song.paused) {
    song.play();
    $("#play img").attr("src", "/assets/img/pause.png");
  } else {
    song.pause();
    $("#play img").attr("src", "/assets/img/play.png");
  }
}

song.addEventListener('timeupdate', function () {
  var position = song.currentTime / song.duration;
  fillBar.style.width = position * 100 + '%';
});

function next() {
  currentSong++;

  if (currentSong > 2) {
    currentSong = 0;
  }

  playSong();
  $("#play img").attr("src", "/assets/img/pause.png");
  $("#image img").attr("src", poster[currentSong]);
}

function pre() {
  currentSong--;

  if (currentSong < 0) {
    currentSong = 2;
  }

  playSong();
  $("#play img").attr("src", "/assets/img/pause.png");
  $("#image img").attr("src", poster[currentSong]);
}
//# sourceMappingURL=player.js.map
