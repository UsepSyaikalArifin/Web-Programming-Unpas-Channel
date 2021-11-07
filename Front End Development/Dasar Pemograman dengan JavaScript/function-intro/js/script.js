// 1. Contoh Built In Function
let nama = `Usep Syaikal Arifin`
document.writeln(`<p>${nama.charAt(5)}</p>`)
document.writeln(`<p>${nama.slice(1)}</p>`)
document.writeln(`<p>${Math.random()}</p>`)

// 2. User Definition Function
// 2.1 Function Declaration
function jumlahDuaBilangan(bil1, bil2){
    let total
    total = bil1 + bil2
    return total
}

let jumlah2bilangan = jumlahDuaBilangan(1, 2)
document.writeln(`<p>Contoh function declaration = ${jumlah2bilangan}</p>`)

// 2.2 Function Exspression
let jumlah3Bilangan = function(bil1, bil2, bil3){
    let total 
    total = bil1 + bil2 + bil3

    return total
}

document.writeln(`<p>Contoh function exspression = ${jumlah3Bilangan(1, 2, 3)}</p>`)