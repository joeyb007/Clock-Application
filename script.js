//initializing variables
let currentdate = new Date()
let day = currentdate.getDay()
let minutes = currentdate.getMinutes()
let hours = currentdate.getHours()
let dotw = document.getElementById("dotw");
let pmam = document.getElementById("pmam");
let time = document.getElementById("time");
let dots = document.getElementById("dots");
let alarm = document.getElementById("alarm");
let ainfo = document.getElementById("ainfo");
let saveb = document.getElementById("save");
let pmoram = document.getElementById("pmoram");
let hourin = document.getElementById("hourin");
let minin = document.getElementById("minin");
let alt = []
let cts = []
let snooze = document.getElementById("snooze");
let alon = "false"
let alsound = new Audio("digalsnd.mp3")
  alsound.loop = true; 

// flashing dots
const dotan = () => {
  dots.style.color = "#212121"
  setTimeout(() => {dots.style.color = "#FFFFFF";}, 900);
}

const dotfl = setInterval(dotan, 1800)

//changing alarm pm/am selection
if (pmoram.classList.contains("pm")) {
  pmoram.innerHTML = "PM";
} 
else if (pmoram.classList.contains("am")) {
  pmoram.innerHTML = "AM";
}

pmoram.addEventListener('click', () =>{
  if (pmoram.classList.contains("am")) {
    pmoram.classList.add("pm");
    pmoram.classList.remove("am");
    pmoram.innerHTML = "PM";
  }
  else if (pmoram.classList.contains("pm")){
    pmoram.classList.add("am");
    pmoram.classList.remove("pm");
    pmoram.innerHTML = "AM";
  }
});

// alarm function

alarm.addEventListener("click", () => {
    shell.classList.toggle("off");
});

saveb.addEventListener("click", () => {
  alt = []
  alm = minin.value;
  alh = hourin.value;
  if (parseInt(alh) > 12){
    alh == parseInt(alh) - 12
  }
  if(parseInt(alh) == 0){
    alh = 12;
  }
  alt = [parseInt(alh), parseInt(alm), pmoram.innerHTML]
  shell.classList.toggle("off");
  altim.innerHTML = alh + ":" + alm + '' + pmoram.innerHTML
});

const rbs = () => {
  time.style.color = "red";
}
const alarman = () => {
    alon = "true";
    time.style.color = "white"
    setTimeout(rbs, 900);
    
  }

const endcol = () => {
  time.style.color = "#FFFFFF";
}

//timing func
function update() {
cts = []
currentdate = new Date()
day = currentdate.getDay()
minutes = currentdate.getMinutes()
  if (minutes >= 0 && minutes <= 9){
     minutes = "0"+ minutes}
hours = currentdate.getHours()
  if (hours >= 12){
    pmam.innerHTML = "PM";
  } else {
    pmam.innerHTML= "AM";
  }
  if (hours > 12){
    hours = hours - 12
  }
if(hours == 0){
  hours = 12;
}

if(hours <= 9) {
  hours = "0" + hours;
}

  time.innerHTML = hours+" "+minutes


switch(day) {
  case 0:
    dotw.innerHTML = "SUN"
    break;
  case 1:
    dotw.innerHTML = "MON"
    break;
  case 2:
    dotw.innerHTML = "TUES"
    break;
  case 3:
    dotw.innerHTML = "WED"
    break;
  case 4:
    dotw.innerHTML = "THU"
    break;
  case 5:
    dotw.innerHTML = "FRI"
    break;
  case 6:
    dotw.innerHTML = "SAT"
    break;
}
  cts = [parseInt(hours), parseInt(minutes), pmam.innerHTML];
  
  if (alt[0] == cts[0] && alt[1] == cts[1] && alt[2] == cts[2] && alon == "false") {
    rbs();
    const alint = setInterval(alarman, 1800)
    alsound.play();
    snooze.addEventListener("click", () => {
      clearInterval(alint);
      alt = [];
      alon = "false";
      alsound.pause();
      endcol();
      document.getElementById("altim").innerHTML = "__:__"
      alt = [];
      minin.value = '';
      hourin.value = '';
    });
  }
}

// so that snooze button makes time white at end.

  const wu = () => {(time.style.color= "#FFFFFF")}
snooze.addEventListener("click", () => {
    setTimeout(wu, 1800);
  });


update();
const firstup = setInterval(update,((60 - currentdate.getSeconds())*1000));
const restup = () => {
  clearInterval(firstup);
  setInterval(update, 60000);
}
setTimeout(restup,((60 - currentdate.getSeconds())*1000))




