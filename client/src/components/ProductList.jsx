import {useState, useEffect} from 'react'
import SortBar from './SortBar'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const url = 'http://localhost:3000/products';
                const res = await fetch(url);
                const json = await res.json();
                setProducts(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                console.error("Error fetching products:", error);
            }
        }

        loadProducts();
    }, [])

    return (
        <div className='container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8'>
            <Sidebar/>
            <section className="md:col-span-3 space-y-6">
                <SortBar/>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading && <p>Loading products...</p>}
                    {error && <p>Error loading products: {error.message}</p>}
                    {!loading && !error && (
                        <>
                            {
                                products.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))
                            }
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default ProductList