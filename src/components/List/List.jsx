/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card"
import "./List.scss"
const List = ({ SubCategories, maxPrice, sort, catId }) => {

  const { data, loading} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${SubCategories.map((items) =>
    `&[filters][sub_categories][id][$eq]=${items}`)}
     &[filters][price][$lte]=${maxPrice}
     &sort=price:${sort}`)

  return <div className="list">
    {loading ? "loading..." : data?.map((item) => (
      <Card key={item.id} item={item} />
    ))}
  </div>;
};

export default List;
