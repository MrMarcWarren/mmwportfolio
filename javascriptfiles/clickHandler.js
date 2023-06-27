var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function handleClick(e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substr(1);
    var targetElement = document.getElementById(targetId);
    window.scrollTo(0, targetElement.offsetTop);
    return false;
  };
}