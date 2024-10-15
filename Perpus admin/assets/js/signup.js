document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil nilai dari form input
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi bahwa semua field terisi
    if (!fullname || !email || !username || !password) {
      alert("Semua field harus diisi!");
      return;
    }

    // Validasi format email
    if (!validateEmail(email)) {
      alert("Email tidak valid!");
      return;
    }

    // Simpan data pengguna (contoh: simpan ke localStorage, atau kirimkan ke server)
    const userData = {
      fullname: fullname,
      email: email,
      username: username,
      password: password,
    };

    // Simpan data ke localStorage sebagai contoh
    localStorage.setItem("userData", JSON.stringify(userData));

    // Tampilkan pesan sukses dan reset form
    alert("Pendaftaran berhasil!");
    e.target.submit();
    signupForm.reset(); // Reset form setelah berhasil
  });

  // Fungsi validasi format email sederhana
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
