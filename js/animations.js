/* Scroll Reveal */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

/* Skill Bars — animate on scroll, fire-once, stagger across all bars */
const skillBars = document.getElementById('skills-bars');
if (skillBars) {
  const fills = skillBars.querySelectorAll('.skill-fill');
  fills.forEach((fill, i) => {
    fill.style.transitionDelay = (i * 0.1) + 's';
  });

  const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
        });
        barsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  barsObserver.observe(skillBars);
}

/* Tech Chips — pop in on scroll, fire-once, 60ms stagger */
const chipsContainer = document.getElementById('skills-chips');
if (chipsContainer) {
  const chips = chipsContainer.querySelectorAll('.chip');
  chips.forEach((chip, i) => {
    chip.style.transitionDelay = (i * 0.06) + 's';
  });

  const chipsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chips.forEach(chip => chip.classList.add('visible'));
        chipsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  chipsObserver.observe(chipsContainer);
}

/* Profile Image Fallback */
const profileImg = document.getElementById('profile-img');
if (profileImg) {
  profileImg.onerror = () => {
    profileImg.classList.add('hidden');
  };
}

/* Timeline entries — slide up on scroll, fire-once, per-entry */
const timelineEntries = document.querySelectorAll('.timeline-reveal');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

timelineEntries.forEach(el => timelineObserver.observe(el));

/* Project cards — slide up on scroll, fire-once, per-card */
const projectCards = document.querySelectorAll('.project-reveal');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

projectCards.forEach(el => projectObserver.observe(el));
