//var musics=document.getElementsByClassName('music');
//var audios=document.getElementsByClassName('audio');
//audios.onclick=function autoPlay(){
//	var audios=musics;
//	setTimeout(audios,1000);
//}
function autoPlay(){//自动播放
     var myAuto = document.getElementsByClassName('music');
     myAuto.src = '../game.IMG/财富自由.mp3';//MP3路径
     myAuto.play();
};
function pausePlay(){//暂停播放
  var myAuto = document.getElementsByClassName('music');
   myAuto.pause(); 
};
function createAuto(){
    var _id = $(".music");
    if (window.applicationCache) {
    	
         _id.html('<audio id="myaudio" src="" controls="controls" loop="false" hidden="true"></audio>')
            } else {
            _id.html('<embed src="" id="myaudio" style="display: none;"></embed>'); 
       }
 };
createAuto();
