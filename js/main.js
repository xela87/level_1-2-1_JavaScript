const btn1 = document.getElementById('show')
const btn2 = document.getElementById('delete')
const btn3 = document.getElementById('hide')
const btn4 = document.getElementById('hide-all')
const btn5 = document.getElementById('hide-selectors');
let counter = 0;
const item = document.getElementById('rectangle');
const yellow = document.getElementById('yellow-rectangle');
const hoverBtn = document.getElementById('hover-button');
const btn6 = document.getElementById('submit-link');
const btn7 = document.getElementById('submit-links');

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
    counter++;
    if (counter % 2 !== 0) {
        for (let i = 1; i < 6; i++) {
            document.getElementsByClassName('rect-item')[i].classList.add('hidden');
        }
    } else {
        for (let i = 1; i < 6; i++) {
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

let redRect = document.getElementById('red-rectangle');
hoverBtn.onmouseover = () => {
    redRect.style.opacity = '1';
}
hoverBtn.onmouseout = () => {
    redRect.style.opacity = '0';
}

let inputText = document.getElementById('some-text');
let greenRect = document.getElementById('green-rectangle');

inputText.onfocus = () => {
    greenRect.style.opacity = '1';
}

inputText.oninput = () => {
    greenRect.style.opacity = '0';
}

let image = document.getElementById('image');

btn6.onclick = () => {
    image.src = document.getElementById('image-link').value;
}

btn7.onclick = () => {
    const images = document.getElementById('links-area').value.split('\n');
    for (let link of images) {
        let image = document.createElement('img');
        image.src = link;
        document.getElementById('images').appendChild(image);
    }
}


let cursor = document.getElementById('cursor-coordinates');
let lang = document.getElementById('language');
let geo = document.getElementById('geolocation');



window.onload = () => {
    document.onmousemove = (event) => {
        cursor.innerHTML = 'Cursor coordinates: X: ' + event.pageX + ', Y: ' + event.pageY;
    }
    lang.innerHTML = 'Language: ' + navigator.language;
    navigator.geolocation.getCurrentPosition((position) => {
        geo.innerHTML = 'Your location: Ш: ' + position.coords.latitude + ', Д: ' + position.coords.longitude;
    });
}





