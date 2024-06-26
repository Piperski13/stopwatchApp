//seting variables
let watchInterval;
const displayElement = document.querySelector('.js-displayStopWatch');

//declaring object
const stopWatch = {
  miliseconds:0,
  seconds:0,
  minutes:0
};


// the interval
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
    const formattedTime = formatTime(stopWatch);
    displayElement.innerHTML = formattedTime;
  },10);
};
//stop button
function stopApp(){
 clearInterval(watchInterval);
};
//reset button
function resetApp(){
  displayElement.innerHTML = `00:00.00`;
  stopWatch.seconds=0;
  stopWatch.minutes=0;
  stopWatch.hours=0;
}
//making sure that formating is right -> 00:00.00

function formatTime(stopWatch) {
  const minutesStr = stopWatch.minutes < 10 ? `0${stopWatch.minutes}` : stopWatch.minutes; // Ternary Operator
  const secondsStr = stopWatch.seconds < 10 ? `0${stopWatch.seconds}` : stopWatch.seconds;
  const milisecondsStr = stopWatch.miliseconds < 10 ? `0${stopWatch.miliseconds}` : stopWatch.miliseconds;
  return `${minutesStr}:${secondsStr}.${milisecondsStr}`;
};

startButton(); //adds eventListener to start button

//adding event listeners to button
function startButton(){
  document.querySelector('.js-start-button').addEventListener('click',()=>{
    playApp(); //start app
    generateStopButton(); //swap start button for stop button
  });
};

//generates stop button
function generateStopButton(){
  document.querySelector('.js-button-holder').innerHTML=`<button class="js-stop-button stop-button">Stop</button>`;
  document.querySelector('.js-stop-button').addEventListener('click',()=>{
    stopApp(); //stops app
    generateResumeButton(); //generates reset button and swaps stop for resume button
  });
  
};

//generates resume(insted of stop) and reset
function generateResumeButton(){

  document.querySelector('.js-button-holder').innerHTML=`<button class="js-resume-button resume-button">Resume</button>`;
  document.querySelector('.js-reset-holder').innerHTML=`<button class="js-reset-button reset-button">Reset</button>`;

  //resume eventListener
  document.querySelector('.js-resume-button').addEventListener('click',()=>{
    playApp(); // resume app
    generateStopButton(); // go step back and generate stop insted and remove reseet button
    document.querySelector('.js-reset-holder').innerHTML='';
  });

  //reset eventListener
  document.querySelector('.js-reset-button').addEventListener('click',()=>{
    resetApp(); // resets timer
    stopApp(); //stops timer
    document.querySelector('.js-button-holder').innerHTML=`<button class="js-start-button start-button">Start</button>`; // goes back to start (generates start button)
    document.querySelector('.js-reset-holder').innerHTML=''; // removes itself
    startButton();
  });
}