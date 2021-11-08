// 1. Menghitung Jumlah Volume 2 Kubus
function volume2Kubus(sisiA, sisiB){
    let volumeKubus1 = sisiA**3
    let volumeKubus2 = sisiB**3
    return volumeKubus1 + volumeKubus2
}

let volumeKubus = volume2Kubus(8, 3)
document.writeln(`<p>${volumeKubus}</p>`)

// 2. Function yang lebih sempurna
function vKubus(sisi){
    let volumeKubus = sisi**3
    return volumeKubus
}

let totalVolumeKubus = vKubus(8) + vKubus(3)
document.writeln(`<p>${totalVolumeKubus}</p>`)
