/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import "./Card.scss"
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
        {item?.attributes.isNew &&<span className='new'>New Release</span> }
          <img src={import.meta.env.VITE_API_UPLOAD_URL+item?.attributes?.img.data.attributes.url} alt="" className="mainImage" />
          <img src={import.meta.env.VITE_API_UPLOAD_URL+item?.attributes?.img2.data.attributes.url} alt="" className="secondImage" />
        </div>
        <p>{item?.attributes.title}</p>
        <div className="prices">
            <h3 className='oldPrice'><span>&#x20A6;</span>{item.oldPrice || item?.attributes.price +3500 }</h3>
            <h3><span>&#x20A6;</span>{item?.attributes.price}</h3>
        </div>

      </div>
    </Link>
  );
};

Card.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      img2: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isNew: PropTypes.bool.isRequired,
      oldPrice: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
export default Card;
