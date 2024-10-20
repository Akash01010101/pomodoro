let isRunning = false;  
let timeLeft =25 *60; 
const startBtn = document.getElementById('start-btn');  
const pauseBtn = document.getElementById('pause-btn');  
const resetBtn = document.getElementById('reset-btn');  
const statusDisplay = document.getElementById('status');  
const timerDisplay = document.getElementById("timer-display")
function updateDisplay() {  
 const minutes = Math.floor(timeLeft /60);  
 const seconds = timeLeft %60;  
 timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  
}  

function startTimer() {  
 if (!isRunning) {  
 isRunning = true;  
 timer = setInterval(() => {  
 if (timeLeft >0) {  
 timeLeft--;  
 updateDisplay();  
 } else {  
 clearInterval(timer);  
 isRunning = false;  
 statusDisplay.textContent = "Time's up!";  
 }  
 },1000);  
 statusDisplay.textContent = "Timer is running...";  
 }  
}  

function pauseTimer() {  
 if (isRunning) {  
 clearInterval(timer);  
 isRunning = false;  
 statusDisplay.textContent = "Timer is paused.";  
 }  
}  

function resetTimer() {  
 clearInterval(timer);  
 isRunning = false;  
 timeLeft =25 *60;  
 updateDisplay();  
 statusDisplay.textContent = "";  
}  

startBtn.addEventListener('click', startTimer);  
pauseBtn.addEventListener('click', pauseTimer);  
resetBtn.addEventListener('click', resetTimer);  

document.getElementById('10m').addEventListener('click',()=> timeLeft = timeLeft + (10*60))
document.getElementById('30m').addEventListener('click',()=> timeLeft = timeLeft + (30*60))