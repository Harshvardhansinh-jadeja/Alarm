console.log("hello ranjit");

let set = document.getElementById('set').addEventListener('click',setAlarm);

var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    console.log("yes you clicking the buttton");
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarm.value}`);
    now = new Date();

    let timetoring = alarmDate - now ;
    console.log(timetoring);
    if(timetoring>=0){
    setTimeout(() => {
        console.log("now ringing");
        ringBell();
    }, timetoring);
}
}

let snooze = document.getElementById('snooze').addEventListener('click',stop);

function stop(e){
    e.preventDefault();
    audio.pause();

    setTimeout(() => {
        audio.play();
    }, 5000);
    // console.log("yes snooze is working ");
}


let bandh= document.getElementById('shut').addEventListener('click',shut);

function shut(e){
    e.preventDefault();
    audio.pause();

}
