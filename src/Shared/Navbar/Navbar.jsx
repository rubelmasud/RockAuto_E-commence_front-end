import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setSearchVisible(false);
    setCartVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setDropdownVisible(false);
    setCartVisible(false);
  };

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
    setDropdownVisible(false);
    setSearchVisible(false);
  };

  return (
    <nav className="md:px-12 px-6">
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="menu-icon">
        <AiOutlineMenu size={24} />
      </label>
      <div className="logo">
        <span className="text-rose-500">Rock</span>Auto
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blogs'>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="icons flex gap-4">
        <div className="relative">
          <AiOutlineSearch
            size={28}
            className="hover:text-rose-500 duration-700 cursor-pointer"
            onClick={toggleSearch}
          />
          {isSearchVisible && (
            <div className="search-field border rounded-r-md shadow-md bg-white absolute top-[calc(100%+10px)]  right-0 mt-2 flex">
              <input
                type="text"
                placeholder="Search Your catalog"
                className=" px-2 text-[14px] py-1 outline-none "
              />
              <button className=" text-white px-2 md:py-1 ">
                <AiOutlineSearch className="text-[20px] text-black cursor-pointer" />
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          <AiOutlineUser
            size={28}
            className="hover:text-rose-500 duration-700 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownVisible && (
            <div className="user-dropdown absolute top-[calc(100%+10px)] right-0 mt-2 bg-white border rounded-lg shadow-md w-96 p-2 transform opacity-100 scale-y-100 transition-transform duration-300">
              <div className="flex flex-col text-[15px] p-4 text-slate-500">
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/logout">Logout</Link>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <AiOutlineShoppingCart
            size={28}
            className="hover:text-rose-500 duration-700 cursor-pointer"
            onClick={toggleCart}
          />
          <p className="absolute top-0 right-0 bg-yellow-300 text-sm px-1 rounded-full">
            0
          </p>
          {isCartVisible && (
            <div className="cart-dip absolute top-[calc(100%+10px)] right-0 mt-2 bg-white border rounded-lg shadow-md w-96 p-2 transform opacity-100 scale-y-100 transition-transform duration-300">
              <div className="text-[15px]">
                <p>Your shopping cart is empty!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
