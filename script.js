// ----------------------------
// Photo Slideshow
// ----------------------------

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {

    current++;

    if(current >= photos.length){
        current = 0;
    }

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.src = photos[current];
        slide.style.opacity = 1;

    },500);

},3000);


// ----------------------------
// Music
// ----------------------------

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function(){

    if(music.paused){

        music.play();
        musicBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();
        musicBtn.innerHTML="🎵 Play Music";

    }

};


// ----------------------------
// Confetti
// ----------------------------

function blastConfetti(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

}



// Celebrate Button

document.getElementById("celebrate").onclick=function(){

    blastConfetti();

    setTimeout(blastConfetti,400);

    setTimeout(blastConfetti,800);

};


// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    heart.style.fontSize=
    (18+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,400);


// ----------------------------
// Floating Balloons
// ----------------------------

const balloons=["🎈","🎉","🎀","💖"];

function createBalloon(){

    const b=document.createElement("div");

    b.className="balloon";

    b.innerHTML=
    balloons[Math.floor(Math.random()*balloons.length)];

    b.style.left=Math.random()*100+"vw";

    b.style.animationDuration=
    (8+Math.random()*6)+"s";

    b.style.fontSize=
    (30+Math.random()*25)+"px";

    document.body.appendChild(b);

    setTimeout(()=>{
        b.remove();
    },15000);

}

setInterval(createBalloon,700);


// ----------------------------
// Firework Confetti
// ----------------------------

function fireworks(){

    var duration = 3000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function(){

        if(Date.now() > animationEnd){

            clearInterval(interval);
            return;

        }

        confetti({
            particleCount:5,
            angle:60,
            spread:55,
            origin:{x:0}
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:55,
            origin:{x:1}
        });

    },180);

}



// ----------------------------
// Floating Message
// ----------------------------

const wishes=[
"🎂 Happy Birthday!",
"💖 Stay Blessed!",
"🌸 Keep Smiling!",
"🎉 Enjoy Your Day!"
];

setInterval(()=>{

    const msg=document.createElement("div");

    msg.innerHTML=
    wishes[Math.floor(Math.random()*wishes.length)];

    msg.style.position="fixed";
    msg.style.left=Math.random()*80+"vw";
    msg.style.bottom="0";
    msg.style.color="white";
    msg.style.fontWeight="bold";
    msg.style.fontSize="22px";
    msg.style.opacity="0.9";
    msg.style.transition="4s";

    document.body.appendChild(msg);

    setTimeout(()=>{
        msg.style.transform="translateY(-400px)";
        msg.style.opacity="0";
    },100);

    setTimeout(()=>{
        msg.remove();
    },4200);

},2500);

// =========================
// Live Date & Time
// =========================

function updateClock() {

    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("currentDate").innerHTML = "📅 " + date;
    document.getElementById("currentTime").innerHTML = "🕒 " + time;
}

updateClock();
setInterval(updateClock, 1000);

// Welcome Page

const openGift = document.getElementById("openGift");
const welcomePage = document.getElementById("welcomePage");
const birthdayPage = document.getElementById("birthdayPage");

openGift.addEventListener("click", function () {

    welcomePage.style.opacity = "0";

    setTimeout(() => {

        welcomePage.style.display = "none";
        birthdayPage.style.display = "block";

        birthdayPage.style.opacity = "0";

        setTimeout(() => {
            birthdayPage.style.opacity = "1";
        }, 50);

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";

        blastConfetti();
        setTimeout(blastConfetti, 300);
        setTimeout(blastConfetti, 700);

        fireworks();

    }, 700);

});

// ----------------------------
// Twinkling Stars
// ----------------------------

for (let i = 0; i < 60; i++) {

    const star = document.createElement("div");

    star.className = "star";
    star.innerHTML = "✨";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(star);

}