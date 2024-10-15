const adminUser = ["admin1", "admin2", "admin3"];
const passAdmin = ["pass1", "pass2", "pass3"];

const publicUser = ["public1", "public2", "public3"];
const passPublic = ["pass1", "pass2", "pass3"];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const userIndex = adminUser.indexOf(username);
    if (adminUser.includes(username)) {
      if (userIndex !== -1 && passAdmin[userIndex] === password) {
        e.target.action = "Admin.html";
        e.target.submit();
      } else {
        alert("Username atau password salah.");
      }
    } else {
      const publicIndex = publicUser.indexOf(username);
      if (publicUser.includes(username)) {
        if (publicIndex !== -1 && passAdmin[publicIndex] === password) {
          e.target.action = "student.html";
          e.target.submit();
        } else {
          alert("Username atau password salah.");
        }
      }
    }
  });
});
