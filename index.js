//seting variables
let watchInterval;
const displayElement = document.querySelector('.js-DisplayStopwatch');

const stopWatch = {
  miliseconds:0,
  seconds:0,
  minutes:0
};

//adding event listeners to buttons
document.querySelector('.js-start-button').addEventListener('click',()=>{
  playApp();
})
document.querySelector('.js-stop-button').addEventListener('click',()=>{
  stopApp();
})


function playApp(){
  clearInterval(watchInterval);
  watchInterval = setInterval(()=>{
    stopWatch.miliseconds++;
    if(stopWatch.miliseconds===100){
      stopWatch.seconds++;
      stopWatch.miliseconds=0;
    }
    if(stopWatch.seconds===60){
      stopWatch.minutes++;
      stopWatch.seconds=0;
    }
    displayElement.innerHTML = `${stopWatch.minutes}:${stopWatch.seconds}.${stopWatch.miliseconds}`
  },10);
}

function stopApp(){
 clearInterval(watchInterval);
 displayElement.innerHTML = '';
 stopWatch.seconds=0;
 stopWatch.minutes=0;
 stopWatch.hours=0;
}