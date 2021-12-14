import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../images/slider/9990.png';
import sliderImage2 from '../images/slider/9991.png';
import sliderImage3 from '../images/slider/9992.png';
import sliderImage4 from '../images/slider/9993.png';
import sliderImage5 from '../images/slider/9994.png';
import sliderImage6 from '../images/slider/9995.png';
import sliderImage7 from '../images/slider/9996.png';
import sliderImage8 from '../images/slider/9997.png';
import sliderImage9 from '../images/slider/9998.png';
import sliderImage10 from '../images/slider/9999.png';
import sliderImage11 from '../images/slider/10000.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='image__slider'>
        <div className='container'>
          <div className='slider__wrapper'>
            <Slider {...settings}>
              <div className='mx-2'>
                <img
                  src={sliderImage1}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage2}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage3}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage4}
                  alt=''
                  className='slider__single__image'
                />
              </div>
              <div className='mx-2'>
                <img
                  src={sliderImage5}
                  alt=''
                  className='slider__single__image'
                />
              </div>
              <div className='mx-2'>
                <img
                  src={sliderImage6}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage7}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage8}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage9}
                  alt=''
                  className='slider__single__image'
                />
              </div>
              <div className='mx-2'>
                <img
                  src={sliderImage10}
                  alt=''
                  className='slider__single__image'
                />
              </div>

              <div className='mx-2'>
                <img
                  src={sliderImage11}
                  alt=''
                  className='slider__single__image'
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
