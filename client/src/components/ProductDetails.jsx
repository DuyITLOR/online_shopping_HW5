import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from './RatingStars';
import { http } from '../libs/http';
const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        let isMounted = true;
        const loadProduct = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const res = await http.get(`/products/${id}`);
                if (isMounted) setProduct(res.data);
            } catch (error) {
                console.log("Error loading product", error);
                if (isMounted) setError(error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        }
        loadProduct()
    }, [id])

    return (
        <div>
            {isLoading && <div>Loading.....</div>}
            {error && <div>{Error}</div>}
            {!isLoading && !error && (
                <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-10">
                    <div><img alt={product.name} className="w-full" src={product.imagePath} /></div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <h2 className="text-3xl font-bold text-orange-600 mb-3">{product.price}</h2>
                        <div className="flex items-center">
                            <RatingStars stars = {product.stars}/>
                        </div>
                        <p className="text-gray-600 my-6">{product.summary}</p>
                        <div className="flex items-center mb-6"><label htmlFor="qty" className="mr-3 font-medium">Quantity:</label><input id="qty" min={1} className="w-20 border rounded text-center" type="number" defaultValue={1} /></div><button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Add to Cart</button>
                    </div>
                </section>
            )}


        </div>
    )
}

export default ProductDetails