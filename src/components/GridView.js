import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {
        products.map((curElem, id)=>{
          return <Product key={curElem.id} {...curElem} />
        })
      }
    </div>
  )
}

export default GridView
