import React from 'react'

const SortBar = () => {
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3"><select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg !focus:ring-orange-500 !focus:border-orange-500 block w-1/4 px-2 py-1 text-sm">
                <option value>Sort by Default</option>
                <option value="price">Price</option>
                <option value="-stars">Rating</option>
            </select>
                <div className="flex gap-2"><a className="px-3 py-1 bg-orange-500 text-white rounded">1</a><a className="px-3 py-1 hover:bg-orange-100 rounded">2</a><a className="px-3 py-1 hover:bg-orange-100 rounded">3</a></div>
            </div>
        </div>
    )
}

export default SortBar