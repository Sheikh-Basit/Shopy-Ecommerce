import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/ProductSlice'
import {addToCart} from '../Redux/CartSlice'
// Cart Icon
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
    const [fetching, setFetching] = useState("");
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.products)

    // Run one time when the page is load
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Update fetching message when state changes
  useEffect(() => {
    if (loading) {
      setFetching("Products Loading ...");
    } else if (error) {
      setFetching("Error: " + error);
    } else if (items.length < 1) {
      setFetching("Products Not Found.");
    } else {
      setFetching(""); // clear message if products exist
    }
  }, [loading, error, items]);
    
  return (
    <section id="products">
        <h2 className='text-3xl text-orange-800 text-center font-bold py-8'>Products</h2>

        {fetching && <p className='text-center mt-3 text-xl'>{fetching}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map(product => (
                    <div
                        key={product.id}
                        className="overflow-hidden bg-white shadow-md rounded-2xl hover:shadow-lg transition pb-3 relative"
                    >
                        <div className='w-full h-64 overflow-hidden bg-orange-100 p-5'>
                        <img src={product.image} alt={product.title} className='w-full h-full object-fit'/>
                        </div>
                        <h3 className="text-md font-bold mb-2 mx-3 my-2">{product.title}</h3>
                        <p className="text-orange-600 text-md mx-3">$ {product.price}</p>
                        <button className='cursor-pointer absolute bottom-3 right-3 rounded-full bg-orange-600 text-white text-2xl p-2' onClick={() => dispatch(addToCart(product))}><IoCartOutline/></button>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Products
