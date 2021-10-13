import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import slider01 from '../Fotos/slider/01.jfif'
import slider02 from '../Fotos/slider/02.jfif'
import slider03 from '../Fotos/slider/03.jpg'
import slider04 from '../Fotos/slider/04.jpg'
import slider05 from '../Fotos/slider/05.jpg'
import slider06 from '../Fotos/slider/06.jpg'

const items = [
  {
    src: slider01,
    altText: 'We Pick You Up',
    caption: 'We Pick You Up'
  },
  {
    src: slider02,
    altText: 'We Pick You Up',
    caption: 'We Pick You Up'
  },
  {
    src: slider03,
    altText: 'You Will Enjoy It In a Big Way',
    caption: 'You Will Enjoy It In a Big Way'
  },
  {
    src: slider04,
    altText: 'You Will Have The Time of Your Life',
    caption: 'You Will Have The Time of Your Life'
  },
  {
    src: slider05,
    altText: 'Unique Experiences',
    caption: 'Unique Experiences'
  },
  {
    src: slider06,
    altText: 'Wonderful Memories',
    caption: 'Wonderful Memories'
  }  
];

export const Slide = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-slider-size" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });


  return (

    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>

  )
}
