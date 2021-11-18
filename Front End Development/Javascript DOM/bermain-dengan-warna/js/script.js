const tUbahWarna = document.getElementById(`tUbahWarna`)
tUbahWarna.addEventListener(`click`, function(){
    // document.body.style.backgroundColor = `aqua`
    document.body.classList.toggle(`bg-Aqua`)
})

const tAcakWarna = document.createElement(`button`)
const textTAcakWarna = document.createTextNode(`Acak Warna`)
tAcakWarna.appendChild(textTAcakWarna)
tAcakWarna.setAttribute(`type`, `button`)
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener(`click`, ()=>{
    const r = Math.round( Math.random() * 255 + 1)
    const g = Math.round( Math.random() * 255 + 1)
    const b = Math.round( Math.random() * 255 + 1)
    document.body.style.backgroundColor  = `rgb(${r}, ${g}, ${b})`
})

// 
const sMerah = document.querySelector(`input[name=sMerah]`)
const sHijau = document.querySelector(`input[name=sHijau]`)
const sBiru = document.querySelector(`input[name=sBiru]`)

sMerah.addEventListener(`input`, () =>{
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor  = `rgb(${r}, ${g}, ${b})`
})
sHijau.addEventListener(`input`, () =>{
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor  = `rgb(${r}, ${g}, ${b})`
})
sBiru.addEventListener(`input`, () =>{
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor  = `rgb(${r}, ${g}, ${b})`
})