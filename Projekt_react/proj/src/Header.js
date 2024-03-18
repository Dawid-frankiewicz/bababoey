import React from 'react';
import logo from './img/logo.png'; 
import image1 from './img/1920x600-fansitekit.jpg';
import imageCart from './img/cart.png';
import imageReg from './img/register.png'
import { Link } from 'react-router-dom';


const Header = ({toggleModal}) => {
  return (
    <header className=" bg-body text-white font-saira pu-12 grid grid-rows-2 gap-y-0.5 py-2 bg-cover bg-center bg-no-repeat h-80 pb-12" style={{ backgroundImage: `url(${image1})`, clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}>
      <div className="container flex justify-between items-center mx-auto px-4 md:px-14 lg:px-24 w-full pb-12">
      <Link to="/">
          <img src={logo} className="w-32 h-32" alt="" />
        </Link>
        <div className="hidden md:flex space-x-12 items-center">
        <Link className="hover:text-redish" to="/">Home</Link>
          <Link className="hover:text-redish" to="/blog">Blog</Link>
          <Link className="hover:text-redish" to="/contact">Contact</Link>
          <a href="#" className="hover:text-redish">Locations</a>
          <Link className="hover:text-redish" to="/shop">Shop</Link>
   
          
       

        </div>
        
        <div className='flex justufy-between gap-2'>
          <img src={imageReg}  onClick={toggleModal} style={{cursor: 'pointer'}}></img>
        {/* <button className="px-6 py-2 bg-redish font-bold rounded-lg" onClick={toggleModal}>Sign up</button> */}
          <img src={imageCart} style={{cursor: 'pointer'}} ></img>
        </div>

        <div className="md:hidden" id="Hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
        </div>
       
      </div>
      <div className="hidden lg:flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full mt-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex">
            <p className="font-saira text-8xl">Play like <br /> a <span className="text-redish inline font-saira text-8xl whitespace-pre">champion</span></p>
          </div>
          <svg width="188" height="200" viewBox="0 0 188 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-size ml-4">
                    <g clipPath="url(#clip0_3_119)">
                    <path d="M41.8104 84.0078L0.47 144.902C-0.736333 146.855 0.509167 149.395 2.79258 149.645L84.3611 158.266L41.8104 84.0078ZM2.90225 123.215L32.3908 75.4219L2.3735 57.4609C1.32775 56.8359 0 57.5859 0 58.8008V122.398C0 123.973 2.07192 124.559 2.90225 123.215ZM7.14792 165.469L83.2879 199.711C85.3638 200.668 87.7333 199.152 87.7333 196.875V171.223L8.00958 162.512C6.26667 162.316 5.5695 164.695 7.14792 165.469ZM38.9591 64.7734L70.265 8.9375C71.9648 6.17969 68.8589 2.98047 66.0428 4.58594L6.97558 43.1055C6.00817 43.7383 6.0395 45.1602 7.0265 45.7539L38.9591 64.7734ZM94 68.75H136.774L99.3384 2.97656C98.1125 0.992188 96.0563 0 94 0C91.9438 0 89.8875 0.992188 88.6616 2.97656L51.2261 68.75H94ZM185.627 57.4609L155.609 75.4258L185.098 123.219C185.924 124.562 188 123.977 188 122.398V58.8008C188 57.5859 186.672 56.8359 185.627 57.4609ZM149.041 64.7734L180.974 45.75C181.964 45.1562 181.992 43.7344 181.024 43.1016L121.957 4.58594C119.141 2.98047 116.035 6.17969 117.735 8.9375L149.041 64.7734ZM179.99 162.512L100.267 171.219V196.871C100.267 199.152 102.636 200.664 104.712 199.707L180.852 165.465C182.431 164.695 181.733 162.316 179.99 162.512ZM146.19 84.0078L103.643 158.266L185.211 149.645C187.495 149.391 188.74 146.855 187.534 144.902L146.19 84.0078ZM94 81.25H54.6649L94 149.902L133.335 81.25H94Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3_119">
                    <rect width="188" height="200" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
        </div>
      </div>
      <div className="hidden flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full mt-8 mb-8 ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit at nihil, quod saepe quaerat amet? Dolores nam voluptatum quia magnam quos atque quibusdam sed. Consequuntur animi ipsum rerum deleniti adipisci quidem possimus, repudiandae, rem eveniet ad ut earum aliquam unde beatae. Ut cum deserunt dignissimos pariatur. Magnam nostrum qui officiis quaerat culpa nam, distinctio architecto eius veniam, blanditiis, aliquid cumque iusto quam soluta sapiente. Tempore cum magni non, eos adipisci eius minus. Mollitia sit quaerat ab nam ea aliquam! Asperiores officia dolore iusto cumque. Laboriosam consequuntur, fuga nostrum deleniti, aliquid molestias necessitatibus et, quos placeat labore qui quia quidem!</p>
      </div>
    </header>
  );
};

export default Header;