import React from 'react'
import RatingStars from './RatingStars'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

    return (
        <div>
            <div className="border border-gray-300 rounded hover:shadow-lg transition flex flex-col"><Link to = {`/products/${product.id}`} data-discover="true"><img className="w-full" src={product.imagePath} /></Link>
                <div className="p-4 flex flex-col flex-grow">
                    <h6 className="font-medium mb-2">
                        <Link to = {`/products/${product.id}`} data-discover="true">{product.name}</Link>
                    </h6>
                    <div className="flex items-center">
                        <RatingStars stars = {product.stars}/>
                    </div>
                    <div className="flex gap-2 text-orange-600 font-semibold my-4">
                        <span>{product.price}</span>
                        <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    </div>
                    <button className="mt-auto bg-orange-500 text-white py-2 rounded hover:bg-orange-600">Add to
                        Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard