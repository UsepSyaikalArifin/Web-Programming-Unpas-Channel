// 1. Membuat parameter pada function
function fTambah(a, b){
    return a + b
}
let tambah = fTambah(2,2)
document.writeln(`<p>${tambah}</p>`)

// 2. 
function fKali(a, b){
    return a * b
}
let kali = fKali(fTambah(1,2), fTambah(3,4))
document.writeln(`<p>${kali}</p>`)

// 3.
function fArguments(){
    return arguments
}

let testArguments = fArguments(5, 20, 20, `hi`, false)
document.writeln(`<p>${testArguments}</p>`)
console.log(testArguments)

// 4
function fArguments2(){
    let hasil = 0
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i]
    }
    return hasil
}

let totalArguments = fArguments2(1, 2, 3, 2, 3, 4,)
document.writeln(`<p>${totalArguments}</p>`)