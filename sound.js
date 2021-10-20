

function playSound(){
    var myAudio = document.getElementById("myJam");
    if(myAudio.paused){
        myAudio.play();
    } else{
     myAudio.pause();
    }
};



 