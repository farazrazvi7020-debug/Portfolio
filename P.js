// ========== LOADER ==========
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// ========== SCROLL ==========
function scrollToContact() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// ========== REVEAL ==========
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// ========== CURSOR ==========
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// ========== THEME TOGGLE ==========
// ========== SUN & MOON ANIMATION ==========
const toggle = document.getElementById("themeToggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

// Play correct animation
function playSky(mode) {
  sun.style.animation = "none";
  moon.style.animation = "none";

  // Force reflow
  void sun.offsetHeight;
  void moon.offsetHeight;

  if (mode === "light") {
    moon.style.animation = "moonSet 2s ease-in forwards";
    sun.style.animation = "sunRise 2.5s ease-out forwards";
  } else {
    sun.style.animation = "sunSet 2s ease-in forwards";
    moon.style.animation = "moonRise 2.5s ease-out forwards";
  }
}

// Initial state (Dark mode by default)
window.addEventListener("load", () => {
  playSky("dark");
});

// Toggle handler
toggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  toggle.textContent = isLight ? "☀️" : "🌙";
  playSky(isLight ? "light" : "dark");
});

// ========== MOBILE MENU ==========
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ========== FIRE ANIMATION ==========
// ========== FIRE BACKGROUND ==========
const fireContainer = document.querySelector(".fire-bg");

function createFire() {
  const fire = document.createElement("span");
  fire.textContent = "🔥";

  // Random horizontal position
  fire.style.left = Math.random() * 100 + "%";

  // Random size
  fire.style.fontSize = 1 + Math.random() * 1.5 + "rem";

  // Random speed
  fire.style.animationDuration = 6 + Math.random() * 6 + "s";

  fireContainer.appendChild(fire);

  // Remove after animation to avoid DOM overload
  setTimeout(() => {
    fire.remove();
  }, 12000);
}

// Spawn flames continuously
setInterval(createFire, 500);

// ========== WATER DROPS ANIMATION ==========


function createWaterDrop(container) {
  if (!container) return;

  const drop = document.createElement("span");
  drop.textContent = "💧";

  // Random horizontal offset inside container
  drop.style.left = Math.random() * 40 + "px";

  // Random falling speed
  drop.style.animationDuration = 5 + Math.random() * 6 + "s";

  container.appendChild(drop);

  // Remove after animation
  setTimeout(() => {
    drop.remove();
  }, 12000);
}

// ========== WATER BACKGROUND ==========
const waterContainer = document.querySelector(".water-bg");

function createWater() {
  if (!waterContainer) return;

  const drop = document.createElement("span");
  drop.textContent = "💧";

  // Random horizontal position
  drop.style.left = Math.random() * 100 + "%";

  // Random size
  drop.style.fontSize = 1 + Math.random() * 1.4 + "rem";

  // Random speed
  drop.style.animationDuration = 5 + Math.random() * 5 + "s";

  waterContainer.appendChild(drop);

  // Remove after animation
  setTimeout(() => {
    drop.remove();
  }, 10000);
}

// Spawn continuously
setInterval(createWater, 400);


// ========== CONTACT EMOJI EFFECT (FIXED) ==========
const contactSection = document.querySelector("#contact");
const contactBg = document.querySelector(".contact-bg");

const contactEmojis = ["🤳🏽", "📲", "☎️", "📞", "📳"];

let contactIntervalStarted = false;

function spawnContactEmoji() {
  if (!contactBg) return;

  const emoji = document.createElement("span");
  emoji.textContent =
    contactEmojis[Math.floor(Math.random() * contactEmojis.length)];

  // Position relative to section
  emoji.style.left = Math.random() * 90 + "%";
  emoji.style.top = Math.random() * 90 + "%";

  contactBg.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000);
}

// Start animation only when Contact is visible
const contactObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !contactIntervalStarted) {
      contactIntervalStarted = true;
      setInterval(spawnContactEmoji, 700);
    }
  },
  { threshold: 0.3 }
);

contactObserver.observe(contactSection);

// ========== SKILLS BACKGROUND FLOAT ==========
const skillsBg = document.querySelector(".skills-bg");

function spawnSkillOrb() {
  if (!skillsBg) return;

  const orb = document.createElement("span");

  orb.style.left = Math.random() * 90 + "%";
  orb.style.animationDuration = 10 + Math.random() * 10 + "s";

  skillsBg.appendChild(orb);

  setTimeout(() => orb.remove(), 20000);
}

setInterval(spawnSkillOrb, 1200);

// ========== HERO OPENING ANIMATION ==========
window.addEventListener("load", () => {

  const title = document.querySelector(".hero-title");
  const subtitle = document.querySelector(".hero-subtitle");
  const cta = document.querySelector(".hero-cta");

  if (title) title.classList.add("show");

  setTimeout(() => {
    if (subtitle) subtitle.classList.add("show");
  }, 400);

  setTimeout(() => {
    if (cta) cta.classList.add("show");
  }, 800);

});

// ========== FIRECRACKER HERO ==========
const firecrackerContainer = document.querySelector(".firecracker-bg");

function launchFirecracker() {

  if (!firecrackerContainer) return;

  const rocket = document.createElement("span");
  rocket.textContent = "🧨";
  rocket.classList.add("firecracker-rocket");

  const posX = Math.random() * 80 + 10;

  rocket.style.left = posX + "%";

  const duration = 2;

  rocket.style.animationDuration = duration + "s";

  firecrackerContainer.appendChild(rocket);

  setTimeout(() => {

    const explosion = document.createElement("span");

    explosion.textContent = "🎆";
    explosion.classList.add("firecracker-explosion");

    explosion.style.left = posX + "%";
    explosion.style.top = "45%";

    firecrackerContainer.appendChild(explosion);

    rocket.remove();

    setTimeout(() => {
      explosion.remove();
    }, 1500);

  }, duration * 1000);
}