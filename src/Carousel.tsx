import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type IconCarouselProps = {
    icons: { component: React.ComponentType<{ className?: string ; size: number }>}[];
}

const Carousel: React.FC<IconCarouselProps> = ({ icons }) => {
    const CarouselSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    } 

  return (
    <div className="row">
        <Slider {...CarouselSettings} className="d-flex justify-content-center mb-5">
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className="p-2 text-center">
              <IconComponent className="skill-icon" size={40}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;