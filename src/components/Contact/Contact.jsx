import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return <div className="contact">
<div className="wrapper">
    <span>GET IN TOUCH WITH US:</span>
    <div className="mail">
        <input type="email" placeholder="Enter Your Email..." />
        <button>JOIN US</button>
    </div>
    <div className="icon">
        <FacebookIcon />
        <TwitterIcon/>
        <InstagramIcon/>
        <PinterestIcon/>
    </div>
</div>
  </div>;
};

export default Contact;
