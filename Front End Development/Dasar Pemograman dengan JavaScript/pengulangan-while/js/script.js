// 1. Menghentikan loop oleh user
let i = true;
while (i) {
    document.writeln(`<p>Hello World</p>`);
    i = confirm(`Lanjut ?`);
}

// 2. Menghentikan loop oleh program
let nilaiAwal = 1;
while (nilaiAwal <= 5) {
    document.writeln(`<p>Hello World</p>`);
    document.writeln(`<hr>`);
    nilaiAwal++;
}
