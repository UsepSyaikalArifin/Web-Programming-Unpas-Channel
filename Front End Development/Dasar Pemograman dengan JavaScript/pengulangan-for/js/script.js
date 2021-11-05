// for (let angkot = 1; angkot <= 10; angkot++) {
//     document.writeln(`<p>Angkot No. ${angkot} berjalan dengan baik.`);
// }
let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    document.writeln(`<p>Angkot No. ${noAngkot} beroperasi dengan Baik.`);
    noAngkot++;
}

//
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    document.writeln(`<p>Angkot No. ${noAngkot} sedang tidak beroperasi</p>`);
}
