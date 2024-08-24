const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const readMoreContent = btn.previousElementSibling;
    readMoreContent.style.display = readMoreContent.style.display === 'block' ? 'none' : 'block';
    btn.textContent = btn.textContent === 'Read More' ? 'Read Less' : 'Read More';
  });
});
