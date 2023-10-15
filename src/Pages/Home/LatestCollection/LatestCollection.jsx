import { useEffect, useState } from "react";
import LatestProductCart from "../../../Components/LeatestProductCart/LeatestProductCart";

const LatestCollection = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/LeatestCollections.json")
      .then((res) => res.json())
      .then((Products) => {
        setAllData(Products);
      });
  }, []);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const filteredData = allData.filter((item) => item.category === activeTab);
    setFilteredData(filteredData);
  }, [allData, activeTab]);

  console.log(filteredData);

  return (
    <div className="lg:px-12 md:px-6 px-4 text-center justify-center mx-auto py-12">
      <div className=" my-10">
        <p className="text-xl text-[17px] text-[#a51016]">Latest Collection</p>
        <p className="text-5xl my-3">LATEST PRODUCTS</p>
      </div>
      <div className="">
        <div className="flex space-x-4 justify-center">
          <button
            className={`py-2 px-6 flex items-center gap-2 rounded-full ${
              activeTab === "Featured"
                ? "bg-[#a51016] text-white"
                : "hover:bg-[#a51016] hover:text-white duration-500"
            }`}
            onClick={() => handleTabSelect("Featured")}
          >
            Featured
          </button>
          <button
            className={`py-2 px-6 flex items-center gap-2  rounded-full ${
              activeTab === "Best Seller"
                ? "bg-[#a51016] text-white"
                : "hover:bg-[#a51016] hover:text-white duration-500"
            }`}
            onClick={() => handleTabSelect("Best Seller")}
          >
            Best Seller
          </button>
          <button
            className={`py-2 px-6 flex items-center gap-2  rounded-full ${
              activeTab === "New Arrivals"
                ? "bg-[#a51016] text-white"
                : "hover:bg-[#a51016] hover:text-white duration-500"
            }`}
            onClick={() => handleTabSelect("New Arrivals")}
          >
            New Arrivals
          </button>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mr-4 ">
        {filteredData.length === 0 ? (
          <p>No matching destinations found for {activeTab}.</p>
        ) : (
          filteredData.map((Product, index) => (
            <LatestProductCart key={index} Product={Product} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestCollection;
