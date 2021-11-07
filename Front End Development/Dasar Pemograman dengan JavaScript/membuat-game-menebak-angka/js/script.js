let repeat = true
while (repeat) {
    // 1. Menangkap pilihan player
    let player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
    // 2. Menangkap pilihan computer
    let computer = Math.round(Math.random() * 10)
    // 3. Menentukan Rules
    let result
    let kesempatan = 1
    while(kesempatan <= 3){
        if(player === computer){
            result = `Benar`
            alert(`Kesempatan ke - ${kesempatan} => ${player} VS ${computer} = ${result}`)
            kesempatan = 4
        }else if(player <= computer){
            result = `Terlalu kecil`
            alert(`Kesempatan ke - ${kesempatan} => ${player} VS ${computer} = ${result}`)
            kesempatan += 1
            if(kesempatan <=3){
                player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
            }else{
                alert(`Kesempatan Menebak sudah habis`)
            }
        }else{
            result = `Terlalu Besar`
            alert(`Kesempatan ke - ${kesempatan} => ${player} VS ${computer} = ${result}`)
            kesempatan += 1
            if(kesempatan <=3){
                player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
            }else{
                alert(`Kesempatan Menebak sudah habis`)
            }
        }
    }

    repeat = confirm(`Lagi ??`)
}