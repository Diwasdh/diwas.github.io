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

var firstsec= document.getElementById("section1");
var secondsec= document.getElementById("section2");
var lastscroll=0;

window.onscroll=function () {
    var st=window.pageYOffset||document.documentElement.scrollTop;
    if(st>lastscroll){
        secondsec.scrollIntoView({behavior : "smooth"});
    }
    else{
        firstsec.scrollIntoView({behavior:"smooth"});
    }
    lastscroll =st<=0?0:st;
  }