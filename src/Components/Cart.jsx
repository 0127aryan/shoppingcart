import React, { useState } from 'react'

const Cart = ({cart, setCart}) => {

    const [price,setPrice] = useState(0);


  return (
    <div>
    {
        cart?.map((item) => (
            <div className='cartbox' key={item.id}>
            <div className='cartImg'>
                <img src={item.img} alt=''/>
                <p>{item.title}</p>
            </div>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
            <div>
                <span>{item.price}</span>
                <button>Remove</button>
            </div>


            </div>
        )) 
        
       }
    </div>
  )
}

export default Cart