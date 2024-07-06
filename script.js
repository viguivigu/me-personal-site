function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight  ||document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth||  document.documentElement.clientWidth)
  );
}

function onScroll() {
  const block = document.getElementById('thebuggyone');
  if (isElementInViewport(block)) {
    block.classList.add('animation'); 
  }
}

function onScroll1() {
  const block = document.getElementById('prefin');
  if (isElementInViewport(block)) {
    block.classList.add('animation1'); 
  }
}

function onScroll2() {
  const block = document.getElementById('thefin');
  if (isElementInViewport(block)) {
    block.classList.add('animation2'); 
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', onScroll1);
window.addEventListener('scroll', onScroll2);