const stopWatch =document.getElementsByClassName("stopWatch")[0];
const startWatch =document.getElementsByClassName("start")[0];
const pushWatch =document.getElementsByClassName("push")[0];
const continueWatch =document.getElementsByClassName("continue")[0];
const restartWatch =document.getElementsByClassName("restart")[0];

let seconds= 0, minutes= 0, hours= 0;

const startFun= ()=>{
	seconds +=1;
	if (seconds===60){
		seconds=0;
		minutes +=1;

		if (minutes===60){
			minutes=0;
			hours +=1;
		}
	}
	const secondText = seconds<10 ? "0" + seconds.toString():seconds;
	const minuteText = minutes<10? "0" + minutes.toString():minutes;
	const hourText =hours<10? "0" + hours.toString():hours;
	// console.log(seconds,minutes,hours);
	stopWatch.textContent = hourText + ":" + minuteText +":" + secondText;
}
let intervalId;

startWatch.addEventListener("click",()=>{
	intervalId =setInterval(startFun,1000);
	// alert("hey");
});

pushWatch.addEventListener("click",()=>{
	clearInterval(intervalId);
});

continueWatch.addEventListener("click",()=>{
	clearInterval(intervalId);
	intervalId =setInterval(startFun,1000);

});
restartWatch.addEventListener("click",()=>{
	seconds=0, minutes= 0, hours=0;
	clearInterval(intervalId);
	intervalId =setInterval(startFun,1000);

});
