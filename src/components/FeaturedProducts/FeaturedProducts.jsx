
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"
import axios from "axios";


// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ type }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(import.meta.env.VITE_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, {
    
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          },
        })
        setProducts(data?.data.data)
        console.log(data?.data.data);
        
        console.log(products);
        

      } catch (error) {
        console.log(error);

      }
    }
    console.log(import.meta.env.VITE_API_TOKEN);
    
    fetchData()
  }, [])

  return <div className="featured">
    <div className="top">
      <h2>{type} Products</h2>
      <p> Sed sagittis euismod tincidunt. Maecenas malesuada ipsum non lacus finibus ultrices.
        Sed luctus metus in sapien scelerisque, </p>
    </div>
    <div className="bottom">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  </div>;
};

export default FeaturedProducts;
