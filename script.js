/* ==================================
   GALIH PORTFOLIO - FINAL SCRIPT
================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       TYPING EFFECT
    ========================== */

    const typingElement = document.getElementById("typing");
    const text = "Galih Rizky Purnomo";

    let index = 0;

    function typeWriter() {
        if (!typingElement) return;

        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    /* ==========================
       KENALI SAYA BUTTON
    ========================== */

    const welcomeBtn = document.getElementById("welcomeBtn");

    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", function () {

            alert(
                "👋 Halo!\n\n" +
                "Saya Galih Rizky Purnomo\n" +
                "Mahasiswa Universitas Pamulang 🎓\n\n" +
                "💻 Web Development Enthusiast\n" +
                "🤖 AI Enthusiast\n" +
                "🎧 Pecinta Musik\n\n" +
                "Moto Hidup:\n" +
                "\"Terus belajar, terus berkembang, dan jangan pernah takut mencoba hal baru.\"\n\n" +
                "Terima kasih telah mengunjungi website saya 🚀"
            );

        });
    }

    /* ==========================
       MUSIC PLAYER
    ========================== */

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    let isPlaying = false;

    if (music && musicBtn) {

        music.volume = 0.5;

        musicBtn.addEventListener("click", async function () {

            try {

                if (!isPlaying) {

                    await music.play();

                    isPlaying = true;
                    musicBtn.innerHTML = "⏸️";

                } else {

                    music.pause();

                    isPlaying = false;
                    musicBtn.innerHTML = "🎵";
                }

            } catch (error) {

                alert(
                    "Music tidak dapat diputar.\n\nPastikan file music.mp3 berada dalam folder yang sama dengan index.html."
                );

                console.error(error);
            }

        });
    }

});