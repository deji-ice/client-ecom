import { KeyboardArrowDown } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src="/img/pngwing.com (7).png" alt='nigerian flag' className='w-10' />
            <KeyboardArrowDown />
          </div>
          <div>
            <span>NGN</span>
            <KeyboardArrowDown />
          </div>
          <div className='item' >
            <Link className='link' to="/products/1">
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to="/products/2">
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className='center text-xl'>
          <Link className='link' to="/">ICE CLOTHINGS</Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to="/">Home</Link>
          </div>
          <div className='item'>
            <Link className='link' to="/">About</Link>
          </div>
          <div className='item'>
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
             <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
