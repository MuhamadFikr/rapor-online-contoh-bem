
const data = {
  users: [
    {
      username: "user1",
      password: "1234",
      name: "Ali",
      class: "10A",
      grades: {
        q1: { Math: 85, English: 90 },
        q2: { Math: 78, English: 88 },
        q3: { Math: 82, English: 89 }
      }
    },
    {
      username: "user2",
      password: "5678",
      name: "Budi",
      class: "10B",
      grades: {
        q1: { Math: 78, Science: 88 },
        q2: { Math: 80, Science: 90 },
        q3: { Math: 82, Science: 91 }
      }
    }
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
  document.getElementById("studentName").textContent = `Selamat datang, ${user.name}`;
  document.getElementById("studentFullName").textContent = user.name;
  document.getElementById("studentClass").textContent = user.class;

  const viewReportBtn = document.getElementById("viewReportBtn");
  const personalDataBtn = document.getElementById("personalDataBtn");

  personalDataBtn.addEventListener("click", () => {
    document.getElementById("personalData").classList.remove("hidden");
    document.getElementById("gradesReport").classList.add("hidden");
  });

  viewReportBtn.addEventListener("click", () => {
    const quarter = document.getElementById("quarterSelect").value;
    const subjectsList = document.getElementById("subjects");
    subjectsList.innerHTML = "";

    for (const [subject, grade] of Object.entries(user.grades[quarter])) {
      const li = document.createElement("li");
      li.textContent = `${subject}: ${grade}`;
      subjectsList.appendChild(li);
    }

    document.getElementById("gradesReport").classList.remove("hidden");
    document.getElementById("personalData").classList.add("hidden");
  });
}

function logout() {
  document.getElementById("report").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
