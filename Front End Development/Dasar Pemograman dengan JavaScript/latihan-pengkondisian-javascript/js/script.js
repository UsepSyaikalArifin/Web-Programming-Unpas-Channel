let noAngkot = 1
let jumlahAngkot = 10

for(noAngkot = 1; noAngkot <= 10; noAngkot++){
    if(noAngkot<=6){
        document.writeln(`<p>Angkot No. ${noAngkot} beroperasi dengan Baik</p>`)
    }else if(noAngkot === 8){
        document.writeln(`<p>Angkot No. ${noAngkot} sedang lembur<p>`)
    }else{
        document.writeln(`<p>Angkot No. ${noAngkot} sedang tidak beroperasi</p>`)
    }
}