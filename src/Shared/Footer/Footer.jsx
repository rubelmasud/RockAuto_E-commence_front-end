import "./Footer.css";
import React from "react";
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
    <footer className="md:px-12 px-6">
      <div className="md:flex">
        <div className="links-section w-[75%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 justify-between items-center">
          {[
            {
              title: "OUR COMPANY",
              links: [
                "My Account",
                "Specials",
                "Brands",
                "Order History",
                "Contact Us",
              ],
            },
            {
              title: "EXTRAS",
              links: [
                "Brands",
                "Affiliate",
                "Gift Certificates",
                "Specials",
                "Site Map",
              ],
            },
            {
              title: "MY ACCOUNT",
              links: [
                "My Account",
                "Specials",
                "Brands",
                "Order History",
                "Contact Us",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              <div className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="contact-info md:w-[25%] text-[#f7c906] md:mt-3 mt-6">
          <div className="flex flex-col gap-4">
            {[
              { icon: <BiPhoneCall size={24} />, text: "+123 456 778" },
              { icon: <TfiEmail size={24} />, text: "demoexample@gmail.com" },
              {
                icon: <HiOutlineLocationMarker size={28} />,
                text: "151, Demo Store United States",
              },
            ].map((info, index) => (
              <div key={index} className="flex gap-2">
                {info.icon}
                <p className="text-[#d1d5dbba] text-[14px]">{info.text}</p>
              </div>
            ))}
          </div>
          <div className="text-white my-4 flex gap-4">
            {[
              { icon: <BiLogoFacebook size={28} />, bgColor: "bg-blue-900" },
              { icon: <BiLogoTwitter size={28} />, bgColor: "bg-blue-600" },
              { icon: <BiLogoYoutube size={28} />, bgColor: "bg-red-600" },
            ].map((social, index) => (
              <div key={index}>
                {React.cloneElement(social.icon, {
                  className: `${social.bgColor} rounded-full p-2 hover:bg-red-500 duration-300`,
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-slate-500 my-10"></div>
      <div className="flex gap-3 justify-between">
        <h5 className="md:text-[17px] text-[14px]">
          Powered By OpenCart Your Store © 2023
        </h5>
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
