import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux';
import { Remove_cart, Remove_all } from '../../redux/productSlice';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartDetail = () => {
    const dispatch=useDispatch();
    const data = useSelector((item) => item.product.cart)
    return (
        <div className='cart-height'>
            <div className='row justify-content-around padding_banner1'>
                <div className='col-3'>
                    <h3 className='text-center font-size'>product name</h3>
                </div>
                <div className='col-3'>
                    <h3 className='text-center font-size'>price</h3>
                </div>
                <div className='col-3'>
                    <h3 className='text-center font-size'>Quantity</h3>
                </div>
                <div className='col-3 d-flex justify-content-around'>
                <button className='btn btn-danger butn_size' onClick={()=>dispatch(Remove_all())}>Clear Cart X</button>
                </div>
            </div>
            {
                (data.length > 0) ? data?.map((item,index) => <>
                    <div className='row justify-content-around pt-3' key={index}>
                        <div className='col-3 d-flex align-items-center px-1'>
                            <img src={item.image} className="image_cart_size px-3 d-none d-lg-block" alt="logo" />
                            <h5 className='px-1 font-size'>{item.name}</h5>
                        </div>
                        <div className='col-3 d-flex align-items-center justify-content-center  '>
                            <h4 className='text-center font-size'>₹ {item.price}</h4>
                        </div>
                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <h4 className='text-center font-size'>{item.quantity}</h4>
                        </div>
                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <h4 className='text-center cursor-pointer' onClick={()=>dispatch(Remove_cart(item.id))}><MdDelete className='header_icon' /></h4>
                        </div>
                    </div></>) : <div className='d-flex justify-content-center p-5'><h3>Empty Cart</h3></div>
            }
            <ToastContainer/>
            <div className='checkout align-items-center justify-content-center row'>
                <div className='div-cart text-light col-lg-6 col-12 py-2 py-lg-0'>
                    <button className='btn btn-success'>CheckOut Now</button>
                </div>
                <div className='div-cart text-light col-lg-6 col-12 '>
                    <h5 className='font-size'>Total Amount : ₹ {data?.reduce((prev, curr) => prev + curr.price, 0)}</h5>
                    <h5>Shipping Charge : ₹ {data?.length*30}</h5>
                    <hr/>
                    <h5 className='font-size'>Total : ₹ { data?.reduce((prev, curr) => prev + curr.price, 0) + data?.length*30 } /-</h5>
                </div>
            </div>
        </div>

    );
};

export default CartDetail;