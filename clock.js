
let time = document.getElementById('time')
setInterval(() => {
  
  let d = new Date().toLocaleTimeString()
  console.log(d);
  
  time.innerHTML = d
  
}, 1000);




setInterval(() => {
    let date = new Date();
    let htime = date.getHours()
    let mtime = date.getMinutes()
    let stime = date.getSeconds()
    // These 3 are the Formulas:
    let hrotation = 30 * htime + mtime / 2 
    let mrotation = 6 * mtime
    let srotation = 6 * stime

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);

