const btns = document.querySelectorAll('.checkbox');
const arrayBtns = [btns][0];

random_singleChecked(arrayBtns);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.checked !== true) {
            random_arrayChecked(arrayBtns)
            btn.checked = false

            if (verify_allIsOff(arrayBtns)) setTimeout(() => { random_singleChecked(arrayBtns) }, 1200);
        }
    })
})


function random_singleChecked(array) {
    array[generate_randomNumber(0, array.length - 1)].checked = true
}

function random_arrayChecked(array) {
    for (let i = 0; i < array.length; i++) {
        if (generate_randomNumber(1, 4) === 1) {
            array[i].checked = true
        }
    }
}

function generate_randomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function verify_allIsOff(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked === true) {
            return false
        }
    }
    return true
}