const video = document.getElementById("video");

const yesHotspot = document.getElementById("yesHotspot");
const noHotspot = document.getElementById("noHotspot");

let currentVideo = "A";


// =========================
// SHOW / HIDE CHOICES
// =========================

function hideChoices() {
    yesHotspot.style.display = "none";
    noHotspot.style.display = "none";
}

function showChoices() {
    yesHotspot.style.display = "block";
    noHotspot.style.display = "block";
}


// =========================
// WATCH VIDEO TIME
// =========================

video.addEventListener("timeupdate", function () {

    // Always hide choices first
    hideChoices();


    // =========================
    // A VIDEO
    // =========================

    if (currentVideo === "A") {

        // Choices appear from 10 to 15 seconds
        if (
            video.currentTime >= 10 &&
            video.currentTime <= 15
        ) {

            showChoices();

        }

    }

});


// =========================
// YES CLICK
// =========================

yesHotspot.addEventListener("click", function () {

    if (currentVideo === "A") {

        currentVideo = "B";

        hideChoices();

        video.src = "videos/B.mp4";

        video.load();

        video.play();

    }

});


// =========================
// NO CLICK
// =========================

noHotspot.addEventListener("click", function () {

    if (currentVideo === "A") {

        currentVideo = "C";

        hideChoices();

        video.src = "videos/C.mp4";

        video.load();

        video.play();

    }

});