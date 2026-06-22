/* ==========================
   SERVER STATUS CHECK
========================== */

const statusEl = document.getElementById("serverStatus");

// GANTI URL INI SESUAI SERVER KAMU
const SERVER_URL = "http://localhost:3000";

async function checkServer() {
    try {
        const res = await fetch(SERVER_URL, { method: "HEAD" });

        if (res.ok) {
            statusEl.textContent = "🟢 ONLINE";
            statusEl.classList.add("online");
            statusEl.classList.remove("offline");
        } else {
            throw new Error();
        }
    } catch {
        statusEl.textContent = "🔴 OFFLINE";
        statusEl.classList.add("offline");
        statusEl.classList.remove("online");
    }
}

// cek pertama kali
checkServer();

// cek ulang tiap 5 detik
setInterval(checkServer, 5000);