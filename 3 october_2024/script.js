
// task_1
//   Create a function that logs "Time's up!" to the console after 5 seconds using setTimeout
// setTimeout(()=>alert("Time is up!"),5000);



// task_2
// Countdown Timer with setInterval
// const elem_div=document.querySelector("#countdown");
// const timer=elem_div.innerText;
// console.log(timer);
// const main_part=timer.split(':');
// let int=Number(main_part[1]);

// setInterval(()=>{
//    int--;
//    if(int>=10)
//    {
//     elem_div.innerText=main_part[0]+':'+int;
//    }
//    else if(int<10 && int>0)
//    {
//     elem_div.innerText=main_part[0]+':'+'0'+int;
//    }
//    else {
//     elem_div.innerText=main_part[0]+':'+main_part[0];
//    }
// },1000);




// task_3
// Write a function that counts down from 10 to 0 and logs each number to the console every second using setInterval. When the countdown reaches 0, display "Blast off!" and stop the interval
// const CountDown=document.querySelector("#countdown_2");
// let inner=Number(CountDown.innerText);
// setInterval(() => {
//     inner--;
//     CountDown.innerText=inner;
//     if(inner<=0)
//     {
// CountDown.innerText=0;
//     }
//     if(inner==-1)
//     {
//         alert("Blast Off!");
//     }
// }, 1000);





// task_4
// Auto-refreshing Content
// Create a function that simulates fetching new data every 3 seconds. Use setInterval to log "Fetching new data..." to the console at regular intervals.

// function fetchData() {
//     setInterval(() => {
//         console.log("Fetching new data...");
//     }, 3000);
// }

// fetchData();




// task_5
// Cancel a Timeout
// Write a function that starts a 10-second timer using setTimeout. Provide a button or a condition that can cancel the timer before it completes using clearTimeout

// const increaseBtn = document.querySelector('#DecreaseBtn');
// const stopBtn = document.querySelector('#stopBtn');

// let interval;
// const counterElement = document.querySelector('#counter');






// task_6
// increaseBtn.addEventListener('click',() => {
//    let counter =  Number(counterElement.innerText);
//    interval = setInterval(()=>{
//     counter--;
//     if(counter<0)
//     {
//         counter=0;
//     }
//     counterElement.innerText = counter;
//   },1000);
// });


// stopBtn.addEventListener('click',() => {
//     clearInterval(interval);
// })






// task_7
// Update UI with setInterval
// Create a simple progress bar that fills up over 5 seconds using setInterval. Update the width of the progress bar every 100 milliseconds until it's full.
// let progressBar = document.querySelector("#progress_bar");
// let width = 0;
// let interval = setInterval(() => {
//     if (width >= 100) {
//         clearInterval(interval); 
//     } else {
//         width += 2; 
//         progressBar.style.width = width + "%"; 
//     }
// }, 100);