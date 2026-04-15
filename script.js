let yaratish_input = document.querySelector('#reja__yaratish');
let btn_yatarish = document.querySelector('.btn__yaratish');
let list = document.querySelector('ul');

let yaratilgan__soni = document.querySelector('#yaratilgan__soni');
let bararilga__soni = document.querySelector('#bararilga__soni');

btn_yatarish.addEventListener('click', function main(e) {
    e.preventDefault();

    if(yaratish_input.value.trim() !== ''  ){
        const li = document.createElement('li')

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.width = 'max-content'

        const text = document.createElement('span');
        text.textContent = yaratish_input.value;

        li.appendChild(checkbox);
        li.appendChild(text);

        list.appendChild(li);
        console.log(li.children);

        yaratish_input.value = ""
    }
})
