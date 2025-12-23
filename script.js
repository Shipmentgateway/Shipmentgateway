window.onload = function () {
  setTimeout(() => {
    document.querySelector('.left').classList.add('open');
    document.querySelector('.right').classList.add('open');

    setTimeout(() => {
      document.getElementById('gate').style.display = 'none';
      document.getElementById('site').style.display = 'block';
    }, 1600);

  }, 800);
};
