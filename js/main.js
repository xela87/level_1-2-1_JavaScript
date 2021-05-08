const btn1 = document.getElementById('show')
const btn2 = document.getElementById('delete')
const btn3 = document.getElementById('hide')
const btn4 = document.getElementById('hide-all')
const btn5 = document.getElementById('hide-selectors');
let counter = 0;
const item = document.getElementById('rectangle');
const yellow = document.getElementById('yellow-rectangle');

btn1.onclick = () => {
    item.style.display = item.style.display === 'none' ? 'block' : 'none';
}

btn2.onclick = () => {
    item.remove();
}

btn3.onclick = () => {
    ++counter;
    if (counter % 2 !== 0) {
        item.classList.add('hidden');
    } else {
        document.getElementsByClassName('hidden')[0].classList.remove('hidden');
    }
}

btn4.onclick = () => {
    ++counter;
    if (counter % 2 !== 0) {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName('rect-item')[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName('hidden')[0].classList.remove('hidden');
        }
    }
}

btn5.onclick = () => {
    let selector = document.getElementById('text').value;
    let selectors = document.querySelectorAll(selector);
    for (let i = 0; i < selectors.length; i++) {
        selectors[i].style.opacity = selectors[i].style.opacity === "0" ? "1" : "0";
    }
}
yellow.onclick = () => {
    if (counter % 2 === 0) {
        ++counter;
        alert("Hello");
        yellow.style.opacity = "1";
    } else {
        ++counter;
        yellow.style.opacity = "0";
    }
}