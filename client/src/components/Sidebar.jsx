import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <aside className="space-y-8">
                <div>
                    <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-4">Browse Categories</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-orange-500 capitalize" href="#" data-discover="true">shoes (9)</a></li>
                        <li><a className="hover:text-orange-500 capitalize" href="#" data-discover="true">clothes (5)</a></li>
                        <li><a className="hover:text-orange-500 capitalize" href="#" data-discover="true">perfume (5)</a></li>
                    </ul>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar