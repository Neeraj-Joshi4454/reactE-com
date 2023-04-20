import React from 'react'
import ProductCard from './ProductCard'
import pData from '../ProductData';
const Home = () => {
  return (
    <>

        <h1 className='text-center my-3 text-info'>Our Products</h1>

        <div className="container">
            <div className="row">
                {

                    pData.map((cval, index) => {
                        return(

                            <ProductCard
                                id = {cval.id}
                                name = {cval.name}
                                cover = {cval.cover}
                                color = {cval.color}
                                item = {cval}
                            />
                        )
                    })

                }
            </div>
        </div>

    </>
  )
}

export default Home