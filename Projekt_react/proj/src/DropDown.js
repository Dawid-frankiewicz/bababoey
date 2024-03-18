import React, { useState } from 'react'

function DropDown({handleCategoryChange}) {
    const[dropDown, setDropDown] = useState(false);
    const toggleDrop = ()=>
    {
        setDropDown(!dropDown);
    }
  return (
    <div className='ShopContentButtons'>
   <ul>
    <li> <button onClick = {toggleDrop}>menu</button></li>
    {dropDown && (
    <>
        <li><button onClick={() => handleCategoryChange('all')}>wszystko</button></li>
        <li><button onClick={() => handleCategoryChange('dice')}>kostki</button></li>
        <li><button onClick={() => handleCategoryChange('book')}>książki</button></li>
        <li><button onClick={() => handleCategoryChange('figure')}>figurki</button></li></>
   
     )} </ul>
</div>
  )
}

export default DropDown