import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SortBar from './SortBar'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'
import { http } from '../libs/http'
const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [totalPages, setTotalPages]= useState(1)
    // Get information from query string
    const category = searchParams.get('categoryId') || ""
    const sort = searchParams.get("sort") || ""
    const page = searchParams.get("page") || 1;
    const per_page = 3
    const q = searchParams.get("q") || "";

    const queryString = useMemo(() => {
        const p = new URLSearchParams();
        p.set("_per_page", per_page)
        p.set("_page", page)
        if(category )
            p.set('categoryId', category)
        if (sort) 
            p.set("_sort", sort);
        if (q) 
            p.set("name", q);
        return p.toString();
    },[category, sort, page, q])

    useEffect(() => {
        let isMounted = true;
        const loadProducts = async () => {
            try {
                const res = await http.get(`/products?${queryString}`);
                setError(null);
                setLoading(true);
                if (isMounted){
                    setProducts(res.data.data);
                    setTotalPages(res.data.pages);
                }
            } catch (error) {
                if (isMounted) setError(error || "Unable to load products");
                console.error("Error fetching products:", error);
            }
            finally {
                if (isMounted) setLoading(false);
            }
        }
        loadProducts();
        return () => {
            isMounted = false;
        }
    }, [queryString])

    const handleSortChange = (value) => {
        const next = new URLSearchParams(searchParams)
        if (!value) next.delete("sort")
        else next.set("sort", value);
        next.set("page", 1);
        setSearchParams(next)
    }

    const handlePageChange = (value) =>  {
        const next = new URLSearchParams(searchParams)
        if (!value) next.delete("page")
        else next.set("page", value);
        setSearchParams(next)
    }

    return (
        <div className='container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8'>
            <Sidebar/>
            <section className="md:col-span-3 space-y-6">
                
                {loading && <p>Loading products...</p>}
                {error && <p>Error loading products: {error.message}</p>}
                {!loading && !error && (
                    <>
                        <SortBar sort = {sort} onSortChange={handleSortChange} page = {page} totalPages = {totalPages} onPageChange={handlePageChange}/>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                products.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))
                            }
                        </div>
                    </>
                )}
            </section>
        </div>
    )
}

export default ProductList