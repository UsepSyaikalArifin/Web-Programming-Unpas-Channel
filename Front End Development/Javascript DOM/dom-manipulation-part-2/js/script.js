// 1. MAnipulation Node
// Buat element baru
const pBaru = document.createElement(`p`)
const teksPBaru = document.createTextNode(`Paragraf Baru`)
// Simpan tulisan ke dalam pargaraf
pBaru.appendChild(teksPBaru)
// Simoan pBari di akhir section A
const sectionA = document.getElementById(`a`)
sectionA.appendChild(pBaru)
pBaru.style.backgroundColor = `green`


// 2.
const liBaru = document.createElement(`li`)
const teksliBaru = document.createTextNode(`Item Baru`)
liBaru.appendChild(teksliBaru)
 
const ul = document.querySelector(`#container section#b ul`)
const li2 = document.querySelector(`#container section#b ul li:nth-child(2)`)
ul.insertBefore(liBaru, li2)
const liBaruEdit = document.querySelector(`#container section#b ul li:nth-child(2)`)
liBaruEdit.style.backgroundColor = `red`

// 3.
const aLink = document.querySelector(`#container section#a a`)
sectionA.removeChild(aLink)

// 4.
const sectionB = document.getElementById(`b`)
const p4 = document.querySelector(`#container section#b p`)
const h2Baru = document.createElement(`h2`)
const teksh2Baru = document.createTextNode(`Judul Baru`)
h2Baru.appendChild(teksh2Baru)
sectionB.replaceChild(h2Baru, p4)
const h2BaruEdit = document.querySelector(`#container section#b h2`)
h2BaruEdit.style.backgroundColor = `blue`