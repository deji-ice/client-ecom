import "./Footer.scss"
const Footer = () => {
  return <div className="footer">
    <div className="top">
    <div className="item">
      <h2>Catergories</h2>
      <span>Men</span>
      <span>Women</span>
      <span>Children</span>
      <span>Shoes</span>
      <span>Accessories</span>
      <span>New Arrivals</span>
    </div>
    <div className="item">
      <h2>Links</h2>
      <span>FAQ</span>
      <span>Careers</span>
      <span>Stores</span>
      <span>Cookies</span>
      <span>Privacy & Policies</span>
    </div>
    <div className="item">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis euismod tincidunt.
        Maecenas malesuada ipsum non lacus finibus ultrices. Sed luctus metus in sapien scelerisque, </p>
    </div>
    <div className="item"><h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        et aliquet tortor eleifend. Cras id mauris ut est posuere congue. </p></div>
        </div>
    <div className="bottom">
<div className="left">
  <h2 className="logo">ICE CLOTHINGS</h2>
  <p className="copyright">Copyright @ 2023. All Rights Reserved.</p>
</div>
<div className="right">
  <img src="/img/paystack-ii.webp" alt="powered by paystack"/>
</div>
    </div>
  </div>;
};

export default Footer;
