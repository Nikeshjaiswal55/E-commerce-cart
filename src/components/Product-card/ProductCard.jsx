
import { FaShoppingCart, FaFireAlt } from 'react-icons/fa';
import "./ProductCard.css"
import { useDispatch } from 'react-redux';
import { Add_cart } from '../../redux/productSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard(props) {
    const dispatch = useDispatch();
    
    return (
        <div className='productList m-0 col-12 col-sm-5 col-lg-4 p-0'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName m-0'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>₹ {props.price}</div>
                        <div></div>
                    </div>
                    <div>
                        <div className='productdisc'>
                            <p>{props.disc}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end pt-2'>
                        <div>
                            <FaShoppingCart className={"productCard__cart"} onClick={()=>dispatch(Add_cart(props))} />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}