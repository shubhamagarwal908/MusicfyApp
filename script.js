console.log("Hello World!!!");
//Variables Initializations
let songIndex=0;
let audioElement =new Audio('songs/5.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItems'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName: "Ranjha", filePath: "songs/0.mp3", coverPath: "covers/11.jpg"},
    {songName: "Closer", filePath: "songs/1.mp3", coverPath: "covers/12.jpg"},
    {songName: "Let Me Love You", filePath: "songs/2.mp3", coverPath: "covers/13.jpg"},
    {songName: "Naina Da Kya Kasoor", filePath: "songs/3.mp3", coverPath: "covers/14.jpg"},
    {songName: "Memories", filePath: "songs/4.mp3", coverPath: "covers/15.jpg"},
    {songName: "Khaab", filePath: "songs/5.mp3", coverPath: "covers/16.jpg"},
    {songName: "Qismat", filePath: "songs/6.mp3", coverPath: "covers/19.jpg"},
    {songName: "8 parche", filePath: "songs/7.mp3", coverPath: "covers/18.jpg"},
]

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
          gif.style.opacity=2;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdtae');
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        let songIndex=0;
       songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songIndex+=1;
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        // alert(masterSongName.innerText + " " + songIndex);
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        songIndex+=1;
    }
    // audioElement.src=`songs/${songIndex}.mp3`;
    // masterSongName.innerText=songs[songIndex].songName;
    //     audioElement.currentTime=0;
    //     audioElement.play();
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}) 