document.addEventListener('DOMContentLoaded', function () {
  const checkboxCover = document.getElementById('checkbox-cover');
  const checkboxPage1 = document.getElementById('checkbox-page1');
  const checkboxPage2 = document.getElementById('checkbox-page2');

  const cover = document.querySelector('.cover');
  const book = document.querySelector('.book');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');

  function applyTransition(element) {
    element.style.transition = 'transform 1.5s';
  }

  function removeTransition(element) {
    element.style.transition = '';
  }

  checkboxCover.addEventListener('change', function () {
    applyTransition(cover);
    if (this.checked) {
      book.style.transform = 'translateX(200px)';
      cover.style.transform = 'rotateY(-180deg)';
      cover.style.zIndex = '1';
    } else {
      book.style.transform = 'translateX(0)';
      cover.style.transform = 'rotateY(0deg)';
      cover.style.zIndex = '4';
    }
  });

  checkboxPage1.addEventListener('change', function () {
    applyTransition(page1);
    if (this.checked) {
      page1.style.transform = 'rotateY(-180deg)';
      page1.style.zIndex = '2';
    } else {
      page1.style.transform = 'rotateY(0deg)';
      page1.style.zIndex = '3';
    }
  });

  checkboxPage2.addEventListener('change', function () {
    applyTransition(page2);
    if (this.checked) {
      page2.style.transform = 'rotateY(-180deg)';
      page2.style.zIndex = '3';
    } else {
      page2.style.transform = 'rotateY(0deg)';
      page2.style.zIndex = '2';
    }
  });

  // Apply transition to elements when the page loads
  applyTransition(cover);
  applyTransition(page1);
  applyTransition(page2);
});
