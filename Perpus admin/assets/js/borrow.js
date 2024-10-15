let jumlahBukuDipinjam = 0;
const dataBuku = [
  "Pemrograman Python",
  "Pemrograman Java",
  "Belajar Web Desain",
];
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-pinjam").addEventListener("submit", (e) => {
    e.preventDefault();
    jumlahBukuDipinjam += 1;
    console.log(jumlahBukuDipinjam);

    const judulBuku = document.querySelector('input[name="judulBuku"]').value;
    const angkaPinjaman = document.getElementById("angkaPinjaman");

    if (dataBuku.includes(judulBuku)) {
      if (jumlahBukuDipinjam > 2) {
        alert("Hanya bisa pinjam maksimal 2 buku");
      } else {
        angkaPinjaman.innerText = jumlahBukuDipinjam; // Ubah angka di span
      }
    } else {
      alert("Buku tidak ditemukan");
    }
  });
});

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
