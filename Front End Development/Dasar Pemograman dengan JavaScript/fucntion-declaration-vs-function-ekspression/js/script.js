// 1. Function declaration sederhana
function fTampilPesan(nama){
    document.writeln(`<p>${nama}</p>`)
}

fTampilPesan(`<p>Function Declaration</p>`)
// 2. Function ekspression
let tampilPesan = function (nama){
    document.writeln(`<p>${nama}</p>`)
}

tampilPesan(`Function Ekspression`)

// 3.
fTampilPesan2(`<p>Function Declaration Memanggil dulu baru Deklarasi</p>`)
function fTampilPesan2(nama){
    document.writeln(`<p>${nama}</p>`)
}