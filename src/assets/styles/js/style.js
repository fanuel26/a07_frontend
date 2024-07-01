window.addEventListener('scroll', function() {
    const box = document.querySelector('#fleche');
    
    // console.log(box)
    if (window.scrollY > 10) {
      box.classList.remove('arrow-up')
    } else {
      box.classList.add('arrow-up')
    }
  });