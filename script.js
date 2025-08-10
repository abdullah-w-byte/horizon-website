// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!name || !email || !phone || !consent) {
    alert("Please fill all required fields and give consent.");
    return;
  }

  alert("Form submitted successfully! (Here you would send it to EmailJS or your server)");
  this.reset();
});
