import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


import slider01 from '../Fotos/tequila/01.jpg'
import slider02 from '../Fotos/tequila/02.jpg'
import slider03 from '../Fotos/tequila/03.jpg'
import slider04 from '../Fotos/tequila/04.jpg'
import slider05 from '../Fotos/tequila/05.jpg'
import slider06 from '../Fotos/tequila/06.png'
import slider07 from '../Fotos/tequila/07.jpg'
import slider08 from '../Fotos/tequila/08.jpg'
import slider09 from '../Fotos/tequila/09.jpg'
import slider10 from '../Fotos/tequila/10.jpg'

const items = [
  {
    src: slider01,
  },
  {
    src: slider02,
  },
  {
    src: slider03,
  },
  {
    src: slider04,
  },
  {
    src: slider05,
  },
  {
    src: slider06,
  }
  ,
  {
    src: slider07,
  }
  ,
  {
    src: slider08,
  }
  ,
  {
    src: slider09,
  }
  ,
  {
    src: slider10,
  }
];

export const Tequila = () => {

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
      <h6 className="camuflaje display-4">
        shuttle
      </h6>

      <h3 className="title-secondary text-center display-4 text-verdesito mb-3 ">
        <span className="text-azulito">Teq</span>uila
      </h3>

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

      <iframe className="col-lg-12 mt-5 height-videos" src="https://www.youtube.com/embed/-hySBmr29n8"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>


    </div>
  )
}
