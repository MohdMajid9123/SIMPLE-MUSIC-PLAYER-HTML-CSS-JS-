// my music data

const SongData = [
  {
    name: "majid-1",
    title: "Pop Song",
    artist: "John Dhoe",
  },
  {
    name: "majid-2",
    title: "Lyric Song",
    artist: "Mic Loren",
  },
  {
    name: "majid-3",
    title: "Ring Song",
    artist: "Harry Tom",
  },
];

//play button code

const playEl = document.querySelector("#play");
//target audio tag
const audioEl = document.querySelector("audio");
//target img
const imgEl = document.querySelector("img");
//target title
const titleEl = document.querySelector("#title");
// artist
const artistEl = document.querySelector("#artist");
//target preview button
const prevEl = document.querySelector("#prev");
//target next button
const nextEl = document.querySelector("#next");

//globel variable
let playValue = false;
let indexValue = 0;

// playMusic code

const playMusic = () => {
  playValue = true;
  playEl.classList.replace("fa-play", "fa-pause");
  imgEl.classList.add("anim");
  audioEl.play();
};

//pause music code
const pauseMusic = () => {
  playValue = false;
  playEl.classList.replace("fa-pause", "fa-play");
  imgEl.classList.remove("anim");
  audioEl.pause();
};

//play button code
playEl.addEventListener("click", () => {
  //ternary oprator
  playValue ? pauseMusic() : playMusic();
});

//get data from array object

const getArryData = (SongData) => {
  titleEl.innerText = SongData.title;
  artistEl.innerText = SongData.artist;
  imgEl.src = "image_only/" + SongData.name + ".png";
  audioEl.src = "song_mp3/" + SongData.name + ".mp3";
};
getArryData(SongData[indexValue]);

//next button code

nextEl.addEventListener("click", () => {
  indexValue = (indexValue + 1) % SongData.length;
  getArryData(SongData[indexValue]);
  playMusic();
});

//prev button code

prevEl.addEventListener("click", () => {
  indexValue = (indexValue - 1 + SongData.length) % SongData.length;
  getArryData(SongData[indexValue]);
  playMusic();
});
