import React from 'react'

const ProductCard = ({product}) => {

    return (
        <div>
            <div className="border border-gray-300 rounded hover:shadow-lg transition flex flex-col"><a href="details.html" data-discover="true"><img className="w-full" src={product.imagePath} /></a>
                <div className="p-4 flex flex-col flex-grow">
                    <h6 className="font-medium mb-2">
                        <a href="details.html" data-discover="true">{product.name}
                            Tuna</a>
                    </h6>
                    <div className="flex items-center">
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth={0} viewBox="0 0 20 20" data-testid="flowbite-rating-star" className ={`h-5 w-5 ${ index < Math.round(product.stars)  ? "text-yellow-200" : "text-gray-300 dark:text-gray-500"}`}>
                                <path stroke="none" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z">
                                </path>
                            </svg> 
                            ))
                        }
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