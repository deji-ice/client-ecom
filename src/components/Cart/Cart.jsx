import { DeleteOutlineOutlined } from "@mui/icons-material";
import "./Cart.scss"
import { useDispatch, useSelector } from "react-redux";
import { reduceItem, reset } from "../../redux/cartReducer";

const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const totalPrice=()=>{
        let total = 0;
        products.forEach(element => {
            total += element.quantity * element.price
        });

        return total.toFixed(2)
    }

    return <div className="cart">
        <h2>PRODUCTS IN CART</h2>
        {products?.map((item) => (
            <>
            <div className="item" key={item.id}>
                <img src={import.meta.env.VITE_API_UPLOAD_URL +item.img} alt={item.title} />
                <div className="details">
                    <h3>{item.title}</h3>
                    <p>{item?.description.substring(0, 80)}...</p>
                    <div className="price">
                        {item.quantity} x {item.price}
                    </div>
                </div>

                <DeleteOutlineOutlined className="delete" onClick={()=>dispatch(reduceItem(item.id))} />
            </div>
            </>
        ))} 
        <div className="total">
            <span>SUBTOTAL</span>
            <span>&#x20A6;{totalPrice()}</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=>dispatch(reset())}>Reset Cart</span>
    </div>;
};

export default Cart;
