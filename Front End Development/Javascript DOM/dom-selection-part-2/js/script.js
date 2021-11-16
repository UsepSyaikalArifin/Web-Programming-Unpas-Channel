// // 1. document.getElementByID() -> element
// const judul = document.getElementById("judul")
// judul.style.color = "red"
// judul.style.backgroundColor = "black"
// judul.innerHTML = `Usep Syaikal Arifin`

// // 2. document.getElementsByTagName() -> HTMLCollections
// const p = document.getElementsByTagName(`p`)
// for(let i = 0; i < p.length; i++){
//     console.info(i)
//     p[i].style.backgroundColor = `red`
// }

// const h1 = document.getElementsByTagName(`h1`)[0]
// h1.style.fontSize = `50px`

// // 3. document.getElementsByClassName -> HTMLCollections
// const p1 = document.getElementsByClassName(`p1`)
// p1[0].innerHTML = `Ini diubah dari JavaScript`

// 4. document.querySelector() -> Element
const p4 = document.querySelector(`#b p`)
p4.style.color = `green`
p4.style.fontSize = `30px`

const li2 = document.querySelector(`section#b ul li:nth-child(2)`)
li2.style.backgroundColor = 'aqua'
li2.style.fontWeight = 'bold'

// const p = document.querySelector(`p`)
// p.innerHTML = `Dirubah dari JavaScript`

// 5. document.querySelectorAll() -> nodelist
const p = document.querySelectorAll(`p`)
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = `aqua`
}

// 6. Mengubah nood root
const sectionB = document.querySelector(`section#b`)
const li3 = sectionB.getElementsByTagName(`li`)[2]
li3.innerHTML = `Dirubah dari JavaScripr`