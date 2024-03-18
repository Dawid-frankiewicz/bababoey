import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './MainPage';
import ShopPage from './ShopPage';
import ContactPage from './ContactPage';
import LogRegPage from './LogRegPage';
import BlogPage from './BlogPage';
import { useState } from 'react';

const App = () => {

  const[modal, setModal] = useState(false);

if(modal)
{
   document.body.classList.add('active-modal');
}
else
{
   document.body.classList.remove('active-modal');
}

const toggleModal = ()=>
{
    setModal(!modal);
    console.log(modal);
}
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<ShopPage  toggleModal ={ toggleModal} modal ={modal} />} />
        <Route path="/" element={<HomePage toggleModal ={ toggleModal} modal ={modal} />} />
        <Route path="/logreg" element={<LogRegPage toggleModal ={ toggleModal} modal ={modal} />} />
        <Route path="/blog" element={<BlogPage toggleModal ={ toggleModal} modal ={modal} />} />
        <Route path="/contact" element={<ContactPage toggleModal ={ toggleModal} modal ={modal} />} />
      </Routes>

    </Router>
  );
};
export default App;
