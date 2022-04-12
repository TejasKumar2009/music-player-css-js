
// Initlalizing DOM Elements
playing_gif = document.querySelector(".playing-gif")

// Initlaliz Variables
audioElement = new Audio("songs/1.mp3")

// Listen to events
masterPlay.addEventListener('click', ()=>{
   if (audioElement.paused || audioElement <=0){
   masterPlay.classList.remove('fa-play')
   masterPlay.classList.add('fa-pause')
   audioElement.play()
   
   playing_gif.style.opacity = 1
}
   else{
      masterPlay.classList.remove('fa-pause')
      masterPlay.classList.add('fa-play')
      audioElement.pause()      
      playing_gif.style.opacity = 0
}
})

audioElement.addEventListener('timeupdate', ()=>{
   // Update Seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
   seekbar.value = progress 
})

seekbar.addEventListener('change', ()=>{
   audioElement.currentTime = seekbar.value*audioElement.duration/100
})
