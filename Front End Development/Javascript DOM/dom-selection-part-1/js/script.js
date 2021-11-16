// 1. document.getElementByID() -> element
const judul = document.getElementById("judul")
judul.style.color = "red"
judul.style.backgroundColor = "black"
judul.innerHTML = `Usep Syaikal Arifin`

// 2. document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName(`p`)
for(let i = 0; i < p.length; i++){
    console.info(i)
    p[i].style.backgroundColor = `red`
}

const h1 = document.getElementsByTagName(`h1`)[0]
h1.style.fontSize = `50px`

// 3. document.getElementsByClassName -> HTMLCollections
const p1 = document.getElementsByClassName(`p1`)
p1[0].innerHTML = `Ini diubah dari JavaScript`

