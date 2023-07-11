import { useState } from "react";
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Balance, FavoriteBorder } from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = parseInt(useParams().id)
  const [selectedImage, setSelectedImage] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { data, loading} = useFetch(
    `/products/${id}?populate=*`)

  return <div className="product">

    {loading ? "loading..." : (<> <div className="left">
      <div className="images">
        <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes.img?.data.attributes.url} alt="" onClick={() => setSelectedImage("img")} />
        <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes.img2?.data.attributes.url} alt="" onClick={() => setSelectedImage("img2")} />
      </div>
      <div className="mainImage">
        <img src={import.meta.env.VITE_API_UPLOAD_URL + data?.attributes[selectedImage]?.data.attributes.url} alt="" />
      </div>
    </div>
      <div className="right">
        <h1>{data?.attributes.title}</h1>
        <span className="price">&#x20A6;{data?.attributes.price}</span>
        <p>
          {data?.attributes.description}
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : -1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={()=> dispatch(addToCart({
          id: data?.id,
          price: data?.attributes.price,
          title: data?.attributes.title,
          description: data?.attributes.description,
          img: data?.attributes.img?.data.attributes.url,
          quantity,
        }))}>
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
    </>)
    }
  </div>;
};

export default Product;
