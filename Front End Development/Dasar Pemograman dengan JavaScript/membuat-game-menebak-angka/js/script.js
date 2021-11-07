let repeat = true
while (repeat) {
    // 1. Menangkap pilihan player
    let player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
    // 2. Menangkap pilihan computer
    let computer = Math.round(Math.random() * 10)
    // 3. Menentukan Rules
    let result
    let kesempatan = 1
    while (kesempatan < 3) {
        if(player === computer){
            result = `Benar`
            alert(`Kesempatan ${kesempatan} => ${player} VS ${computer} = ${result}`)
            kesempatan = 3
        }else if(player < computer){
            result = `Angka yang anda masukan terlelu kecil`
            alert(`Kesempatan ${kesempatan} => ${player} = ${result}`)
            player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
            kesempatan++
        }else{
            result = `Angka yang anda masukan terlelu Besar`
            alert(`Kesempatan ${kesempatan} => ${player}  = ${result}`)
            player = parseInt(prompt(`Masukan Angka yang anda pilih !!! `))
            kesempatan++
        }
    }
    repeat = confirm(` ?`)
}