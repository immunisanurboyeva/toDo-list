const form = document.querySelector('.form');
const input = document.querySelector('.input')
const ul = document.querySelector('.ul')
const btn = document.querySelector('.btn')

btn. setAttribute(' disabled', 'true')

// 1-usul
// input.addEventListener(' input', () => {
//  if (input.value !=="") {
//      btn. removeAttribute('disabled')
//      }
//  else {
//       btn. setAttribute(' disabled', "true")
//       ｝
//})

// 2-usul
input.addEventListener(' input', () => {
btn.disabled = input.value.trim() === ""
})

form. addEventListener(' submit', (e) => {
    e.preventDefault()

    let inputVal = input.value

    const li = document.createElement('li')
    li.innerText = inputVal
    ul.appendChild(li)

    input.value = ""
    btn.setAttribute(' disabled', 'true')
})


/*  
echo "# toDo-list" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/immunisanurboyeva/toDo-list.git
git push -u origin main
*/