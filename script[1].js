const c=document.getElementById('fireworks'),x=c.getContext('2d');
c.width=innerWidth;c.height=innerHeight;
function r(a,b){return Math.random()*(b-a)+a}
function draw(){
 x.fillStyle='rgba(0,0,0,.2)';x.fillRect(0,0,c.width,c.height);
 for(let i=0;i<8;i++){
  x.fillStyle=`hsl(${r(0,360)},100%,60%)`;
  x.beginPath();x.arc(r(0,c.width),r(0,c.height/2),3,0,7);x.fill();
 }
 requestAnimationFrame(draw)
}
draw();