// Buat array
let penumpang = []
// 1. Fungsi pertama
function tambahPenumpang(namaPenumpang, penumpang){
    if(penumpang.length === 0){
        penumpang.push(namaPenumpang)
        return penumpang
    }else{
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] === undefined){
                penumpang[i] = namaPenumpang
                return penumpang
            }else if(penumpang[i] === namaPenumpang){
                console.log("Penumpang sudah terdaftar")
                return penumpang
            }else if(i === penumpang.length - 1){
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }
}

// 2.
function hapusPenumpang(namaPenumpang, penumpang){
    if(penumpang.length === 0){
        console.log(`Penumpang Kosong`)
        return penumpang
    }else{
        for(let j = 0; j < penumpang.length; j++){
            if(penumpang[j] === namaPenumpang){
                penumpang[j] = undefined
                return penumpang
            }else if(j === penumpang.length - 1){
                console.log(`${namaPenumpang} Tidak ada di angkot`)
                return penumpang
            }
        }
    }
}