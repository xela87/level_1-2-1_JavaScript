let btn1 = document.getElementById('show')
let btn2 = document.getElementById('delete')
let btn3 = document.getElementById('hide')

btn1.onclick = () => document.getElementById('rectangle').style.display = 'none';
btn2.onclick = () => document.getElementById('rectangle').remove();
btn3.onclick = () => document.getElementById('rectangle').classList.add('hidden');
document.getElementsByClassName('hidden')[0].classList.remove('hidden')