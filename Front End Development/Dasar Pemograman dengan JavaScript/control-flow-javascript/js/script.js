// 1.For loop (Pengulangan)
alert(`Mulai`);
for (let i = 0; i < 5; i++) {
    document.writeln(`<p>Hello World ke ${i}</p>`);
}
alert(`Selesai`);

// 2.Pengkodisian
let angka = prompt(`Masukan angka : `);
if (angka % 2 === 0) {
    document.writeln(`<p>Angka ${angka} adalah bilangan genap`);
} else {
    document.writeln(`<p>Angka adalah bilangan ganjil`);
}
