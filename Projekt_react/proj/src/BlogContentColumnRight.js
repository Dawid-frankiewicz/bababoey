import React, { useState } from 'react'
import img2 from './img/blog2.jpg';

function BlogContentColumnRight() {
    const[item, setItem] = useState(
        [
            {
                id:1, image:img2, paragraph: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagns"
            },
            {
                id:2, image:img2, paragraph: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagns"
            },
            {
                id:3, image:img2, paragraph: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagns"
            },
        ]
    )
  return (
   
    <div className="column-right">
            
     {
        item.map((items)=> (  
        <div className='column-right-content'>
        <div className='column-right-first'><div className='column-right-img' style={{ background: `url(${img2})` }}><div className='overlay-text'>{items.paragraph}</div></div></div>
        </div>
    ))
    }
  
  
  </div>
  )
}

export default BlogContentColumnRight