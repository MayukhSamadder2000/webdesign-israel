import React from "react";
import "./Services.scss";

function Services() {
  return (
    <div className='services' id='services'>
      <div className='services__container'>
        <div className='heading'>Our Services</div>
        <div className='services__container__content'>
          <div className='service'>
            <div className='left'>
              <div className='image__container'>
                <img src='https://i.ibb.co/wCSwrz2/Design-Service.jpg' alt='' />
                <div className='text'>
                  <div className='text1'>0</div>
                  <div className='text2'>1</div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right__container'>
                <div className='heading'>Design Services</div>
                <div className='text'>
                  Design plays a significant role in the UI/UX experience
                  online. Creating technology and websites that are easily
                  navigated is nonnegotiable. We know how to create simple sites
                  that get the job done as well as websites that have a strong
                  “wow” factor.
                </div>
              </div>
            </div>
          </div>
          <div className='service'>
            <div className='left'>
              <div className='image__container'>
                <img src='https://i.ibb.co/wCSwrz2/Design-Service.jpg' alt='' />
                <div className='text'>
                  <div className='text1'>0</div>
                  <div className='text3'>2</div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right__container'>
                <div className='heading'>Development Services</div>
                <div className='text'>
                  Our talented web and software developers have tackled major
                  projects and focus on creating effective solutions to even the
                  most complex problems. Whether you need a simple information
                  site, E-commerce features, or unique integrations, you can
                  rest assured our team can handle it.
                </div>
              </div>
            </div>
          </div>
          <div className='service'>
            <div className='left'>
              <div className='image__container'>
                <img src='https://i.ibb.co/wCSwrz2/Design-Service.jpg' alt='' />
                <div className='text'>
                  <div className='text1'>0</div>
                  <div className='text4'>3</div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right__container'>
                <div className='heading'>Branding Services</div>
                <div className='text'>
                  Provide sophisticated branding solutions since 2013. We know
                  your branding needs to be on point to get anywhere in todays
                  marketplace. We make sure that our deliverables provide you
                  the very best in the class appearance. Don't settle for less.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
