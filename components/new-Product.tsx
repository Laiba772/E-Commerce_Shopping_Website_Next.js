
import React from 'react'
import ProductCard from './ProductCard';

const ProductsData = [
  {
    img:"/img1.jpg",
    title:"Jacket",
    desc:"Men fleece full-zip jacket",
    rating:4,
    price:"35.00"
  },
  {
    img:"/box3.jpg",
    title:"Shoes",
    desc:"Men's Best Running Shoes",
    rating:3,
    price:"55.00"
  },
  {
    img:"/img9.jpg",
    title:"Wrist-Watch",
    desc:"Smart Watches +",
    rating:4,
    price:"40.00"
  },
  {
    img:"/box7.jpg",
    title:"Heels",
    desc:"Generic Ladies  High Heels",
    rating:3,
    price:"65.00"
  },
  {
    img:"/scndlast.jpg",
    title:"Bags",
    desc:"handles bags purses",
    rating:4,
    price:"25.00"
  },
  {
    img:"/last.jpg",
    title:"Shirt",
    desc:"Mens nylon shirt",
    rating:5,
    price:"45.00"
  },
];

function NewProducts() {
  return (
    <div>
      <div className='container pt-16'>
      <h2 className='font-medium text-2xl pb-4 justify-center flex'>New Products</h2>
      

<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>


{ProductsData.map((item,index)=>(
  <ProductCard
  key={index}
  img={item.img}
  title={item.title}
  desc={item.desc}
  rating={item.rating}
  price={item.price}
  />
))}

    </div>

    </div>
    </div>
  );
};

export default NewProducts
