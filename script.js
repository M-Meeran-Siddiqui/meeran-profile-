//  toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//  .scroll . sections . active . link
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a ");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  //  sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //  remove toggle  icon and navabar when click  navbar when click navbar link (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


// Read more effect--->
// Get all read more buttons
let readMoreBtns = document.querySelectorAll(".read-more-btn");

//Loop through all buttons and add click event to each
readMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Get the parent container of the button
        let parent = btn.parentElement;

        // Get the dots and more-content within the parent container
        let dots = parent.querySelector(".dots");
        let moreContent = parent.querySelector(".more-content");

        // Toggle content visibility
        if (moreContent.style.display === "none") {
            moreContent.style.display = "inline";
            dots.style.display = "none"; // Remove dots
            btn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            dots.style.display = "inline"; // Show dots again
            btn.textContent = "Read More";
        }
    });
});



// scroll reveal----->
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .projects-box, .front-end-apps-box, certificates-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js----->
document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed(".multiple-text", {
    strings: [
      "Aspiring Front-End Developer",
      "UI/UX Enthusiast",
      "Junior JavaScript Developer",
      "Web Development Enthusiast",
      "React Beginner",
      "Responsive Design Learner",
      "Game Development Learner",
      "Tech Innovator (Beginner)",
      "Problem-Solving Enthusiast",
      "Full-Stack Aspirant",
      "Database Enthusiast",
      "AI Tools Explorer",
      "Prompt Engineering Enthusiast",
      "Version Control Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

// Email js Working--->
// Initialize EmailJS with your Public Key
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("H47EOtkXOHrnjWG2p"); // Replace with your actual EmailJS Public Key
});

// Attach event listener to form
document.getElementById("emailForm").onsubmit = function (event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate input fields
  if (!name || !email || !subject || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Prepare email parameters
  const templateParams = {
    to_name: "Meeran Siddiqui", // Your name or recipient's name
    from_name: name,
    email: email,
    mobile: mobile,
    subject: subject,
    message: message,
  };

  // Send the email using EmailJS
  emailjs
    .send("service_x3ixxd4", "template_xblply9", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Email sent successfully!");
        document.getElementById("emailForm").reset(); // Reset form after submission
      },
      function (error) {
        console.error("FAILED...", error);
        alert("❌ Failed to send email. Please try again.");
      }
    );
};

// Need to update after completion-->
document.getElementById('spotify-content').lastElementChild.addEventListener('click', function(event) {
  event.preventDefault(); // prevents page reload
  alert("🚧 This project is currently under development. Stay tuned for updates, and check out my other completed projects!");
});
