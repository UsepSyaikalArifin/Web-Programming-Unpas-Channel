// Buat array
let penumpang = ["Usep",undefined]
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