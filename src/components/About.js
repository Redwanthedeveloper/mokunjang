import React from 'react';
import aboutImage from '../images/about.png';
const About = () => {
  return (
    <>
      <div className='about' id='about'>
        <div className='container'>
          <div className='about__wrapper'>
            <div className='about__left'>
              <h1>About Us</h1>
              <p>
                ToadleToadle is a creative NFT community that encourages to
                connect people by recalling, building and sharing each and every
                one of their memories.
                <br />
                <br />
                Our unique holder will be announced as "Toadlers" and we will
                strengthen our NFT and Crypto community together. Every
                "Toadler's" support and engagement will be a tremendously
                valuable fuel to developing and exporting our future projects.
              </p>
            </div>
            <div className='about__right'>
              <img src={aboutImage} alt={aboutImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
