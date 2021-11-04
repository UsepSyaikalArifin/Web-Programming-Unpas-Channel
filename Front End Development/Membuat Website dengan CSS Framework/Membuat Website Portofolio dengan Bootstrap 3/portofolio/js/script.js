// Event pada saat link
$(".page-scroll").on("click", function (e) {
    // Ambil isi href
    let tujuan = $(this).attr("href");
    // tangkap elemen yang bersangkutan
    let elementTujuan = $(tujuan);
    // pindahkan scroll
    $("body").animate(
        {
            scrollTop: elementTujuan.offset().top - 50,
        },
        1000
    );

    e.preventDefault();
});
