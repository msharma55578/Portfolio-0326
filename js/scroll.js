const navbar = document.getElementById('navbar');
const navHeight = navbar.offsetHeight;
const progressBar = document.getElementById('scroll-progress');
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-link');

/* === Smooth Scroll for all anchor links === */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const top = target.offsetTop - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* === Scroll Progress Bar === */
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.height = progress + '%';
}

/* === Active Nav Link === */
function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - navHeight - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  updateProgress();
  updateActiveNav();
}, { passive: true });

updateProgress();
updateActiveNav();
