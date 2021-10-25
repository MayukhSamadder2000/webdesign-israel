import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Brands.scss";

function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='brands' id='brands'>
      <div className='brands__container'>
        <div className='brands__container__heading'>
          Brands We’ve Worked With
        </div>
        <div className='brands__container__content'>
          <Slider className='special__slider' {...settings}>
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/TBjMWLy/c19.png' alt='' />
              </div>
            </div>
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/fFLcJs7/c11.png' alt='' />
              </div>
            </div>{" "}
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/dknB8jq/c12.png' alt='' />
              </div>
            </div>{" "}
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/KX6g4cN/c14.png' alt='' />
              </div>
            </div>{" "}
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/ZdpZhdr/c15.png' alt='' />
              </div>
            </div>
            <div>
              <div className='card'>
                <img src='https://i.ibb.co/BgbTmkH/c18.png' alt='' />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Brands;
