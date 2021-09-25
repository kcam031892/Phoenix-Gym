const counters = document.querySelectorAll('.counter');
const statistics = document.querySelector('#statistics');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');
let isCounterRun = false;

if (navMenu) {
  navMenu.addEventListener('click', () => {
    const isNavClose = nav.classList.contains('-top-full');
    if (isNavClose) {
      nav.classList.remove('-top-full');
      nav.classList.add('top-0');
      body.classList.add('max-h-screen', 'overflow-hidden');
    } else {
      nav.classList.remove('top-0');
      nav.classList.add('-top-full');
      body.classList.remove('max-h-screen', 'overflow-hidden');
    }
  });
}

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  const windowScrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const windowScrollPos = windowScrollY + windowHeight;

  const statsHeight = statistics.clientHeight;
  const statsTopPosition = statistics.offsetTop;
  const statsOffset = statsHeight + statsTopPosition;
  // const statsScroll = statisticsTopPosition;

  // console.log('stats', windowScrollY);
  // console.log('stats', statsScroll);
  if (windowScrollPos >= statsOffset) {
    if (counters.length > 0) {
      if (!isCounterRun) {
        counters.forEach(generateCounter);
        isCounterRun = true;
      }
    }
  }
});

const generateCounter = (counter) => {
  const count = Number(counter.dataset.count) || 1;
  let current = 0;

  const increment = count / 180;
  function generate() {
    if (current <= count) {
      current += Math.ceil(increment);
      setTimeout(generate, 20);
    } else {
      current = count;
    }
    counter.textContent = current;
  }
  generate();
};
