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

if (music && musicBtn) {
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
        } catch (err) {
            alert(
                "❌ Musik tidak ditemukan.\n\n" +
                "Pastikan file music.mp3 berada di folder yang sama."
            );
            console.error(err);
        }
    });
}

/* =========================
   NEON STARS BACKGROUND
========================= */
for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();
    star.style.animationDuration = (Math.random() * 4 + 2) + "s";
    document.body.appendChild(star);
}

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(
    ".glass-card, .skill-card, .profile-container"
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   SERVER STATUS CHECK
========================= */
const statusBox = document.getElementById("serverStatus");
if (statusBox) {
    const statusText = statusBox.querySelector(".text");
    const PING_FILE = "ping.txt";

    async function checkServer() {
        try {
            const res = await fetch(PING_FILE, { cache: "no-store" });
            if (res.ok) {
                statusBox.classList.add("online");
                statusBox.classList.remove("offline");
                statusText.textContent = "ONLINE";
            } else {
                throw new Error();
            }
        } catch {
            statusBox.classList.add("offline");
            statusBox.classList.remove("online");
            statusText.textContent = "OFFLINE";
        }
    }

    checkServer();
    setInterval(checkServer, 5000);
}

/* =========================
   STYLE INJECTION (STAR ONLY)
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
    from{opacity:.2;}
    to{
        opacity:1;
        box-shadow:
        0 0 5px #00ffff,
        0 0 15px #00ffff;
    }
}
`;
document.head.appendChild(style);