import React, { useEffect } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { fetchProducts } from '../Redux/ProductSlice';
import { addToCart } from '../Redux/CartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const productID = parseInt(id);

    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.products);

    // Ensure products are loaded (important when refreshing detail page)
    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, items.length]);

    const product = items.find(p => p.id === productID);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!product) return <p className="text-center mt-10">Product not found!</p>;

    return (
        <div>
            {/* Header */}
            <header className='text-2xl bg-orange-200'>
                <div className='container m-auto max-w-6xl sm:px-8 px-3 py-3 flex gap-5 items-center text-orange-800'>
                    <NavLink to="/"><RxCross2 className='mt-1' /> </NavLink>
                    <p>Detail</p>
                </div>
            </header>

            <div className="container m-auto max-w-6xl sm:px-8 px-3 py-3">

                {/* Product Detail Section */}
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 shadow-md gap-8">
                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center bg-orange-100 rounded-lg p-6">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-80 object-contain"
                        />
                    </div>

                    {/* Detail */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-orange-800 mb-3">{product.title}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-2xl font-semibold text-orange-600 mb-6">${product.price}</p>
                        </div>

                        <NavLink to="/cart"><button
                            onClick={() => dispatch(addToCart(product))}
                            className="text-md tracking-wider font-semibold text-orange-600 uppercase border border-orange-600 px-3 py-2 w-full hover:text-white hover:bg-orange-600 cursor-pointer flex items-center justify-center gap-3"
                        >
                            <IoCartOutline className='text-xl' /> Add to cart
                        </button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
