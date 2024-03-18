import React from 'react';
import mainImage1 from './img/main1.jpg';
import mainImage2 from './img/main2.jpg';


const MainSection = () => {
  return (
    <div className=" bg-body text-white font-saira img-container flex flex-col justify-center items-center md:grid grid-cols-2 gap-4 justify-items-center h-screen mx-auto pt-16">
      
      <div className="w-80 h-80">
        <img src={mainImage1} alt="" className="shadow w-full h-full object-cover" />
      </div>
      <div className="w-full max-h-64 overflow-auto sm:w-1/2 mt-4 mb-4">
        <p className="font-saira text-6xl text-redish">What is D&D?</p>
        <p className="text-base w-full sm:w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          qui perferendis consectetur cumque tenetur quaerat omnis rem voluptatibus dolor non voluptatem! 
          Facilis voluptates in, sint eligendi soluta consequuntur nemo repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Facilis fugit distinctio numquam libero repellendus dicta doloremque animi placeat tempore harum!
        </p>
      </div>
      <div className="w-80 h-80">
        <img src={mainImage2} alt="" className="shadow w-full h-full object-cover" />
      </div>
      <div className="w-full max-h-64 overflow-auto sm:w-1/2 mt-4 mb-4">
        <p className="font-saira text-6xl text-redish">What is D&D?</p>
        <p className="text-base w-full sm:w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          qui perferendis consectetur cumque tenetur quaerat omnis rem voluptatibus dolor non voluptatem! 
          Facilis voluptates in, sint eligendi soluta consequuntur nemo repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Facilis fugit distinctio numquam libero repellendus dicta doloremque animi placeat tempore harum!
        </p>
      </div>

      
    </div>
  );
};

export default MainSection;