"use client";

import React from 'react'
import Slider from 'react-slick'
import Slide from './slide';

function Hero() {
    const settings ={
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover: false,
    };

    const slideData=[
        {
            id:0,
            img:'/ban6.jpg',
            title:'Trending Item',
            mainTitle:"Women's Latest Fashion Sale",
            price:"$20",
        },
        {
            id:1,
            img:'/ban7.jpg',
            title:'Trending Accessories',
            mainTitle:"Modern Sunglasses",
            price:"$15",
        },
        {
            id:2,
            img:'/ban4.jpg',
            title:'sale offer',
            mainTitle:"New fashion Summer Sale",
            price:"$30",
        },
    ];

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=> (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
            ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero
