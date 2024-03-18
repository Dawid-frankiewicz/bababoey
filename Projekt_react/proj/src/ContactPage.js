import React from 'react';
import Header from './Header';
import ContactContent from './ContactContent';
import Footer from './Foot';
import LogReg from './LogRegContent';
const ContactPage = ({toggleModal, modal}) => {
  return (<> {modal && (<LogReg toggleModal={toggleModal}/>)}
    <div className='MyColor' style={{index: -3,}}>
      <Header toggleModal = {toggleModal}/>
   <ContactContent ></ContactContent>
      <Footer />
    </div></>
  );
};

export default ContactPage;