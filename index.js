let songs = [
    {IMG:"./Img/download.jpeg",
    songName:"Arabic_Kuthu",
    artist: "Anirudh Ravichander",
    Music: "./Music/Arabic_Kuthu_Video_Song_Beast_Thalapathy_Vijay_Pooja_He_KUN5Uf9mObQ_140.mp3",
    BGcolur:"radial-gradient( circle farthest-corner at 10% 20%,  rgba(162,102,246,1) 0%, rgba(203,159,249,1) 90% )"},

    {IMG:"./Img/chellama.jpeg",
    songName:"_Chellamma_",
    artist: "Anirudh Ravichander",
    Music: "./Music/Doctor_Chellamma_Video_Sivakarthikeyan_Anirudh_Ravichan_DV7nV9W7y-0_140.mp3",
    BGcolur:"./Bgimg/27537.png"},

    {IMG:"./Img/praivate party.jpeg",
    songName:"Private_Party",
    artist: "Anirudh Ravichander",
    Music: "./Music/Don_Private_Party_Video_Sivakarthikeyan_Priyanka_Mohan__SPmec1w1sXU_140.mp3",
    BGcolur:"rgba(177,173,219,1) 11.2%"}  
    ]

// controls
let playtButton = document.querySelector("#play")
let paushButton = document.querySelector("#paush")
let previusButton = document.querySelector("#prev")
let nextButton = document.querySelector("#next")
let muteBotton = document.querySelector("#mute")
let volumeBotton = document.querySelector(".volume")

//others
let image = document.querySelector("img")
let songTitle = document.querySelector("#title")
let artistTitle = document.querySelector("#artist")
let songduration = document.querySelector("input")
let audiosrc = document.querySelector("audio")

let runningTime = document.querySelector("#runningTime")
let songlength = document.querySelector("#songlength")




let currentSong = 0;


window.addEventListener("DOMContentLoaded",()=>{
    let Song = songs[currentSong];
    image.src = Song.IMG
    songTitle.innerText = Song.songName;
    artistTitle.innerText = Song.artist;
    audiosrc.src = Song.Music;
   

});

function Song(newSong) {
    let Song = songs[newSong]
    image.src = Song.IMG;
    songTitle.innerText = Song.songName;
    artistTitle.innerText = Song.artist;
    audiosrc.src = Song.Music;
}



// pause and play button
playtButton.addEventListener("click",()=>{
    audiosrc.play()
    playtButton.style.display = "none"
    paushButton.style.display = "block"

    time()
})

paushButton.addEventListener("click",()=>{
    audiosrc.pause()
    paushButton.style.display = "none"
    playtButton.style.display = "block"
    time()

})

// fornext button

nextButton.addEventListener("click",()=>{
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    Song(currentSong)
    time()
});

// previbotton function 

previusButton.addEventListener("click",()=>{
    currentSong--;
    if (currentSong <0) {
        currentSong = songs.length -1;
    }
    Song(currentSong)
    time()
});


// for input range

songduration.addEventListener("input",()=>{
    audiosrc.currentTime = songduration.value
    audiosrc.play()
})


// for range movement
setInterval(()=>{
    songduration.value= audiosrc.currentTime
    if(audiosrc.currentTime == audiosrc.duration ){
        currentSong++;
        if (currentSong > songs.length - 1) {
            currentSong = 0;
        }
        Song(currentSong)
        audiosrc.play()
    }
},1000)


audiosrc.onloadedmetadata = function () {
    songduration.max = audiosrc.duration;
}






// for mute the volume

muteBotton.addEventListener("click",()=>{
    muteBotton.classList.toggle("active")

    if(muteBotton.classList.contains("active")){
        audiosrc.volume = 0
    }else {
        audiosrc.volume = 1.0
    }
})


// for assign a value to volume

volumeBotton.addEventListener("input",()=>{
    audiosrc.volume = volumeBotton.value 
})




// for song length

function time(){
    setInterval(()=>{
        show()
    },1000)
}

function show(){
    CurrenntMin = Math.floor(audiosrc.currentTime / 60)
    curretSec = Math.floor(audiosrc.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(audiosrc.duration / 60)
    durationSec = Math.floor(audiosrc.duration - (durationMin * 60))

    if(CurrenntMin < 10){
        CurrenntMin = "0" + CurrenntMin
    }
    if(curretSec < 10){
        curretSec = "0" + curretSec
    }
    if(durationMin < 10){
        durationMin = "0" + durationMin
    }
    if(durationSec < 10){
        durationSec = "0" + durationSec
    }
    runningTime.innerText = `${CurrenntMin}:${curretSec}`
    songlength.innerText = `${durationMin}:${durationSec}`
}








// function Song(newSong) {
//     const Song = songs[newSong]
//     image.src = songs[currentSong].IMG
//     songTitle.innerText = songs[currentSong].songName;
//     artistTitle.innerText = songs[currentSong].artist
//     audiosrc.src = songs[currentSong].Music;
// }