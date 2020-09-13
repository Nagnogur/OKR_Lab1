const button = document.getElementById('button1');
const div = document.getElementById('div1');
const input = document.getElementById('input1');

button.addEventListener('click', buttonClick);

function buttonClick()
{
    div.textContent = input.value;
}