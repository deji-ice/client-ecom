import { Link } from "react-router-dom";
import "./Categories.scss"

const Catergories = () => {
  return( 
    <div className="categories">
      <div className="col">
        <div className="row">
          <img  src="https://images.unsplash.com/photo-1625131728692-3c0d34b1f22d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xLUXZIWmtNRHcxTXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"/>
          <button><Link className="link" to="/products/1"> Sale</Link></button>
        </div>
        <div className="row">
        <img  src="https://images.unsplash.com/photo-1613606753104-5a589e1eb448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8S1F2SFprTUR3MU18fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <button><Link className="link" to="/products/1">Men</Link></button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img  src="https://images.unsplash.com/photo-1627225925683-1da7021732ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxLUXZIWmtNRHcxTXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"/>
          <button><Link className="link" to="/products/1">New Releases</Link></button>
        </div>
      </div>
      <div className="col col-l">
      <div className="row">
        <div className="col">
          <div className="row">
          <img  src="https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
          <button><Link className="link" to="/products/1">Women</Link></button>
          </div>
        </div>
        <div className="col">
          <div className="row">
          <img  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
          <button><Link className="link" to="/products/1">Accessories</Link></button>
          </div>
        </div>
      </div>
      <div className="row">
      <img  src="https://images.unsplash.com/photo-1635327343808-37edbaf09d70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
          <button><Link className="link" to="/products/1">Children</Link></button>
      </div>
      </div>
    </div>
    );
};

export default Catergories;
