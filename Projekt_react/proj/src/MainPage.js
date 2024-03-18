import React from 'react';
import Header from './Header';
import MainSection from './MainSection'; // Specyficzny komponent dla strony głównej
import Footer from './Foot';
import { useState } from 'react';
import LogReg from './LogRegContent';
const MainPage = ({toggleModal, modal}) => {
  

  return (
    <div className='noScroll'>
    {modal && (<LogReg toggleModal={toggleModal}/>)}
    <div className='MyColor'>
      <Header  toggleModal = {toggleModal} />
      <MainSection ></MainSection>
      <Footer />
    </div>
    </div> 
  );
};

export default MainPage;