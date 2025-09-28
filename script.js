const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// =================== اللغة ===================
langToggle.addEventListener("click", () => {
  const isArabic = document.documentElement.lang === "ar";

  document.documentElement.lang = isArabic ? "en" : "ar";
  document.documentElement.dir = isArabic ? "ltr" : "rtl";

  langToggle.textContent = isArabic ? "AR" : "EN";
  document.getElementById("role").textContent = isArabic
    ? "Front-End Developer"
    : "مطور واجهات أمامية";

  document.getElementById("aboutText").textContent = isArabic
    ? "I am a Front-End Developer with experience building beautiful interfaces."
    : "أنا مطور Front-End بخبرة في بناء واجهات جذابة.";

  document.getElementById("cvBtn").textContent = isArabic
    ? "Download CV"
    : "تحميل السيرة الذاتية";

  document.getElementById("footerText").innerHTML = isArabic
    ? "&copy; 2025 Hussein ElRefaey. All rights reserved."
    : "&copy; 2025 Hussein ElRefaey. جميع الحقوق محفوظة.";

  // Change section titles
  document.querySelectorAll("h2").forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
});

// =================== الوضع الليلي ===================
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
