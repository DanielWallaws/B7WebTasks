// let timer;

// function startTimer() {
//     timer = setInterval(showTime, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// function showTime() {
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     let txt  = h+':'+m+':'+s;

//     document.querySelector('.demo').innerHTML = txt;
// }

let timer;

function startTimer() {
    timer = setInterval(showTime, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt  = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}



