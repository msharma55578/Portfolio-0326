/* Project card flip */
document.querySelectorAll('.project-flip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = document.getElementById(btn.dataset.target);
    if (card) card.classList.add('flipped');
  });
});

document.querySelectorAll('.project-close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = document.getElementById(btn.dataset.target);
    if (card) card.classList.remove('flipped');
  });
});
