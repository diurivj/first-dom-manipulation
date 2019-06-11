// const body = document.querySelector('body')
// // 1. CREAR EL NODO
// const h2 = document.createElement('h2')
// // 2. AGREGARLE ALGO AL NODO
// h2.innerText = 'Esto es un h2'
// h2.setAttribute('id', 'diego') // AGREGAMOS ATRIBUTOS
// console.log(h2.getAttribute('id')) // OBTENEMOS ATRIBUTOS
// h2.removeAttribute('id')
// console.log(h2.getAttribute('id'))
// // 3. APPEND EL NODO AL HTML
// body.insertBefore(h2, document.querySelector('h3'))
// body.removeChild(document.querySelector('h3'))
// const email = document.querySelector('[type="text"]')
// const password = document.querySelector('[type="password"]')
// const button = document.querySelector('button')
// button.onclick = e => {
//   e.preventDefault()
//   console.log(this)
// }

// 1. SUJETAMOS LO QUE NECESITEMOS
const input = document.querySelector('[type="text"]')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

// 2. EVENTOS
button.onclick = e => {
  if (input.value === '') return alert('Escribe algo, AHORA')
  todo = document.createElement('li')
  todo.innerText = input.value
  ul.appendChild(todo)
  input.value = ''
}

ul.onclick = e => {
  if (e.target.style.textDecoration === '' || e.target.style.textDecoration === 'none') {
    e.target.style.textDecoration = 'line-through'
  } else {
    e.target.style.textDecoration = 'none'
  }
}
