let play = document.querySelector('.play');
const minute = 60;
const defaultTime = 25 * minute;
let timer = null;

play.addEventListener('click',(e)=>{

  let target = e.target
  if(target.classList.contains('fa-play')){
    target.classList.remove('fa-play')
    target.classList.add('fa-pause')
    startTime(defaultTime);
  }else{
    target.classList.remove('fa-pause')
    target.classList.add('fa-play')
    clearInterval(timer); // 暫停時間
  }
},false);

let startTime = (sec) =>{
  let countDown = sec;
  if (timer) {
    restartTime();
  }
  timer = setInterval(() => {
    if(countDown <=0) {
      stopTime();
      return 
    }
    countDown = tickCountDown(countDown)
  }, 1000);
  console.log(countDown)
}

let tickCountDown = (countDown) => {
  countDown -= 1;
  renderCountDown(countDown);
  return countDown;
}
let restartTime = () => {
 stopTime();
 renderCountDown(defaultTime);
}
let stopTime = () => {
  clearInterval(timer);
  timer = null;
}
let formatTime = (sec) =>{
  return {
    min: String('0' + Math.floor(sec / 60)).substr(-2),
    sec: String('0' + sec % 60).substr(-2),
  }
}
let renderCountDown = (countDown) => {
  const clock = formatTime(countDown);
  const Timenumber = document.querySelectorAll('.countDown-number')
  const min = clock.min.split('');
  const sec = clock.sec.split('');
  Timenumber[0].textContent = min[0] || 0;
  Timenumber[1].textContent = min[1] || 0;
  Timenumber[3].textContent = sec[0] || 0;
  Timenumber[4].textContent = sec[1] || 0;
}
