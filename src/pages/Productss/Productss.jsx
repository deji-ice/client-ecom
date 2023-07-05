import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import { useState } from "react";
import "./Productss.scss"

const Productss = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(100000)
  const [sort, setSort] = useState(null)

  console.log(catId);
  
  return <div className="products">
    <div className="left">
      <div className="filterItem">
        <h2>
          Product Categories
        </h2>
        <div className="inputItem">
          <input type="checkbox" className="" id="1" value={1} />
          <label htmlFor="1" >Shirts</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" className="" id="2" value={2} />
          <label htmlFor="2" >Shoes</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" className="" id="3" value={3} />
          <label htmlFor="3" >Accessories</label>
        </div>
      </div>
      <div className="filterItem">
        <h2>Filter by Price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range"  min={0} max={100000} onChange={(e)=> setMaxPrice(e.target.value)} className="" />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem">
        <h2>Sort By</h2>
        <div className="inputItem">
          <input type="radio" id="asc" value={"asc"} name="price" onChange={()=> setSort("asc")} />
          <label htmlFor="asc" className="label">Price(asc)</label>
        </div>
        <div className="inputItem">
          <input type="radio" id="desc" value={"desc"} name="price" onChange={()=> setSort("desc")} />
          <label htmlFor="desc" className="label">Price(desc)</label>
        </div>
      </div>
    </div>
    <div className="right">
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
       alt="" className="catImage" />
        <List sort={sort} catId={catId} maxPrice={maxPrice}/>
    </div>
  </div>;
};

export default Productss;
