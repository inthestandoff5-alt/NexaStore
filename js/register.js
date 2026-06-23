// ─── FIREBASE IMPORT ───
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// ─── FIREBASE CONFIG ───
const firebaseConfig = {
  apiKey: "AIzaSyABsnOPlmDrg0cVbk7iPyYp3wgCE2z3TOA",
  authDomain: "register-and-login-fc424.firebaseapp.com",
  projectId: "register-and-login-fc424",
  storageBucket: "register-and-login-fc424.firebasestorage.app",
  messagingSenderId: "941127939639",
  appId: "1:941127939639:web:56ddd1eb7ab96428e071b2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ─── PARTICLES ANIMATION ───
function initParticles() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W = (canvas.width = window.innerWidth);
  let H = (canvas.height = window.innerHeight);

  const colors = [
    "rgba(59,130,246,",
    "rgba(139,92,246,",
    "rgba(6,182,212,",
    "rgba(236,72,153,",
  ];

  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.8 + 0.4,
    dx: (Math.random() - 0.5) * 0.4,
    dy: -(Math.random() * 0.5 + 0.2),
    alpha: Math.random() * 0.5 + 0.15,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener("resize", () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ─── PASSWORD STRENGTH ───
function initPasswordStrength() {
  const input  = document.getElementById("userPassword");
  const bar    = document.getElementById("strengthBar");
  const label  = document.getElementById("strengthLabel");
  const hint   = document.getElementById("strengthHint");
  const toggle = document.getElementById("togglePw");
  const eye    = document.getElementById("eyeIcon");
  if (!input) return;

  function calcStrength(pw) {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8)           score++;
    if (pw.length >= 12)          score++;
    if (/[A-Z]/.test(pw))         score++;
    if (/[0-9]/.test(pw))         score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  }

  const levels = [
    { label: "Parol kuchliligi", hint: "",                color: "transparent",                                    pct: "0%"   },
    { label: "Juda zaif",        hint: "Kuchaytiring",    color: "#ef4444",                                        pct: "20%"  },
    { label: "Zaif",             hint: "Uzunroq qiling",  color: "#f97316",                                        pct: "40%"  },
    { label: "O'rtacha",         hint: "Yaxshi boshlanish",color: "#f59e0b",                                       pct: "60%"  },
    { label: "Kuchli",           hint: "Deyarli ideal!",  color: "#22c55e",                                        pct: "80%"  },
    { label: "Juda kuchli 💪",   hint: "Mukammal!",       color: "linear-gradient(90deg,#22c55e,#3b82f6)",         pct: "100%" },
  ];

  input.addEventListener("input", () => {
    const lv = levels[calcStrength(input.value)] || levels[0];
    bar.style.width      = lv.pct;
    bar.style.background = lv.color;
    label.textContent    = lv.label;
    hint.textContent     = lv.hint;
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const show = input.type === "password";
      input.type     = show ? "text" : "password";
      eye.className  = show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    });
  }
}

// ─── INPUT GLOW EFFECT ───
function initInputGlows() {
  document.querySelectorAll(".input-wrapper input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.filter = "drop-shadow(0 0 8px rgba(59,130,246,0.25))";
    });
    input.addEventListener("blur", () => {
      input.parentElement.style.filter = "";
    });
  });
}

// ─── FORM: VALIDATION + FIREBASE REGISTER ───
function initForm() {
  const form    = document.getElementById("registerForm");
  const nameEl  = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");
  const pwEl    = document.getElementById("userPassword");
  const btn     = document.getElementById("submitBtn");
  const msgEl   = document.getElementById("formMessage");
  if (!form) return;

  // Helper: show/clear message
  function showMsg(text, type) {
    msgEl.textContent = text;
    msgEl.className   = "form-message " + type;
  }
  function clearMsg() {
    msgEl.textContent = "";
    msgEl.className   = "form-message";
  }

  // Helper: field border feedback
  function markField(el, valid) {
    el.style.borderColor  = valid ? "rgba(34,197,94,0.5)"  : "rgba(244,63,94,0.6)";
    el.style.boxShadow    = valid ? "0 0 0 3px rgba(34,197,94,0.1)" : "0 0 0 3px rgba(244,63,94,0.12)";
  }

  // Real-time blur validation
  if (nameEl)  nameEl.addEventListener("blur",  () => markField(nameEl,  nameEl.value.trim().length >= 2));
  if (emailEl) emailEl.addEventListener("blur", () => markField(emailEl, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())));

  // ─── SUBMIT ───
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearMsg();

    const name  = nameEl  ? nameEl.value.trim()  : "";
    const email = emailEl ? emailEl.value.trim()  : "";
    const pw    = pwEl    ? pwEl.value            : "";

    // --- Client-side validation ---
    if (name.length < 2) {
      showMsg("⚠️  Ism kamida 2 ta harf bo'lishi kerak.", "error");
      nameEl && nameEl.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg("⚠️  Email manzil noto'g'ri formatda.", "error");
      emailEl && emailEl.focus();
      return;
    }
    if (pw.length < 6) {
      showMsg("⚠️  Parol kamida 6 ta belgi bo'lishi kerak.", "error");
      pwEl && pwEl.focus();
      return;
    }

    // --- Loading state ---
    btn.disabled = true;
    btn.classList.add("loading");
    const btnIcon = btn.querySelector(".btn-content i");
    if (btnIcon) btnIcon.className = "";

    try {
      // ─── FIREBASE: Create user ───
      const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
      const user = userCredential.user;

      // ─── FIREBASE: Save display name ───
      await updateProfile(user, { displayName: name });

      // Save to localStorage for app-wide access
      localStorage.setItem(
        "nexa_current_user",
        JSON.stringify({ name, email, uid: user.uid })
      );
      localStorage.setItem("nexastore_logged_in", "true");

      // --- Success ---
      btn.disabled = false;
      btn.classList.remove("loading");
      if (btnIcon) btnIcon.className = "fa-solid fa-check";

      showMsg(`✅  Xush kelibsiz, ${name}! Akkauntingiz muvaffaqiyatli yaratildi.`, "success");

      // Redirect after 1.8s
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1800);

    } catch (err) {
      // --- Firebase error messages (Uzbek) ---
      const firebaseErrors = {
        "auth/email-already-in-use":    "❌  Bu email allaqachon ro'yxatdan o'tgan!",
        "auth/invalid-email":           "❌  Email manzil noto'g'ri formatda!",
        "auth/weak-password":           "❌  Parol juda zaif. Kuchliroq parol tanlang!",
        "auth/network-request-failed":  "❌  Internet ulanishini tekshiring va qaytadan urining.",
        "auth/too-many-requests":       "❌  Juda ko'p urinish. Biroz kutib, qayta urining.",
        "auth/operation-not-allowed":   "❌  Email ro'yxatdan o'tish hozircha o'chirilgan.",
      };

      // Restore button
      btn.disabled = false;
      btn.classList.remove("loading");
      if (btnIcon) btnIcon.className = "fa-solid fa-rocket";

      showMsg(
        firebaseErrors[err.code] || `❌  Xatolik: ${err.message}`,
        "error"
      );
    }
  });
}

// ─── INIT ───
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initPasswordStrength();
  initInputGlows();
  initForm();
});
