document.addEventListener('DOMContentLoaded', function () {
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
