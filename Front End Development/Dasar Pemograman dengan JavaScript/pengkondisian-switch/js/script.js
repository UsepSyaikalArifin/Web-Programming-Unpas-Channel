let angka = parseInt(prompt(`Masukan angka !!!`))

// if(angka === 1){
//     document.writeln(`<p>Anda memasukan angka = ${angka}</p>`)
// }else if(angka=== 2){
//     document.writeln(`<p>Anda memasukan angka = ${angka}</p>`)
// }else{
//     document.writeln(`<p>Anda memasukan angka bukan 1 & 2</p>`)
// }

switch(angka){
    case 1:
        document.writeln(`<p>Anda memasukan angka ${angka}`)
        break
    case 2:
        document.writeln(`<p>Anda memasukan angka ${angka}`)
        break
    case 3:
        document.writeln(`<p>Anda memasukan angka ${angka}`)
        break
    case 4:
        document.writeln(`<p>Anda memasukan angka ${angka}`)
        break
    default:
        document.writeln(`<p>Anda memasukan bukan angka valid yaitu ${angka}`)
        break
}