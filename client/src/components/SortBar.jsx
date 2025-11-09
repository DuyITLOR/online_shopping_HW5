import React from 'react'
const SORT_VALUES = [
    { name: "Sort by Default", value: "" },
    { name: "Price", value: "price" },
    { name: "Rating", value: "-stars" }
]

const SortBar = ({ sort, onSortChange, page, totalPages, onPageChange }) => {
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-3"><select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg !focus:ring-orange-500 !focus:border-orange-500 block w-1/4 px-2 py-1 text-sm"
                onChange={(e) => onSortChange(e.target.value)}
                value={sort}
            >
                {SORT_VALUES.map(s => (
                    <option value={s.value} key={s.name}>{s.name}</option>
                ))}

            </select>
                {totalPages > 1 && (
                    <div className="flex gap-2">
                        {Array.from({length: totalPages},(_, i) => (
                            <a key = {`page${i + 1}`} 
                            onClick={() => onPageChange(i + 1)}
                            className={i + 1 == page ? "px-3 py-1 bg-orange-500 text-white rounded" : "px-3 py-1 hover:bg-orange-100 rounded"}>
                                {i + 1}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SortBar