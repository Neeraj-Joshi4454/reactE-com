import React from 'react'
import pData from '../ProductData';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
const ProductInfo = () => {

    const { id } = useParams();
    console.log(id)

  return (
        <>
            <h1 className='text-center my-5'>Product Info</h1>
            {

                pData.map((cval) => {
                    if(id == cval.id){

                        return(

                            <>

                                <div className="container">

                                    <div className="row">


                                        <div className="col-md-4">
                                            <img src={cval.cover} height={'400'} width={'300'} alt="product-img" />
                                        </div>
                                        <div className="col-md-8">

                                            <h1>Name : {cval.name}</h1>
                                            <h3>Price : {cval.price} INR.</h3>
                                            <Badge bg="info">Color : {cval.color}</Badge>
                                            <p>{cval.description}</p>
                                            <button className='btn btn-dark'>Add To Cart</button>

                                        </div>

                                    </div>

                                </div>



                            </>

                        );


                    }
                })

            }


        </>    
  )
}

export default ProductInfo