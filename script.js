/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});

/* =========================
   TYPING EFFECT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const text = "Galih Rizky Purnomo";
    const typing = document.getElementById("typing");

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

});

/* =========================
   POPUP KENALI SAYA
========================= */

const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {

    welcomeBtn.addEventListener("click", () => {

        alert(
            "👋 Halo!\n\n" +
            "Saya Galih Rizky Purnomo\n" +
            "Mahasiswa Universitas Pamulang 🎓\n\n" +
            "Terima kasih sudah mengunjungi website portofolio saya 🚀"
        );

    });

}

/* =========================
   MUSIC PLAYER
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", async () => {

        try {

            if (!isPlaying) {

                await music.play();

                musicBtn.innerHTML = "⏸️";

                musicBtn.classList.add("music-playing");

                isPlaying = true;

            } else {

                music.pause();

                musicBtn.innerHTML = "🎵";

                musicBtn.classList.remove("music-playing");

                isPlaying = false;

            }

        } catch (error) {

            alert(
                "❌ Musik tidak ditemukan.\n\n" +
                "Pastikan file music.mp3 berada di folder yang sama dengan index.html."
            );

            console.error(error);
        }

    });

}

/* =========================
   NEON STARS
========================= */

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.opacity = Math.random();

    star.style.animationDuration =
        (Math.random() * 4 + 2) + "s";

    document.body.appendChild(star);

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".glass-card, .skill-card, .profile-container"
);

const revealOnScroll = () => {

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   FLOATING EMOJIS
========================= */

const emojis = ["🚀", "🤖", "⚡", "💻", "🎧", "✨"];

setInterval(() => {

    const emoji = document.createElement("div");

    emoji.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "-50px";

    emoji.style.fontSize = "24px";

    emoji.style.pointerEvents = "none";

    emoji.style.zIndex = "1";

    emoji.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(emoji);

    setTimeout(() => {

        emoji.remove();

    }, 6000);

}, 3000);

/* =========================
   FLOATING EMOJI STYLE
========================= */

const style = document.createElement("style");

style.innerHTML = `

.star{

position:fixed;

width:2px;
height:2px;

background:#00ffff;

border-radius:50%;

pointer-events:none;

z-index:-1;

animation:twinkle infinite alternate;
}

@keyframes twinkle{

from{
opacity:.2;
}

to{
opacity:1;
box-shadow:
0 0 5px #00ffff,
0 0 15px #00ffff;
}

}

@keyframes floatUp{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-110vh);
opacity:0;
}

}

`;

document.head.appendChild(style);