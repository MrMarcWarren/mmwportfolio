document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
  });


function changeText(element) {
  element.style.opacity = 0;
  setTimeout(function() {
    element.textContent = "I'm Batman,";
    element.classList.add("batman");
    element.style.opacity = 1;
  }, 500);
    

}
function restoreText(element) {
  element.style.opacity = 0;
  setTimeout(function() {
    element.textContent = "I'm Warren,";
    element.classList.remove("batman");
    element.style.opacity = 1;
  }, 500); 
}