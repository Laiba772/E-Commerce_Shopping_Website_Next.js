
import React from 'react'
import Image from 'next/image';

function Testimonial() {
  return (
    <div>
        <div className='container pt-16 pb-16 grid-cols-2  '>
            <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
            <div className='grid lg:grid-cols-[300px,1fr] gap-4 '>
                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0 bg-slate-200'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <Image
                        className="rounded-full inline-block size-"
                        src="/anime-girl.jpg"
                        width={80}
                        height={80}
                        alt="dp"
                        />
                        <h2 className='text-gray-500 font-black text-[20px]'>Laiba Naz.</h2>
                        <p>CEO & Founder Invision</p>
                        {/* <Image
                        className="inline-block py-2"
                        src="/anime-girl"
                        width={30}
                        height={30}
                        alt="quotes"
                        /> */}
                        <p className='max-w-[200px] text-gray-500'>
                        I was a little unsure about the sizing, but the customer service team at XYZ Shop was so helpful. They guided me to the perfect size, and the exchange process was quick and hassle-free. I’m definitely coming back for more!.
                        </p>
                    </div>
                </div>

                <div className='bg-red-400 bg-[url(/hero-image.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                <div className='bg-[#ffffffab] main-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                    <button className='bg-blackish text-white p-2 rounded-md'>25% DISCOUNT</button>
                    <h2 className='font-extrabold text-2xl text-[#272727]'>Beauty Products</h2>
                    <p className='text-gray-500 text-[20px]'>Starting @ $20 <b>Shop Now</b></p>
                </div>
                </div>




            </div>
        </div>
    </div>
  )
}

export default Testimonial
