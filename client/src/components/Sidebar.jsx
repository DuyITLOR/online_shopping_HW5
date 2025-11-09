import { useState, useEffect } from 'react'
import { http } from '../libs/http'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const category = searchParams.get("categoryId") || "";
     useEffect(() => {
        let isMounted = true;
        const loadCategories = async () => {
            try {
                const res = await http.get("/categories");
                const data = res.data;
                
                for (let i = 0; i < data.length; i++)
                {
                    const c = data[i];
                    const res = await http.get(`/products?categoryId=${c.id}`)
                    c.productCount = res.data.length;
                }

                setError(null);
                setLoading(true);
                if (isMounted) setCategories(res.data);
            } catch (error) {
                if (isMounted) setError(error || "Unable to load categories");
                console.error("Error fetching categories:", error);
            }
            finally {
                if (isMounted) setLoading(false);
            }
        }
        loadCategories();
        return () => {
            isMounted = false;
        }
    }, [])
    return (
        <div>
            <aside className="space-y-8">
                <div>
                    <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4">Browse Categories</h2>
                    {loading && <div>Loading....</div>}
                    {error && <div>{error}</div>}
                    {!loading && !error && (
                        <ul className="space-y-2 text-sm">
                            {
                                categories.map((c) => (
                                    <li key = {c.id}><Link className={category == c.id ? "!text-orange-500 hover:!text-orange-500 capitalize" : "hover:!text-orange-500 capitalize"} to={`/products?categoryId=${c.id}`} data-discover="true">{c.name} ({c.productCount})</Link></li>
                                ))
                            }
                        </ul>
                    )}
                </div>
            </aside>

        </div>
    )
}

export default Sidebar