// 1.
for(let i = 10; i >= 1; i--){
    document.writeln(`<p>${i}</p>`)
}

// 2.
function fFactorial(a){
    console.log(a)
    if(a === 0){
        return 1
    }
    return a * fFactorial(a-1)
}

let factorial = fFactorial(120)
console.info(factorial)

// 3. Cetal Angka
function fCetakAngka(values){
    if(values === 0){
        return 0
    }
    console.log(values)
    cetakAngka(values - 1)
}

let cetakAngka = fCetakAngka
cetakAngka(120)