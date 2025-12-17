/* ✍️ Typing Effect */
const text = "🎉 Happy Birthday Radha 🎉";
let i = 0;
const typing = document.getElementById("typing");
function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

/* ❤️ Auto Heart Rain */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

/* 🎁 Surprise Box */
const box = document.getElementById("surpriseBox");
box.onclick = () => box.style.display = "none";

/* 🎆 Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function fireworkBurst(x, y) {
  for (let i = 0; i < 80; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  fireworkBurst(
    Math.random()*canvas.width,
    Math.random()*canvas.height/2
  );
}, 900);

/* 🎂 Cake Cut + Firework Burst */
const cake = document.getElementById("cake");
const knife = document.getElementById("knife");

cake.onclick = () => {
  knife.style.display = "block";

  for (let j = 0; j < 5; j++) {
    setTimeout(() => {
      fireworkBurst(
        Math.random()*canvas.width,
        Math.random()*canvas.height/2
      );
    }, j * 300);
  }
};

/* 📱 Mobile Shake */
setInterval(() => {
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 400);
}, 6000);

