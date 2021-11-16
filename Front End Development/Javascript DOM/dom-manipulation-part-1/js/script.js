// 1. Manipulasi ELement
// const judul= document.getElementById(`judul`)
// judul.innerHTML = `<em>Prof Dr.Eng Usep Syaikal Arifin</em>`

// const sectionA = document.querySelector(`section#a`)

// const judul = document.querySelector(`#judul`)
// judul.style.color = `aqua`
// judul.style.backgroundColor = `aquamarine`


// const judul = document.getElementsByTagName(`h1`)[0]
// // judul.setAttribute(`name`, `usep`)
// const a = document.querySelector(`section#a a`)
// a.setAttribute(`id`,`link`)
// console.info(a.getAttribute(`id`))
// a.removeAttribute(`id`)
// console.info(a.getAttribute(`id`))

const p2 = document.querySelector(`.p2`)
console.info(p2.classList)
p2.classList.add(`label`)
console.info(p2.classList)
p2.classList.remove(`label`)
console.info(p2.classList)
p2.classList.toggle(`label`)
console.info(p2.classList)
p2.classList.toggle(`label`)
console.info(p2.classList)
document.body.classList.toggle(`orange`)
document.body.classList.toggle(`orange`)
p2.classList.add(`1`)
p2.classList.add(`2`)
p2.classList.add(`3`)
p2.classList.add(`4`)
console.info(p2.classList)
console.info(p2.classList.item(2))
console.info(p2.classList)
p2.classList.remove(`3`)
console.info(p2.classList)
p2.classList.replace(`2`,`dua`)
console.info(p2.classList)