import React, { useState } from 'react'
import product2 from './img/2.jpg';
import product3 from './img/3.jpg';
function ShopContentGridBottom({product1}) {

    const[items, setItems] = useState(
        [
            {
                id:1, image:product1, header: "Książka", paragraf: "lorem lorem lorem ipsum", anchorText: "cotamjaktam"
            },
            {
                id:2, image:product2, header: "Książka", paragraf: "lorem lorem lorem ipsum", anchorText: "cotamjaktam"
            },
            {
                id:3, image:product3, header: "Książka", paragraf: "lorem lorem lorem ipsum", anchorText: "cotamjaktam"
            },
        ]
    )
  return (
    <>
    {items.map((item)=> (
            <div className='boxBottom' key={item.id}>
            <div className="blokBoxBottom" ><div className='imgBoxBottom'><img src={item.image}/></div>
            <div className='contentBoxBottom'><h1>{item.header}</h1><p>{item.paragraf}</p><a>{item.anchorText}</a></div></div>
           </div>
    ))}

   </>
  )
}

export default ShopContentGridBottom