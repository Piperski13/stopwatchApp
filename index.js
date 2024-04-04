//seting variables
let watchInterval;
const displayElement = document.querySelector('.js-DisplayStopwatch');

const stopWatch = {
  seconds:0,
  minutes:0,
  hours:0
};

//adding event listeners to buttons
document.querySelector('.js-start-button').addEventListener('click',()=>{
  playApp();
})
document.querySelector('.js-stop-button').addEventListener('click',()=>{
  stopApp();
})


function playApp(){
  watchInterval = setInterval(()=>{
    stopWatch.seconds++;
    if(stopWatch.seconds===60){
      stopWatch.minutes++;
      stopWatch.seconds=0;
    }
    if(stopWatch.minutes===60){
      stopWatch.hours++;
      stopWatch.minutes=0;
    }
    displayElement.innerHTML = `${stopWatch.hours}:${stopWatch.minutes}:${stopWatch.seconds}`
  },1000);
}

function stopApp(){
 clearInterval(watchInterval);
 displayElement.innerHTML = '';
}