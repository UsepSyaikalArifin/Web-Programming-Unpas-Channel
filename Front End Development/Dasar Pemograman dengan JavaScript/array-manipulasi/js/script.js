// Menambah Array
let array = [`a`, 1, true, undefined, null]
console.info(array)

// Cara mengisi Array
let array1 = []
array1[0] = `a`
array1[1] = 1
array1[2] = true
array1[3] = undefined
array1[4] = null

// Cara Menghapus isi array
let array2 = ["Usep", "Syaikal", "Arifin"]
array2[1] = undefined

// Cara menampilkan isi array
let array3 = ["Usep", "Syaikal", "Arifin"]
for( let i = 0; i < array3.length; i++){
    console.info(array3[i])
}

// 4. Method pada Array -> Join
let array4 = ["Usep", "Syaikal", "Arifin"]
console.log(array4.join(" - "))

// 5. Method pada Array -> push
let array5 = ["push","pop","shift"]
array5.push("unshift")
console.info(array5)

// 6. Method pada array -> Pop
array5.pop()
console.log(array5)

// 7. Method pada Array -> unshift & shift
array5.unshift("unshift")
console.log(array5)

// 8. Method pada Array -> shift
array5.shift()
console.log(array5)

// 9. Method pada Array -> splice
array5.splice(2, 0, "splice")
console.table(array5)
array5.splice(1, 2, "splice hapus")
console.table(array5)

// 10. Methid pada Array -> slice
array5.push("slice","splice","unshift")
console.table(array5)
let array6 = array5.slice(1, 3)
console.table(array6)

// 11. Method foreach & map
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
angka.forEach(function(element){
    console.info(element)
})

let mahasiswa = ["Usep","Asep","Annas","Raden"]
mahasiswa.forEach(function(element, index){
    console.info(`Mahasiswa ke - ${index} adalah ${element}`)
})

// 12. Method map (lebih unggul dari forEach karena mengembalikan nilai)
let mahasiswa2 = ["Usep","Asep","Annas","Raden"]
let mahasiswa3 = mahasiswa2.map(function(element, index){
    return `${element}+${index}`
})
console.log(mahasiswa3.join("-"))

// 13. Method sort
let angka2 = [1, 2, 3, 4, 7, 6, 1, 1, 5, 21]
angka2.sort(function(a,b){
    return a-b
})
console.log(angka2.join(" - "))

// 14. Method filter dan find
//  filter & find sama hanya filter mengembalikan dalam bentuk array find dalam bentuk 1 nilai saja
let mahasiswa4 = ["Usep","Syaikal","Arifin"]
let mahasiswa5 = mahasiswa4.filter(function(element){
    return element === "Usep"
})
console.info(mahasiswa5)