import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_1">Shortly</div>
      <div className="footer_2">
        <ul>
          <li className="footer_ul">Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="footer_3">
        <ul>
          <li className="footer_ul">Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="footer_4">
        <ul>
          <li className="footer_ul">Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="footer_5">
        <FaFacebookSquare/>
        <FaTwitter/>
        <FaPinterest/>
        <FaInstagram/>
      </div>
    </div>
  );
};

export default Footer;
