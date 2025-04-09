// Toggle Mobile Menu
document.querySelector('.navbar-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navbar-menu').classList.toggle('active');
});



// In your header.js
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    link.classList.remove('highlight');
    
    // Get just the path portion (without domain)
    const linkPath = new URL(link.href).pathname;
    
    // Special case for home page
    if (path === '/' && linkPath === '/') {
      link.classList.add('highlight');
      return;
    }
    
    // For other pages
    if (path.includes(linkPath)) {
      link.classList.add('highlight');
    }
  });
});