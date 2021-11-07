let noAngkot = 1
let jumlahAngkot = 10

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot<= 4 && noAngkot === 6){
        document.writeln(`<p>Angkot No. ${noAngkot} beroperasi dengan Baik</p>`)
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        document.writeln(`<p>Angkot No. ${noAngkot} sedang lembur<p>`)
    }else{
        document.writeln(`<p>Angkot No. ${noAngkot} sedang tidak beroperasi</p>`)
    }
}