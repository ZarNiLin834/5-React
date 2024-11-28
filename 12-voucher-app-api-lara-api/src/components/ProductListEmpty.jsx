// import React from 'react'

const ProductListEmpty = () => {
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden last:table-row">
                <td colSpan={5} className='px-6 py-4 text-center'>There is no product.</td>
            </tr>
        </>
    )
}

export default ProductListEmpty
