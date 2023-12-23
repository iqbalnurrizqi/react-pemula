import React from 'react';
import Button from "../molekul/Button.jsx";
import { Link } from 'react-router-dom';

const CardProduct = (props) => {
    const { children } = props;
    return (
    <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow my-2 mx-2 flex flex-col justify-between">
        {children}
      </div>
    );
}

const Header = (props) => {
    const {image, id} = props
    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="product1" className="p-8 rounded-t-lg h-80 w-full object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}...</h5>
            <p className="text-m text-white">{children.substring(0, 100)}...</p>
        </a>
    </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white mr-10">$ {price.toLocaleString('id-ID',{ styles:'currency', currency:'USD'})}</span>
            <Button onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;



export default CardProduct;