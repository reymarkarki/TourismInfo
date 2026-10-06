/* contact.js — contact cards + Formspree form for circuits.html
   (copied from script.js so this page doesn't need the whole homepage script) */
const FORMSPREE_URL = "https://formspree.io/f/mljdkqkz";

(function () {
  /* contact info cards */
  const grid = document.getElementById("contactGrid");
  if (grid && typeof CONTACT_CARDS !== "undefined") {
    CONTACT_CARDS.forEach((c) => {
      const el = document.createElement("div");
      el.className = "contact-card";
      el.innerHTML = `<div class="label">${c.label}</div><div class="value">${c.value}</div>`;
      grid.appendChild(el);
    });
  }

  /* form */
  const form = document.getElementById("contactForm");
  if (!form) return;
  const mail = (typeof CONTACT_CARDS !== "undefined" && CONTACT_CARDS.find((c) => /email/i.test(c.label))) || null;
  const to = mail ? mail.value : "";

  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("role", "status");
  form.appendChild(status);
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = new FormData(form);

    if (!FORMSPREE_URL) {
      const body = "Name: " + f.get("name") + "\nEmail: " + f.get("email") + "\nMobile: " + (f.get("phone") || "-") + "\n\n" + f.get("message");
      location.href = "mailto:" + to + "?subject=" + encodeURIComponent("DRT Tourism: " + f.get("topic")) + "&body=" + encodeURIComponent(body);
      return;
    }

    btn.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    try {
      const res = await fetch(FORMSPREE_URL, { method: "POST", body: f, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("bad response");
      form.reset();
      status.classList.add("ok");
      status.textContent = "Message sent. The tourism office will get back to you.";
    } catch (err) {
      status.classList.add("err");
      status.textContent = "Could not send your message. Please try again or email us directly.";
    } finally {
      btn.disabled = false;
    }
  });
})();