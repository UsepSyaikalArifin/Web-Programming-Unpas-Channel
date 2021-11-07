// 1. Program ke - 1
let noAngkot = 1
let jumlahAngkot = 10
let angkotBaik = 6
let angkotRusak = jumlahAngkot - angkotBaik

for(noAngkot = 1; noAngkot <=jumlahAngkot ; noAngkot++){
    if(noAngkot <= angkotBaik){
        document.writeln(`<p>Angkot No. ${noAngkot} beroperasi dengan baik</p>`)
    }else{
        document.writeln(`<p>Angkot No. ${noAngkot} sedang tidak beroperasi</p>`)
    }
}

// 2. Program ke - 2
let angka = prompt(`Masukan Angka = !!!`)

if(angka % 2 === 0){
    document.writeln(`<p>${angka} bilangan ganjil</p>`)
}else if(angka % 2 === 1){
    document.writeln(`<p>${angka} bilangan ganjil</p>`)
}else{
    document.writeln(`<p>${angka} bukan number</p>`)
}

// Tugas
for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBaik){
        document.writeln(`<p>Angkot No. ${noAngkot} sedang beroperasi dengan baik</p>`)
    }else if(noAngkot === 8){
        document.writeln(`<p>Angkot No. ${noAngkot} sedangan Lembur</p>`)
    }else{
        document.writeln(`<p>Angkot No. ${noAngkot} sedang tidak beroperasi</p>`)
    }
}