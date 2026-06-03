import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center bg-blue-400 text-white p-6'>
            <h1 className='font-mono text-3xl'><a href="#">NovaCart</a></h1>
            <ul className='flex justify-between items-center gap-10'>
                <li><a href="#">HOME</a></li>
                <li><a href="../pages/Products.jsx">PRODUCTS</a></li>
                <li><a href="../pages/About.jsx">ABOUT</a></li>
                <li><a href="../pages/Cart.jsx">CART</a></li>
            </ul>
      </div>
    </div>
  );
}

export default Navbar;
