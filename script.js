window.onload = function(){
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    let appendmin = document.querySelector('#minutes')
    let appendsec = document.querySelector('#seconds')
    let appendtens = document.querySelector('#tens')

    let startbtn =  document.querySelector('#start')
    let stopbtn = document.querySelector('#stop')
    let resetbtn = document.querySelector('#reset')

    let interval;

    const starttimer = () =>{
        tens++;
        if(tens <=9){
            appendtens.innerHTML = '0'+tens;
        }
        if(tens > 9){
            appendtens.innerHTML = tens;
        }
        if(tens>99){
            seconds++;
            appendsec.innerHTML = '0' + seconds;
            tens = 0;
            appendtens.innerHTML = '0' + 0;
        }
        if(seconds>9){
            appendsec.innerHTML = seconds;
        }
        if(seconds>59){
            minutes++;
            appendmin.innerHTML = '0' +minutes;
            seconds = 0;
            appendmin.innerHTML = '0' + 0;
        }
    };
    startbtn.onclick = () =>{
        clearInterval(interval);
        interval = setInterval(starttimer,10);
    };
    stopbtn.onclick = ()=>{
        clearInterval(interval);
    };
    resetbtn.onclick = ()=>{
        clearInterval(interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendtens.innerHTML = tens;
        appendsec.innerHTML = seconds;
        appendmin.innerHTML = minutes;
    };

};