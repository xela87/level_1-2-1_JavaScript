let btn1 = document.getElementById('show')
let btn2 = document.getElementById('delete')
let btn3 = document.getElementById('hide')
let counter = 0;

btn1.onclick = () => {
    if (counter % 2 !== 0 || counter === 0) {
        document.getElementById('rectangle').style.display = 'none';
    } else {
        document.getElementById('rectangle').style.display = 'block';
    }
    counter++;
}

btn2.onclick = () => {
    document.getElementById('rectangle').remove();
}

btn3.onclick = () => {
    counter++;
    if (counter % 2 !== 0 || counter === 0) {
        document.getElementById('rectangle').classList.add('hidden');
    } else {
        document.getElementsByClassName('hidden')[0].classList.remove('hidden')
    }
}
