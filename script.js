// ============================================================
// BIRTHDAY SURPRISE WEBSITE - COMPLETE SCRIPT
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // GET HTML ELEMENTS
    // ========================================================

    const openGift = document.getElementById("openGift");
    const welcomePage = document.getElementById("welcomePage");
    const birthdayPage = document.getElementById("birthdayPage");

    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    const celebrateBtn = document.getElementById("celebrate");

    const slide = document.getElementById("slide");

    const currentDate = document.getElementById("currentDate");
    const currentTime = document.getElementById("currentTime");


    // ========================================================
    // CHECK IMPORTANT ELEMENTS
    // ========================================================

    console.log("Birthday website loaded.");

    console.log("Open Gift:", openGift);
    console.log("Welcome Page:", welcomePage);
    console.log("Birthday Page:", birthdayPage);


    if (!openGift) {
        console.error("ERROR: #openGift was not found.");
        return;
    }

    if (!welcomePage) {
        console.error("ERROR: #welcomePage was not found.");
        return;
    }

    if (!birthdayPage) {
        console.error("ERROR: #birthdayPage was not found.");
        return;
    }


    // ========================================================
    // PHOTO SLIDESHOW
    // ========================================================

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


    function changePhoto() {

        if (!slide) {
            console.warn("Slideshow image #slide not found.");
            return;
        }

        current++;

        if (current >= photos.length) {
            current = 0;
        }

        slide.style.opacity = "0";

        setTimeout(function () {

            slide.src = photos[current];

            slide.style.opacity = "1";

        }, 500);

    }


    if (slide) {

        setInterval(changePhoto, 3000);

    }


    // ========================================================
    // MUSIC
    // ========================================================


    function playMusic() {

        if (!music) {
            console.warn("Music element #music not found.");
            return;
        }

        const playPromise = music.play();

        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    console.log(
                        "Birthday music started successfully."
                    );

                    if (musicBtn) {
                        musicBtn.innerHTML =
                            "⏸ Pause Music";
                    }

                })
                .catch(function (error) {

                    console.log(
                        "Music could not start:",
                        error
                    );

                    if (musicBtn) {
                        musicBtn.innerHTML =
                            "🎵 Play Music";
                    }

                });

        }

    }


    // ========================================================
    // MUSIC BUTTON
    // ========================================================

    if (musicBtn && music) {

        musicBtn.addEventListener(
            "click",
            function () {

                if (music.paused) {

                    playMusic();

                } else {

                    music.pause();

                    musicBtn.innerHTML =
                        "🎵 Play Music";

                }

            }
        );


        // Music started
        music.addEventListener(
            "play",
            function () {

                musicBtn.innerHTML =
                    "⏸ Pause Music";

            }
        );


        // Music paused
        music.addEventListener(
            "pause",
            function () {

                if (!music.ended) {

                    musicBtn.innerHTML =
                        "🎵 Play Music";

                }

            }
        );


        // Music ended
        music.addEventListener(
            "ended",
            function () {

                musicBtn.innerHTML =
                    "🎵 Play Music";

            }
        );

    }


    // ========================================================
    // CONFETTI
    // ========================================================

    function blastConfetti() {

        // Check whether confetti library loaded
        if (typeof confetti !== "function") {

            console.warn(
                "Confetti library is not available."
            );

            return;

        }


        confetti({

            particleCount: 250,

            spread: 180,

            origin: {
                y: 0.6
            }

        });

    }


    // ========================================================
    // FIREWORKS
    // ========================================================

    function fireworks() {

        if (typeof confetti !== "function") {
            return;
        }


        const duration = 3000;

        const animationEnd =
            Date.now() + duration;


        const interval =
            setInterval(function () {

                if (Date.now() > animationEnd) {

                    clearInterval(interval);

                    return;

                }


                // LEFT SIDE
                confetti({

                    particleCount: 5,

                    angle: 60,

                    spread: 55,

                    origin: {
                        x: 0
                    }

                });


                // RIGHT SIDE
                confetti({

                    particleCount: 5,

                    angle: 120,

                    spread: 55,

                    origin: {
                        x: 1
                    }

                });


            }, 180);

    }


    // ========================================================
    // CELEBRATE BUTTON
    // ========================================================

    if (celebrateBtn) {

        celebrateBtn.addEventListener(
            "click",
            function () {

                blastConfetti();

                setTimeout(
                    blastConfetti,
                    400
                );

                setTimeout(
                    blastConfetti,
                    800
                );

                fireworks();

            }
        );

    }


    // ========================================================
    // OPEN MY SURPRISE
    // ========================================================
    // IMPORTANT:
    // This is deliberately kept independent from music.
    // Even if music fails, the birthday page will open.
    // ========================================================

    openGift.addEventListener(
        "click",
        function () {

            console.log(
                "OPEN MY SURPRISE CLICKED!"
            );


            // ------------------------------------------------
            // START MUSIC
            // ------------------------------------------------
            // This happens directly inside the button click,
            // which gives the browser permission to play it.
            // ------------------------------------------------

            if (music) {

                playMusic();

            }


            // ------------------------------------------------
            // Fade welcome page
            // ------------------------------------------------

            welcomePage.style.opacity = "0";


            // ------------------------------------------------
            // After fade
            // ------------------------------------------------

            setTimeout(
                function () {

                    // Hide welcome page
                    welcomePage.style.display =
                        "none";


                    // Show birthday page
                    birthdayPage.style.display =
                        "block";


                    // Start invisible
                    birthdayPage.style.opacity =
                        "0";


                    // Fade birthday page in
                    setTimeout(
                        function () {

                            birthdayPage.style.opacity =
                                "1";

                        },
                        50
                    );


                    // ------------------------------------------------
                    // Celebration
                    // ------------------------------------------------

                    blastConfetti();


                    setTimeout(
                        blastConfetti,
                        300
                    );


                    setTimeout(
                        blastConfetti,
                        700
                    );


                    fireworks();


                },
                800
            );

        }
    );


    // ========================================================
    // FLOATING HEARTS
    // ========================================================

    function createHeart() {

        const heart =
            document.createElement("div");


        heart.className =
            "heart";


        heart.innerHTML =
            "❤️";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";


        document.body.appendChild(heart);


        setTimeout(
            function () {

                heart.remove();

            },
            9000
        );

    }


    setInterval(
        createHeart,
        400
    );


    // ========================================================
    // FLOATING BALLOONS
    // ========================================================

    const balloons = [
        "🎈",
        "🎉",
        "🎀",
        "💖"
    ];


    function createBalloon() {

        const balloon =
            document.createElement("div");


        balloon.className =
            "balloon";


        balloon.innerHTML =
            balloons[
                Math.floor(
                    Math.random() *
                    balloons.length
                )
            ];


        balloon.style.left =
            Math.random() * 100 + "vw";


        balloon.style.animationDuration =
            (8 + Math.random() * 6) + "s";


        balloon.style.fontSize =
            (30 + Math.random() * 25) + "px";


        document.body.appendChild(balloon);


        setTimeout(
            function () {

                balloon.remove();

            },
            15000
        );

    }


    setInterval(
        createBalloon,
        700
    );


    // ========================================================
    // FLOATING BIRTHDAY MESSAGES
    // ========================================================

    const wishes = [

        "🎂 Happy Birthday!",

        "💖 Stay Blessed!",

        "🌸 Keep Smiling!",

        "🎉 Enjoy Your Day!"

    ];


    setInterval(
        function () {

            const msg =
                document.createElement("div");


            msg.innerHTML =
                wishes[
                    Math.floor(
                        Math.random() *
                        wishes.length
                    )
                ];


            msg.style.position =
                "fixed";


            msg.style.left =
                Math.random() * 80 + "vw";


            msg.style.bottom =
                "0";


            msg.style.color =
                "white";


            msg.style.fontWeight =
                "bold";


            msg.style.fontSize =
                "22px";


            msg.style.opacity =
                "0.9";


            msg.style.transition =
                "4s";


            msg.style.zIndex =
                "9999";


            msg.style.pointerEvents =
                "none";


            document.body.appendChild(msg);


            setTimeout(
                function () {

                    msg.style.transform =
                        "translateY(-400px)";


                    msg.style.opacity =
                        "0";

                },
                100
            );


            setTimeout(
                function () {

                    msg.remove();

                },
                4200
            );


        },
        2500
    );


    // ========================================================
    // LIVE DATE & TIME
    // ========================================================

    function updateClock() {

        const now =
            new Date();


        const date =
            now.toLocaleDateString(
                "en-IN",
                {
                    weekday: "long",

                    day: "numeric",

                    month: "long",

                    year: "numeric"
                }
            );


        const time =
            now.toLocaleTimeString(
                "en-IN",
                {
                    hour: "2-digit",

                    minute: "2-digit",

                    second: "2-digit"
                }
            );


        if (currentDate) {

            currentDate.innerHTML =
                "📅 " + date;

        }


        if (currentTime) {

            currentTime.innerHTML =
                "🕒 " + time;

        }

    }


    updateClock();


    setInterval(
        updateClock,
        1000
    );


    // ========================================================
    // TWINKLING STARS
    // ========================================================

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const star =
            document.createElement("div");


        star.className =
            "star";


        star.innerHTML =
            "✨";


        star.style.left =
            Math.random() * 100 + "vw";


        star.style.top =
            Math.random() * 100 + "vh";


        star.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(star);

    }


    // ========================================================
    // FINISHED
    // ========================================================

    console.log(
        "All birthday website features initialized successfully."
    );

});