gsap.from("#welcome-inner",{
    y: "-80%",
    duration: 1.5,
    delay: 0.2
})

gsap.from(".welcome>h1",{
    y: "80%",
    duration: 2,
    delay: 0.7
})

document.querySelector("button").addEventListener("click", function(){
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".counter-page").style.display = "flex";
    countdown();
})

var c = 3;
function countdown(){
    var ctimer = setInterval(function(){
        if (c>0){
            c--;
            document.querySelector("#cd").textContent = c;
            if (c<1){
                document.querySelector("#cd").textContent = "Go!";
                runGame();
            }
        } else {
            clearInterval(ctimer);
        }
    }, 1000);
}

var hhssccrr = 0;
    
function runGame(){
    document.querySelector(".counter-page").style.display = "none";
    document.querySelector("#main").style.display = "flex";
    var timer = 60;
    var score = 0;
    var hitNumber;

function getNewHit(){
    hitNumber = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitNumber;
}
function makeBubble(){
    var clutter = "";

for(var i = 1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble flex">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    document.querySelector("#timeinterval").style.color = "#2c3333";
    var rtimer = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timeinterval").textContent = timer;
            if (timer<=10){
                document.querySelector("#timeinterval").style.color = "red";
            }
        } else {
            clearInterval(rtimer);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1> <button> Replay? </button>`;
            document.querySelector("#pbtm>h1").style.color = "black";
            document.querySelector("#pbtm>h1").style.fontSize = "2rem";
            document.querySelector("#pbtm>button").style.width = "90px";
            document.querySelector("#pbtm>button").style.height = "40px";
            document.querySelector("#pbtm>button").style.backgroundColor = "#2C3333";
            document.querySelector("#pbtm>button").style.borderRadius = "5px";
            document.querySelector("#pbtm>button").style.border = "none";
            document.querySelector("#pbtm>button").style.cursor = "pointer";
            document.querySelector("#pbtm>button").addEventListener("click", function(){
                if (score>hhssccrr){
                    hhssccrr = score;
                    // score = 0;
                    document.querySelector("#hscr").textContent = hhssccrr;
                    document.querySelector("#scoreval").textContent = 0;
                    runGame();
                } else {
                    // score = 0;
                    document.querySelector("#scoreval").textContent = 0;
                    runGame();
                }
                
            })
            
        }
    }, 1000);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function clickAndPlay(){
    document.querySelector("#pbtm").addEventListener("click", function(details){
        var clickedNum = Number(details.target.textContent);
        if (hitNumber == clickedNum){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
}

clickAndPlay();
runTimer();
makeBubble();
getNewHit();
}