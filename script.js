
const data = {
  users: [
    { username: "user1", password: "1234", name: "Ali", grades: { Math: 85, English: 90 } },
    { username: "user2", password: "5678", name: "Budi", grades: { Math: 78, Science: 88 } }
  ]
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = data.users.find(u => u.username === username && u.password === password);
  if (user) {
    showReport(user);
  } else {
    alert("Username atau password salah!");
  }
});

function showReport(user) {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("report").classList.remove("hidden");
  document.getElementById("studentName").textContent = `Nama: ${user.name}`;
  const subjectsList = document.getElementById("subjects");
  subjectsList.innerHTML = "";

  for (const [subject, grade] of Object.entries(user.grades)) {
    const li = document.createElement("li");
    li.textContent = `${subject}: ${grade}`;
    subjectsList.appendChild(li);
  }
}

function logout() {
  document.getElementById("report").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
