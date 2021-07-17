import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import redBus from '../../images/icon.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <Fragment>
      <footer className='page-footer font-small '>


        {/* 1 */}
        
  <div className="container text-center text-md-left ">
    <div className="row ">
      

      <hr className="clearfix w-100 d-md-none pb-3" />

      <div className="col-md-2  my-5 ">
        <h5 className="text-light">About us</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="#!"className="footer_info">About Us</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Contact us</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Mobile version</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">redBus on mobile</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">siteMap</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Offers</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Career</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Value</Link>
          </li>
        </ul>
      </div>

      <div className="col-md-2 my-5">
        <h5 className="text-light">Info</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="#!" className="footer_info"> T & C</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> Privacy Policy</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> FAQ</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> Blog</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> Bus operator </Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> Agent Registration</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Insurance Partner</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> User Agreement</Link>
          </li>
        </ul>
      </div>


      {/* 3 */}

      <div className="col-md-2 my-5">
        <h5 className="text-light">Global Sites</h5>

        <ul className="list-unstyled">
        <li>
            <Link to="#!" className="footer_info">India</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Singapore</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info"> Malasia</Link>
          </li>
         
          <li>
            <Link to="#!" className="footer_info">Indonesia</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Peru</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Columbia</Link>
          </li>
        </ul>
      </div>


      {/* 4 */}

      <div className="col-md-2 my-5">
        <h5 className="text-light">Our Partner</h5>

        <ul className="list-unstyled">
        <li>
            <Link to="#!" className="footer_info">Goibibo</Link>
          </li>
          <li>
            <Link to="#!" className="footer_info">Makemytrip</Link>
          </li>
        
        </ul>
      </div>

      <div className="col-md-4 my-5">
        <img src={redBus} alt="Icon"/>
        
        <p>
        redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.
        </p>
        <div className="">
        <FacebookIcon style={{ fontSize: 40 }}/>
        <TwitterIcon style={{ fontSize: 40 }}/>
        </div>
        
        
      </div>
    </div>
  </div>

  

        {/* 2 */}
        <div className='footer-copyright bg-dark test-light text-center py-3'>
          © 2021 Copyright:
          <Link to={{ pathname: "https://www.linkedin.com/in/rohitsharma7065/" }} target="_blank">Rohit</Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
