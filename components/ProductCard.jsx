import Link from 'next/link'
import React from 'react'
import ProductImage from './ProductImage'

const ProductCard = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}
    className='h-96 flex flex-col p-5 rounded border-2 group hover:scale-105 transition-transform ease-in-out duration-200'>
        <div className="relative h-64 w-full">
            <ProductImage product = {product} fill />
        </div>
        <div className="p-6 bg-white">
            <p className="font-semibold text-lg">{product.title}</p>
            <div className="mt-4 flex items-center justify-between space-x-2">
                <div>
                    <p className="text-gray-500">Price</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                </div>
                <button className="border border-gray-600 rounded-lg py-1 px-4 hover:bg-green-500">
                    Add to Cart
                </button>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard