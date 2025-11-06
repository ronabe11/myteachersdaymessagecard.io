const teacherName = document.getElementById("teacherName");
const message = document.getElementById("message");
const senderName = document.getElementById("senderName");

document.getElementById("updateBtn").addEventListener("click", () => {
  const inputTeacher = document.getElementById("inputTeacher").value || "[Teacher's Name]";
  const inputMessage = document.getElementById("inputMessage").value || "Thank you for everything you do!";
  const inputSender = document.getElementById("inputSender").value || "[Your Name]";

  teacherName.textContent = `Dear ${inputTeacher}`;

  message.textContent = inputMessage;
  senderName.textContent = `— From ${inputSender}`;
});

document.getElementById("celebrateBtn").addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  const colors = ["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981"];
  confetti.style.backgroundColor = 

colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  setTimeout(() => confetti.remove(), 3000);
}
