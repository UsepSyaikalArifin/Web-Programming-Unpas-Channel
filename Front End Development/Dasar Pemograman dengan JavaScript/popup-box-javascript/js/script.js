// 1.Popup Alert
// alert(`Hello World`);
// alert(`Hallo`);
// alert(`Nama`);
// alert(`Saya`);
// alert(`Usep Syaikal Arifin`);

// 2.Popup Prompt
// let nama = prompt(`Masukan nama anda : `);
// alert(`Nama anda : ${nama}`);

// // 2.Popup Confirm
// let test = confirm(`Kamu Yakin ???`);
// if (test) {
//     alert(`OK anda yakin`);
// } else {
//     alert(`Anda tidak yakin`);
// }

alert(`Selamat datang ...`);
let lagi = true;
while (lagi) {
    let nama = prompt(`Masukan nama anda : `);
    alert(`Hallo ${nama}`);
    lagi = confirm(`Coba lagi`);
}

alert(`Terima Kasih`);
