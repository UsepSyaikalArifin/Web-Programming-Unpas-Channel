let tanya = true
while (tanya) {
    // 1. Menangkap pilihan user
    let player = prompt(`Silahkan pilih Gajah || Semut || Orang`)
    // 2. Menangkap pilihan komputer
    let computer = Math.random()
    if(computer<0.34){
        computer = `Gajah`
    }else if(computer >= 0.34 && computer < 0.68){
        computer = `Semut`
    }else{
        computer = `Orang`
    }
    // 3. menentuka rules
    let hasil = ``
    if(player === computer){
        hasil = `Hasilnya Anda Seri`
    }else if(player === `Gajah`){
        // if(computer === `Orang`){
        //     hasil = `Hasilnya Anda Menag`
        // }else{
        //     hasil = `Hasilnya Anda Kalah`
        // }
        hasil = (computer === `Orang`) ? `Hasilnya Anda Menang` : `Hasilnya Anda Kalah`
    }else if(player === `Semut`){
        // if(computer === `Gajah`){
        //     hasil = `Hasilnya Anda Menang`
        // }else{
        //     hasil =`Hasilnya Anda Kalah`
        // }
        hasil = (computer === `Gajah`) ? `Hasilnya Anda Menang` : `Hasilnya Anda Kalah`
    }else if(player === `Orang`){
        // if(computer === `Semut`){
        //     hasil =`Hasilnya Anda Menang`
        // }else{
        //     hasil =`Hasilnya Anda Kalah`
        // }
        hasil = (computer === `Semut`) ? `Hasilnya Anda Menang` : `Hasilnya Anda Kalah`
    }else{
        hasil = `Pilihan yang anda pilih Tidak Valid`
    }
    
    document.writeln(`<p> ${player} VS ${computer} = ${hasil}</p>`)
    tanya = confirm(`Lagi`)
}