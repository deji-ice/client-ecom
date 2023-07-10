import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  console.log(data);

  return (
    <div className="featured">
      <div className="top">
        <h2>{type} Products</h2>
        <p>
          Sed sagittis euismod tincidunt. Maecenas malesuada ipsum non lacus finibus ultrices. Sed luctus metus in sapien scelerisque.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "Error!!!"
        ) : loading ? (
          "Loading..."
        ) : data ? (
          data.map((item) => <Card key={item.id} item={item} />)
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedProducts;
