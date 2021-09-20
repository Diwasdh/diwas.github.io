var i=0;
var text="Front-End Web Developer";
var speed=50;

function typewriter(){
    if(i<text.length){
        document.getElementById("typewriter").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}

