import React from 'react';
import Header from './Header';
import BlogContent from './BlogContent';
import Footer from './Foot';
import LogReg from './LogRegContent';
const BlogPage = ({toggleModal, modal}) => {
  return (
    <>{modal && (<LogReg toggleModal={toggleModal}/>)}
    <div className='MyColor'>
      <Header  toggleModal = {toggleModal} />
      <BlogContent/>
      <Footer />
    </div></>
  );
};

export default BlogPage;