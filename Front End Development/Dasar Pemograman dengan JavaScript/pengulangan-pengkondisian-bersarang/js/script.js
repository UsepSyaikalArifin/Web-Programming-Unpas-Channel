// 1. Membuat Bintang 1 Baris
let s = ``
for(let i = 10; i>=0; i--){
    for(let j = 0; j < i ; j++){
        s += `(${j})`
    }
    s += `\n`
}
console.log(s)
