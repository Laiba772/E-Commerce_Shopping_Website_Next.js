
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='hidden lg:block'>
        <div className="container">
          <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">

            <Link className='navbar_link relative' href='#'>Home</Link>
            <Link className='navbar_link relative' href='#'>Categories</Link>
            <Link className='navbar_link relative' href='#'>Men&#39;s</Link> 
            <Link className='navbar_link relative' href='#'>Women&#39;s</Link>
            <Link className='navbar_link relative' href='#'>Jewelry</Link>
            <Link className='navbar_link relative' href='#'>Perfume</Link>
            <Link className='navbar_link relative' href='#'>Blog</Link>
            <Link className='navbar_link relative' href='#'>Hot Offers</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
