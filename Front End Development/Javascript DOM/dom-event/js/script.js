// 1. onclick
// const p3 = document.getElementsByClassName(`p3`)[0]
// function ubahWarnaP3(){
//     p3.style.backgroundColor = `aqua`
// }

// // 2.
// const p2 = document.getElementsByClassName(`p2`)[0]
// function ubahWarnaP2(){
//     p2.style.backgroundColor = `aquamarine`
// }
// p2.onclick = ubahWarnaP2

// // 3. 
// const p4 = document.querySelector(`#container section#b p`)
// p4.addEventListener(`click`, function(){
//     const ul = document.querySelector(`#container section#b ul`)
//     const liBaru = document.createElement(`li`)
//     const teksliBaru = document.createTextNode(`Item baru`)
//     liBaru.appendChild(teksliBaru)
//     ul.appendChild(liBaru)
// })

// 2. Perbedaann event handler dengan addeventListener
// event handler -> Menimpa event sebelumnya
// const p3 = document.getElementsByClassName(`p3`)[0]
// p3.onclick = function(){
//     p3.style.backgroundColor = `blue`
// }
// p3.onclick = function(){
//     p3.style.color = `blue`
// }

// addEventListener -> Menambah event sebelumnya
const p3 = document.getElementsByClassName(`p3`)[0]
p3.addEventListener(`click`,function(){
    p3.style.backgroundColor = `blue`
})
p3.addEventListener(`click`, function(){
    p3.style.color = `aqua`
})