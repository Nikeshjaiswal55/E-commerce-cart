import React from 'react';
import { useDispatch } from 'react-redux';
import { Remove_cart, Remove_all } from '../../redux/productSlice';
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md"


const ProductCart = () => {
    const dispatch=useDispatch();
    const data = useSelector((item) => item.product.cart)

    return (
        <div>
             {
                (data.length > 0) ? data?.map((item,index) => <>
                    <div className='row justify-content-between pt-3' key={index}>
                        <div className='col-6 d-flex align-items-center px-1'>
                            <img src={item.image} className="image_cart_size_pop px-3 d-none d-lg-block" alt="logo" />
                            <h5 className='px-1 font-size'>{item.name}</h5>
                        </div>
                        <div className='col-6 d-flex align-items-center justify-content-end px-3'>
                            <h4 className='text-center cursor-pointer' onClick={()=>dispatch(Remove_cart(item.id))}><MdDelete className='header_icon' /></h4>
                        </div>
                    </div>
                </>) : <div className='d-flex justify-conten-center p-5'><h3>Empty Cart</h3></div>
            }
                                <div><button className="btn btn-danger mt-2 w-100" onClick={()=>dispatch(Remove_all())}> clear cart</button></div>
        </div>
    );
};

export default ProductCart;