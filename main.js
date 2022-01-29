 function setup(){
     canvas = createCanvas(500,500);
     canvas.position(710,200);
     video = createCapture(VIDEO);
     video.hide();
 }

 function preload(){
    song = loadSound("music.mp3");
  }
 
  function draw(){
      image(video, 0, 0, 600, 500);
  }
 
  function Play(){
      song.play();
  }