let btn1 = document.getElementById('show')
let btn2 = document.getElementById('delete')
let btn3 = document.getElementById('hide')
let btn4 = document.getElementById('hide-all')
let counter = 0;

btn1.onclick = () => {
        document.getElementById('rectangle').style.display = 'none';
}

btn2.onclick = () => {
    document.getElementById('rectangle').remove();
}

btn3.onclick = () => {
    ++counter;
    if (counter % 2 !== 0) {
        document.getElementById('rectangle').classList.add('hidden');
    } else {
        document.getElementsByClassName('hidden')[0].classList.remove('hidden')
    }
}

btn4.onclick = () => {
    ++counter;
    if (counter % 2 !== 0) {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName('rect-item')[i].classList.add('hidden')
        }
    } else {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName('hidden')[0].classList.remove('hidden')
        }
    }
}