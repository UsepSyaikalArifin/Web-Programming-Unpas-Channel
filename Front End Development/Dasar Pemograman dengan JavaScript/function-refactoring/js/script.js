// 1. Refactoring -> Mempermudah pembuatan program
function fVolumeKubus(a){
    return a**3
}

let totalVolumeKubus = fVolumeKubus(3) + fVolumeKubus(4)
document.writeln(`<p>${totalVolumeKubus}</p>`)