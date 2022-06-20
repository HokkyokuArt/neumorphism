const ipt = document.querySelector("#ipt")
const btnstartPause = document.querySelector("#startPause")
const btnStop = document.querySelector("#stop")

let hh = 0, mm = 0, ss = 0, ms = 0, time, click = false;

btnstartPause.addEventListener('click', click_StartPause)
btnStop.addEventListener('click', click_Stop)

function click_StartPause() {
    if (!click) {
        time = setInterval(() => { visor() }, 10)
        btnstartPause.classList.add('teste')
        btnstartPause.textContent = 'PAUSE'
        click = true
    } else {
        clearInterval(time)
        btnstartPause.textContent = 'START'
        btnstartPause.classList.remove('teste')
        click = false
    }
}

function click_Pause() {
    clearInterval(time)
    click = false
}

function click_Stop() {
    clearInterval(time)
    hh = 0, mm = 0, ss = 0, ms = 0
    click = false
    ipt.value = `00:00:00:00`;
    btnstartPause.textContent = 'START'
    btnstartPause.classList.remove('teste')
}

function visor() {
    ms++;
    if (ms == 100) {
        ms = 0
        ss++
        if (ss == 60) {
            ss = 0
            mm++
            if (mm == 60) {
                mm = 0
                hh++
            }
        }

    }
    let format = `${(hh < 10 ? `0` + hh : hh)}:${(mm < 10 ? `0` + mm : mm)}:${(ss < 10 ? `0` + ss : ss)}:${(ms < 10 ? `0` + ms : ms)}`
    ipt.value = format;
}


