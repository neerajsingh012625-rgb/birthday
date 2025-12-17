// Fireworks
const canvas=document.getElementById('fireworks');
const ctx=canvas.getContext('2d');
canvas.width=innerWidth;canvas.height=innerHeight;
function rnd(a,b){return Math.random()*(b-a)+a}
function fire(){
 ctx.fillStyle='rgba(0,0,0,.2)';
 ctx.fillRect(0,0,canvas.width,canvas.height);
 for(let i=0;i<6;i++){
  ctx.fillStyle=`hsl(${rnd(0,360)},100%,60%)`;
  ctx.beginPath();
  ctx.arc(rnd(0,canvas.width),rnd(0,canvas.height/2),3,0,7);
  ctx.fill();
 }
 requestAnimationFrame(fire);
}
fire();

// Balloons
const bal=document.querySelector('.balloons');
for(let i=0;i<5;i++){
 let s=document.createElement('span');
 s.style.left=Math.random()*100+'vw';
 bal.appendChild(s);
}

// Surprise + heart rain
document.getElementById('surpriseBtn').onclick=()=>{
 for(let i=0;i<80;i++){
  let h=document.createElement('div');
  h.className='heart';
  h.innerHTML='💖';
  h.style.left=Math.random()*100+'vw';
  h.style.animationDuration=2+Math.random()*3+'s';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
 }
 alert('🎆 Surprise for Radha 🎆');
}
