import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "../../projects/projectlist";
import "./Clients.scss";

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className='clients' id='testimonies'>
      <div className='clients__container'>
        <div className='clients__container__heading'>What Our Clients Say?</div>
        <div className='clients__container__content'>
          <Slider className='special__slider' {...settings}>
            {testimonials.map((item, index) => {
              return (
                <div key={index}>
                  <div className='card'>
                    <div className='card__message'>{item.message}</div>
                    <div className='card__name'> ~ {item.client}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Clients;
