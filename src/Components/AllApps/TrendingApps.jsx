import React from 'react';
import AppsCard from '../AppsCard/AppsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingApps = ({trending}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    
    return (
        <div className='mt-10 mb-20 px-10 lg:px-0'>
            <h2 className='text-3xl font-bold mb-5'>Trending Apps</h2>

            {/* Slider */}
            <div className="slider-container">
                <Slider {...settings}>

                        {
                            trending
                            .sort( (a,b) => a.rating < b.rating ? 1 : -1 )
                            .map(app => <AppsCard
                                key={app.id} 
                                app={app}
                                ></AppsCard>)
                        }
                </Slider>
            </div>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    trending
                    .sort( (a,b) => a.rating < b.rating ? 1 : -1 )
                    .map(app => <AppsCard
                        key={app.id} 
                        app={app}
                        ></AppsCard>)
                }
            </div> */}
        </div>
    );
};

export default TrendingApps;