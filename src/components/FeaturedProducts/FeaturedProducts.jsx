import Card from "../Card/Card";
import "./FeaturedProducts.scss"


// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({type}) => {
    const data = [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1584720223124-466ff369e7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          img2: 'https://images.unsplash.com/photo-1638115311992-494f8d1d858b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Product 1',
          isNew: true,
          oldPrice: 50,
          price: 40,
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1618109176213-554d5266923f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
          img2: 'https://images.unsplash.com/photo-1618108730205-27d6ed54d012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
          title: 'Product 2',
          isNew: false,
          oldPrice: 60,
          price: 45,
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
          img2: 'https://images.unsplash.com/photo-1629941199828-59f5ca36a985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          title: 'Product 3',
          isNew: true,
          oldPrice: 70,
          price: 55,
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1599422607406-5c2483989534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
          img2: 'https://images.unsplash.com/photo-1599423843366-d5bbbe44b4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
          title: 'Product 4',
          isNew: false,
          oldPrice: 80,
          price: 60,
        },
      ];

      
  return <div className="featured">
    <div className="top">
        <h2>{type} Products</h2>
        <p> Sed sagittis euismod tincidunt. Maecenas malesuada ipsum non lacus finibus ultrices. 
        Sed luctus metus in sapien scelerisque, </p>
    </div>
    <div className="bottom">
      {data.map((item)=>(
        <Card key={item.id} item={item} />
      ))}
    </div>
  </div>;
};

export default FeaturedProducts;
