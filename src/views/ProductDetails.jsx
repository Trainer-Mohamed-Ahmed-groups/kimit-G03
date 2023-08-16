import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';


export default function ProductDetails() {
    const params = useParams();

    let [product, setProduct] = useState({});
    let [productImages, setProductImages] = useState([])

    function getSingleProduct() {
        fetch("https://dummyjson.com/products/" + params.productId)
            .then(json => json.json())
            .then(res => setProduct(res))
            .then(setProductImages(product.images))
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <div className="text-center">
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>{product.description}</p>
            <h4>Price : {product.price}</h4>
            <h4>Number in stock : {product.stock}</h4>
        </div>
    )
}