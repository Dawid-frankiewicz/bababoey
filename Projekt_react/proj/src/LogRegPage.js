import React from 'react';
import Header from './Header';
import LogReg from './LogRegContent';
import Footer from './Foot';

const LogRegPage = () => {
  return (
    <div className='MyColor' style={{index: -3,}}>
      <Header />
   <LogReg/>
      <Footer />
    </div>
  );
};

export default LogRegPage;