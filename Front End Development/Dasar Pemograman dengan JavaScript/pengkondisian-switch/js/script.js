// let angka = parseInt(prompt(`Masukan angka !!!`))

// if(angka === 1){
//     document.writeln(`<p>Anda memasukan angka = ${angka}</p>`)
// }else if(angka=== 2){
//     document.writeln(`<p>Anda memasukan angka = ${angka}</p>`)
// }else{
//     document.writeln(`<p>Anda memasukan angka bukan 1 & 2</p>`)
// }

// switch(angka){
//     case 1:
//         document.writeln(`<p>Anda memasukan angka ${angka}`)
//         break
//     case 2:
//         document.writeln(`<p>Anda memasukan angka ${angka}`)
//         break
//     case 3:
//         document.writeln(`<p>Anda memasukan angka ${angka}`)
//         break
//     case 4:
//         document.writeln(`<p>Anda memasukan angka ${angka}`)
//         break
//     default:
//         document.writeln(`<p>Anda memasukan bukan angka valid yaitu ${angka}`)
//         break
// }

let item = prompt(`Masukan nama makanan / minuman !!!`)

switch(item){
    case `nasi`:
        document.writeln(`<p>nasi adalah makanan / minuman sehat</p>`)
        break
    case `daging`:
        document.writeln(`<p>daging adalah makanan / minuman sehat</p>`)
        break
    case `susu`:
        document.writeln(`<p>susu adalah makanan / minuman sehat</p>`)
        break
    case `hamburger`:
        document.writeln(`<p>hamburger adalah makanan / minuman tidak sehat</p>`)
        break
    case `softdrink`:
        document.writeln(`<p>softdrink adalah makanan / minuman tidak sehat</p>`)
        break
    default:
        document.writeln(`<p>softdrink adalah makanan / minuman tidak valid</p>`)
        break 
}