import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import {NavLink} from 'react-router-dom';
import {useCart} from 'react-use-cart'

const ProductCard = (props) => {

    const {addItem} = useCart();


    return (
        <>
            <div className="col-md-4">

            <Card className="product-Card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.cover} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <NavLink to={`/productinfo/${props.id}`}><Button variant="warning">Know More</Button></NavLink><br /> <br />
                    <Button variant="success" onClick={() =>addItem(props.item) }>Add To Cart</Button>
                </Card.Body>
            </Card>

            </div>
        </>
    )
}

export default ProductCard