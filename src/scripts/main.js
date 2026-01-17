'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  wall.addEventListener('click', (e) => {
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    let offsetLeft = e.clientX - spiderWidth / 2;
    let offsetTop = e.clientY - spiderHeight / 2;

    offsetLeft = Math.max(
      0,
      Math.min(offsetLeft, wall.clientWidth - spiderWidth),
    );

    offsetTop = Math.max(
      0,
      Math.min(offsetTop, wall.clientHeight - spiderHeight),
    );

    spider.style.left = offsetLeft + 'px';
    spider.style.top = offsetTop + 'px';
  });
});
