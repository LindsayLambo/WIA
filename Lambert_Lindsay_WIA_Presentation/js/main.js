// JavaScript Document

var myPlayer = videojs('beach-video.mp4');

videojs("beach-video.mp4").ready(function(){

var myPlayer = this;

  // Start playing the video...
  	myPlayer.play();
  
  // Setting the time property on the Video.js player...
	myPlayer.currentTime(120);

});