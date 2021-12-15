import React from 'react';
import Slider from 'react-slick';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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

import sliderImage12 from '../images/category/9410.png';
import sliderImage13 from '../images/category/9411.png';
import sliderImage14 from '../images/category/9412.png';
import sliderImage15 from '../images/category/9413.png';
import sliderImage16 from '../images/category/9414.png';
import sliderImage17 from '../images/category/9415.png';
import sliderImage18 from '../images/category/9416.png';
import sliderImage19 from '../images/category/9417.png';
import sliderImage20 from '../images/category/9418.png';
import sliderImage21 from '../images/category/9419.png';
import sliderImage22 from '../images/category/9420.png';

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
    {
      id: 4,
      image: sliderImage4,
    },
    {
      id: 5,
      image: sliderImage5,
    },
    {
      id: 6,
      image: sliderImage6,
    },
    {
      id: 7,
      image: sliderImage7,
    },
    {
      id: 8,
      image: sliderImage8,
    },
    {
      id: 9,
      image: sliderImage9,
    },
    {
      id: 10,
      image: sliderImage10,
    },
    {
      id: 11,
      image: sliderImage11,
    },
  ];

  const images2 = [
    {
      id: 1,
      image: sliderImage12,
    },
    {
      id: 2,
      image: sliderImage13,
    },
    {
      id: 3,
      image: sliderImage14,
    },
    {
      id: 4,
      image: sliderImage15,
    },
    {
      id: 5,
      image: sliderImage16,
    },
    {
      id: 6,
      image: sliderImage17,
    },
    {
      id: 7,
      image: sliderImage18,
    },
    {
      id: 8,
      image: sliderImage19,
    },
    {
      id: 9,
      image: sliderImage20,
    },
    {
      id: 10,
      image: sliderImage21,
    },
    {
      id: 11,
      image: sliderImage22,
    },
  ];

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
            <Tabs>
              <TabList>
                <Tab>Category 1</Tab>
                <Tab>Category 2</Tab>
              </TabList>

              <TabPanel>
                <Slider {...settings}>
                  {images.map((i) => {
                    return (
                      <div key={i.id}>
                        <img
                          src={i.image}
                          alt=''
                          className='slider__single__image'
                        />
                      </div>
                    );
                  })}
                </Slider>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  {images2.map((i) => {
                    return (
                      <div key={i.id}>
                        <img
                          src={i.image}
                          alt=''
                          className='slider__single__image'
                        />
                      </div>
                    );
                  })}
                </Slider>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
