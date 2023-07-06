import { useState } from "react";
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Balance,  FavoriteBorder } from "@mui/icons-material";

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.unsplash.com/photo-1568253130222-5fc7d0173808?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1568251863885-adcac989de24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=397&q=80"
  ]

  return <div className="product">
    <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={() => setSelectedImage(0)} />
        <img src={images[1]} alt="" onClick={() => setSelectedImage(1)} />
      </div>
      <div className="mainImage">
        <img src={images[selectedImage]} alt="" />
      </div>
    </div>
    <div className="right">
      <h1>Title</h1>
      <span className="price">&#x20A6;13,000</span>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis euismod tincidunt.
        Maecenas malesuada ipsum non lacus finibus ultrices. Sed luctus metus in sapien scelerisque,
      </p>
      <div className="quantity">
        <button onClick={() => setQuantity(prev => prev === 1 ? 1 : -1)}>-</button>
        {quantity}
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>
      <button className="add">
        <AddShoppingCartIcon /> ADD TO CART
      </button>
      <div className="link">
        <div className="item">
          <FavoriteBorder /> ADD TO WISHLIST
        </div>
        <div className="item"><Balance /> ADD TO COMPARE</div>
      </div>
      <div className="info">
        <span>Vendor: Gucci</span>
        <span>Product Type: Shirt</span>
        <span>Tag: T-shirt, Fashion, Men</span>
      </div>
      <hr />
      <div className="info">
        <span>DESCRIPTION:</span>
        <hr />
        <span>ADDITONLA INFORMATION</span>
        <hr />
        <span>FAQ</span>
      </div>
    </div>

  </div>;
};

export default Product;
