const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

langToggle.addEventListener("click", () => {
  const isArabic = document.documentElement.lang === "ar";

  document.documentElement.lang = isArabic ? "en" : "ar";
  document.documentElement.dir = isArabic ? "ltr" : "rtl";

  langToggle.textContent = isArabic ? "AR" : "EN";
  document.getElementById("role").textContent = isArabic
    ? "Front-End Developer"
    : "مطور واجهات أمامية";

  document.getElementById("aboutText").textContent = isArabic
    ? "Hussein ElRefaey, a Front-End Developer with a Bachelor's degree in Information Systems from Cairo University. Skilled in HTML, CSS, JavaScript, and frameworks like React and Angular, with experience in building responsive and user-friendly interfaces. Known for fast learning, meeting deadlines, and working effectively within a team."
    : "حسين الرفاعي، مطور واجهات أمامية (Front-End Developer) حاصل على بكالوريوس نظم ومعلومات من جامعة القاهرة. أمتلك مهارات قوية في HTML, CSS, JavaScript وأطر عمل مثل React و Angular، مع خبرة في بناء واجهات مستخدم متجاوبة وسهلة الاستخدام. أتميز بسرعة التعلم والالتزام بالمواعيد والقدرة على العمل ضمن فريق لتحقيق أهداف المشاريع.";

  document.getElementById("cvBtn").textContent = isArabic
    ? "Download CV"
    : "تحميل السيرة الذاتية";

  document.getElementById("footerText").innerHTML = isArabic
    ? "&copy; 2025 Hussein ElRefaey. All rights reserved."
    : "&copy; 2025 Hussein ElRefaey. جميع الحقوق محفوظة.";

  document.querySelectorAll("h2").forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
});


themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});


