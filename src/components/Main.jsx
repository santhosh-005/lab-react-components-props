import React from 'react'
import imageData from './Data'

function Main() {
  return (
    <div>
    {
      imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
    </div>
  )
}

export default Main


