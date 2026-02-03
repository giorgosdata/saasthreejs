// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn?.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Pricing toggle
const mBtn = document.getElementById("mBtn");
const yBtn = document.getElementById("yBtn");
const vals = document.querySelectorAll(".val");
const per = document.querySelectorAll(".per");

function setMode(mode){
  const annual = mode === "y";
  mBtn.classList.toggle("on", !annual);
  yBtn.classList.toggle("on", annual);
  vals.forEach(v => v.textContent = annual ? v.dataset.y : v.dataset.m);
  per.forEach(p => p.textContent = annual ? "/mo (billed yearly)" : "/mo");
}
mBtn?.addEventListener("click", () => setMode("m"));
yBtn?.addEventListener("click", () => setMode("y"));

// FAQ accordion
document.querySelectorAll(".q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const willOpen = !btn.classList.contains("open");
    document.querySelectorAll(".q").forEach(b => b.classList.remove("open"));
    if (willOpen) btn.classList.add("open");
  });
});
