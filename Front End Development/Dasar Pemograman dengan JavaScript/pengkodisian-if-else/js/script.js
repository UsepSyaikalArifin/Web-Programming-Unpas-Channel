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