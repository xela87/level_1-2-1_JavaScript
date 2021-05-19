/**Task 1, 2*/
const btn1 = document.getElementById('show');
const btn2 = document.getElementById('delete');
const btn3 = document.getElementById('hide');
const item = document.getElementById('rectangle');
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
        item.classList.remove('hidden');
    }
}

/**Task 3*/
const btn4 = document.getElementById('hide-all');
let counter = 0;
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

/**Task 4*/
const btn5 = document.getElementById('hide-selectors');
btn5.onclick = () => {
    let selector = document.getElementById('text').value;
    let selectors = document.querySelectorAll(selector);
    for (let i = 0; i < selectors.length; i++) {
        selectors[i].style.opacity = selectors[i].style.opacity === '0' ? '1' : '0';
    }
}

/**Task 5*/
const yellow = document.getElementById('yellow-rectangle');
yellow.onclick = () => {
    if (counter % 2 === 0) {
        ++counter;
        alert("Hello");
        yellow.style.opacity = '1';
    } else {
        ++counter;
        yellow.style.opacity = '0';
    }
}

/**Task 6*/
const hoverBtn = document.getElementById('hover-button');
let redRect = document.getElementById('red-rectangle');
hoverBtn.onmouseover = () => {
    redRect.style.opacity = '1';
}
hoverBtn.onmouseout = () => {
    redRect.style.opacity = '0';
}

/**Task 7*/
let inputText = document.getElementById('some-text');
let greenRect = document.getElementById('green-rectangle');
inputText.onfocus = () => {
    greenRect.style.opacity = '1';
}
inputText.oninput = () => {
    greenRect.style.opacity = '0';
}

/**Task 8*/
const btn6 = document.getElementById('submit-link');
let image = document.getElementById('image');
btn6.onclick = () => {
    image.src = document.getElementById('image-link').value;
}

/**Task 9*/
const btn7 = document.getElementById('submit-links');
btn7.onclick = () => {
    const images = document.getElementById('links-area').value.split('\n');
    for (let link of images) {
        let image = document.createElement('img');
        image.src = link;
        document.getElementById('images').appendChild(image);
    }
}

/**Task 10, 11, 12*/
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

/**Task 13*/
let localStorageText = document.getElementById('text1');
let cookieText = document.getElementById('text2');
let sessionStorageText = document.getElementById('text3');

localStorageText.oninput = () => {
    localStorage.setItem('local', localStorageText.innerText);
}
if (localStorage.getItem('local') !== '') {
    localStorageText.innerText = localStorage.getItem('local');
}

cookieText.oninput = () => {
    document.cookie = cookieText.innerText;
}
cookieText.innerText = document.cookie;

sessionStorageText.oninput = () => {
    sessionStorage.setItem('session', sessionStorageText.innerText);
}
if (sessionStorage.getItem('session') !== '') {
    sessionStorageText.innerText = sessionStorage.getItem('session');
}

/**Task 14*/
const btn8 = document.getElementById('back-to-top');
window.onscroll = () => {
    if (scrollY + innerHeight >= document.body.scrollHeight) {
        btn8.style.opacity = '1';
    } else {
        btn8.style.opacity = '0';
    }
}
btn8.onclick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}

/**Task 15*/
const outerBlock = document.getElementById('outer-div');
const innerBlock = document.getElementById('inner-div');
outerBlock.onclick = () => {
    alert('outer block');
}
innerBlock.onclick = (event) => {
    alert('inner block');
    event.stopPropagation();
}

/**Task 16*/
const scrollBlockBtn = document.getElementById('show-cover');
const blockWindow = document.getElementById('cover');
const bodyDiv = document.querySelector('body');
scrollBlockBtn.onclick = () => {
    blockWindow.classList.remove('hidden');
    bodyDiv.classList.add('block-scrolling')
}
blockWindow.onclick = () => {
    blockWindow.classList.add('hidden');
    bodyDiv.classList.remove('block-scrolling');
}

/**Task 17*/
const form = document.getElementById('go-form');

form.onclick = (event) => {
    event.preventDefault();
}

/**Task 18*/
const dropArea = document.querySelector('.drag-block'),
    dragText = dropArea.querySelector('h2'),
    button = dropArea.querySelector('button'),
    input = dropArea.querySelector('input');

button.onclick = () => {
    input.click();
}

input.onchange = () => {
    dropArea.classList.add("active");
    dragText.textContent = "Prepared to Upload File";
}

dropArea.addEventListener("dragover", () => {
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});
