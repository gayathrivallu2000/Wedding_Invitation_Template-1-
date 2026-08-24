// Wedding Countdown

const weddingDate = new Date("December 12, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

// Photo Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});


lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// RSVP Form

const rsvpForm = document.getElementById("rsvpForm");

const rsvpMessage = document.getElementById("rsvpMessage");


rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const guestName =
        document.getElementById("guestName").value;

    const guestCount =
        document.getElementById("guestCount").value;

    const attendance =
        document.querySelector(
            'input[name="attendance"]:checked'
        ).value;


    if (attendance === "yes") {

        rsvpMessage.textContent =
            `Thank you, ${guestName}! We look forward to celebrating with you and your ${guestCount} guest(s). ❤️`;

    } else {

        rsvpMessage.textContent =
            `Thank you, ${guestName}! We will miss you and appreciate your response. ❤️`;

    }

    rsvpForm.reset();

});

// Mobile Navigation

const menuButton =
    document.getElementById("menuButton");

const menuPanel =
    document.getElementById("menuPanel");

const menuClose =
    document.getElementById("menuClose");

const menuLinks =
    document.querySelectorAll(".menu-links a");


menuButton.addEventListener("click", function () {

    menuPanel.classList.add("active");

});


menuClose.addEventListener("click", function () {

    menuPanel.classList.remove("active");

});


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuPanel.classList.remove("active");

    });

});

// Scroll Reveal Animation

const revealElements =
    document.querySelectorAll(
        ".couple-section, .events-section, .countdown-section, .gallery-section, .venue-section, .rsvp-section, .final-section"
    );

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});

// Wedding Music

const musicButton =
    document.getElementById("musicButton");

const weddingMusic =
    document.getElementById("weddingMusic");


musicButton.addEventListener("click", function () {

    if (weddingMusic.paused) {

        weddingMusic.play();

        musicButton.textContent = "🔊";

        musicButton.classList.add("playing");

    } else {

        weddingMusic.pause();

        musicButton.textContent = "🎵";

        musicButton.classList.remove("playing");

    }

});



// Tap to Enter

const welcomeScreen =
    document.getElementById("welcomeScreen");

const enterButton =
    document.getElementById("enterButton");

enterButton.addEventListener("click", function () {

    // Hide welcome screen
    welcomeScreen.classList.add("hide");

    // Start wedding music
    weddingMusic.play()
        .then(function () {

            musicButton.textContent = "🔊";

            musicButton.classList.add("playing");

        })
        .catch(function () {

            console.log("Music could not start.");

        });

});