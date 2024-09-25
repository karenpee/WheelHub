$(document).ready(function() {
    const $carousel = $('.carousel');
    const $slider = $('.slider');
    const $slides = $('.carousel-image');

    const slideWidth = $slides.width();
    const slideHeight = $slides.height();

    const slidesCount = $slides.length;

    const totalWidth = slideWidth * slidesCount;

    $carousel.css({
      width: slideWidth,
      height: slideHeight,
      overflow: 'hidden'
    });

    $slider.css({
      width: totalWidth,
      display: 'flex',
      position: 'relative',  
      transition: 'transform 0.5s ease-in-out'
    });

    $slides.css({
      width: slideWidth,
      height: slideHeight,
      flex: '0 0 auto'
    });

    let currIndex = 0;

    function moveSlider() {
      currIndex++;
      if (currIndex >= slidesCount) {
        currIndex = 0;
      }

      const newMarginLeft = -currIndex * slideWidth;

      $slider.css({
        transform: `translateX(${newMarginLeft}px)`
      });
    }

    setInterval(() => {
      moveSlider();
    }, 2000);
  });