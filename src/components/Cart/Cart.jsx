import { DeleteOutlineOutlined } from "@mui/icons-material";
import "./Cart.scss"

const Cart = () => {
    const data = [{
        id: 2,
        img: 'https://images.unsplash.com/photo-1618109176213-554d5266923f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        img2: 'https://images.unsplash.com/photo-1618108730205-27d6ed54d012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        title: 'Product 2',
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis euismod tincidunt.",
        isNew: false,
        oldPrice: 60,
        price: 45,
    }, {
        id: 3,
        img: 'https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
        img2: 'https://images.unsplash.com/photo-1629941199828-59f5ca36a985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Product 3',
        desc:"        Maecenas malesuada ipsum non lacus finibus ultrices. Sed luctus metus in sapien scelerisque,",
        isNew: true,
        oldPrice: 70,
        price: 55,
    },]

    return <div className="cart">
        <h2>PRODUCTS IN CART</h2>
        {data?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="details">
                    <h3>{item.title}</h3>
                    <p>{item?.desc.substring(0, 80)}...</p>
                    <div className="price">
                        1 x {item.price}
                    </div>
                </div>
                
                <DeleteOutlineOutlined className="delete" />
            </div>
        ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>&#x20A6;45,000</span>
    </div>
<button>PROCEED TO CHECKOUT</button>
<span className="reset">Reset Cart</span>
    </div>;
};

export default Cart;
