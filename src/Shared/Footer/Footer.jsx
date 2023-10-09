import "./Footer.css";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
  BiPhoneCall,
} from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCcDiscover, FaCcPaypal } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className=" md:flex ">
        <div className="links-section w-[75%] grid lg:grid-cols-3 md:grid-cols-2 justify-between items-center">
          <div className="">
            <h3>OUR COMPANY</h3>
            <div className="footer-links">
              <a href="">My Account</a>
              <a href="">Specials</a>
              <a href="">Brands</a>
              <a href="">Order History</a>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className="">
            <h3>EXTRAS</h3>
            <div className="footer-links">
              <a href="">Brands</a>
              <a href="">Affiliate</a>
              <a href="">Gift Certificates</a>
              <a href="">Specials</a>
              <a href="">Site Map</a>
            </div>
          </div>
          <div className="">
            <h3>MY ACCOUNT</h3>
            <div className="footer-links">
              <a href="">My Account</a>
              <a href="">Specials</a>
              <a href="">Brands</a>
              <a href="">Order History</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="contact-info w-[25%] text-[#f7c906] mt-3">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <BiPhoneCall size={28} />
              <p className="text-[#d1d5dbba] text-[14px]">+123 456 778</p>
            </div>
            <div className="flex gap-2">
              <TfiEmail size={24} />
              <p className="text-[#d1d5dbba] text-[14px]">
                {" "}
                demoexample@gmail.com
              </p>
            </div>
            <div className="flex gap-2">
              <HiOutlineLocationMarker size={28} />
              <p className="text-[#d1d5dbba] text-[14px]">
                151, Demo Store United States
              </p>
            </div>
          </div>
          <div className="text-white my-4 flex gap-4">
            <div className="">
              <BiLogoFacebook
                size={28}
                className="bg-blue-900 p-2 rounded-full hover:bg-red-500 duration-300"
              />
            </div>
            <div className="">
              <BiLogoTwitter
                size={28}
                className="bg-blue-600 rounded-full p-2 hover:bg-red-500 duration-300"
              />
            </div>
            <div className="">
              <BiLogoYoutube
                size={28}
                className="bg-red-600 rounded-full p-2 hover:bg-red-500 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-slate-500 my-10"></div>
      <div className="flex justify-between">
        <h5 className="text-[17px]">Powered By OpenCart Your Store © 2023</h5>
        <div className="flex gap-4">
          <FaCcPaypal size={28} />
          <FaCcDiscover className="text-blue-300" size={28} />
          <AiFillAmazonSquare className="text-red-300" size={28} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
