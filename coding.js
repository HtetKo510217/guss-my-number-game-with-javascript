const body = document.querySelector('body');
const check = document.querySelector('.check');
const inputNumber = document.querySelector('.inputNumber');
const again = document.querySelector('.again');
// const guss = document.querySelector('.guss');
const gussNumber = document.querySelector('.gussNumber');
const score = document.querySelector('.score');
const heightScore = document.querySelector('.heightScore');
const screat = document.querySelector('.screatNumber');
let screatNumber = Math.trunc(Math.random()*20+1);
let scoreValue = 20;
function cancleClick(ele){
    ele.style.pointerEvents = "none";
}
check.addEventListener('click',function(){
    gussNumber.textContent = "start gussing ...";
    let inputNumberValue = inputNumber.value;
    scoreValue -=1;
    console.log(scoreValue);
    if(inputNumberValue == screatNumber) {
        screat.textContent = screatNumber;
        score.textContent = scoreValue;
        heightScore.textContent = scoreValue;
        gussNumber.textContent = "success";
        body.style.backgroundColor = "darkgreen";
        cancleClick(check);
    }else if(inputNumberValue !== screatNumber) {
        gussNumber.textContent = inputNumberValue > screatNumber ? 'Too height' : 'Too Low';
        // inputNumber.value = '';
    }
});
again.addEventListener('click',function(){
    screatNumber = Math.trunc(Math.random()*20+1);
    gussNumber.textContent = "No Number";
    screat.textContent = "?";
    body.style.backgroundColor = "gray";
    inputNumber.value = '';
    score.textContent = 20;
    heightScore.textContent = 0;
    check.style.pointerEvents = "auto";
    scoreValue = 20;
})