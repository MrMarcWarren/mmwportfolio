const hoverText = document.getElementById('hoverText');
const circle = document.getElementById('circle');
const hiddenText = document.getElementById('hiddenText');

hoverText.addEventListener('mouseenter', () => {
  circle.style.display = 'block';
  circle.style.transform = 'scale(3)';
  hiddenText.style.opacity = 1;
});

hoverText.addEventListener('mouseleave', () => {
  circle.style.transform = 'scale(1)';
  setTimeout(() => {
    circle.style.display = 'none';
    hiddenText.style.opacity = 0;
  }, 200);
});

hoverText.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = x - circle.clientWidth / 2 + 'px';
  circle.style.top = y - circle.clientHeight / 2 + 'px';
});
