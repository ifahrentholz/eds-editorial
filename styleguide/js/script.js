document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.ls-sidebar-element');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const app = document.querySelector('.test');
        app.innerHTML = xhr.responseText;
        console.log('succesfull');
      } else {
        console.error('error');
      }
    }
  };
  xhr.open('GET', 'main.html', true);
  xhr.send();
});
