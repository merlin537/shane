// Shane Yusuf profile data
const profileData = {
  fullName: "Mr. Shane Yusuf",
  title: "Software Engineer",
  position: "Field Officer",
  image: "shane.jpg",
  bio: `Shane Yusuf is a young, ambitious university student based in Kenya with a strong interest in both technology and entrepreneurship. 
  He is passionate about creating impactful digital solutions, particularly web applications connected to real-world needs—such as educational platforms, 
  job listing systems, and task management tools.

  Shane is currently building and managing multiple projects, including a website for APESE ERE with structured pages like About, Mission, Projects, and Donate. 
  He’s also actively learning front-end development using HTML, CSS, JavaScript, and backend integrations like Google Sheets, while exploring payment systems such as M-PESA.`,
  social: {
    twitter: "https://twitter.com/shaneyusuf",
    facebook: "https://facebook.com/shaneyusuf",
    instagram: "https://instagram.com/shaneyusuf"
  }
};

// Inject profile data into the DOM
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".intro-heading").innerHTML = `MEET ${profileData.fullName} <span class="highlight"></span>`;
  document.querySelector(".subtitle").textContent = profileData.title;
  document.querySelector(".info-box h2").textContent = profileData.fullName;
  document.querySelector(".info-box h3").textContent = profileData.position;
  document.querySelector(".info-box p").textContent = profileData.bio;
  document.querySelector(".photo-box img").src = profileData.image;

  // Social links
  const socialIcons = document.querySelector(".social-icons");
  socialIcons.innerHTML = `
    <a href="${profileData.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="${profileData.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="${profileData.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
  `;
});
