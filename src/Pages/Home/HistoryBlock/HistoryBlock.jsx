import "./HistoryBlock.css";

const HistoryBlock = () => {
  return (
    <div className="grid md:grid-cols-2 my-20 w-full h-screen">
      <div className="first_block flex items-center justify-center">
        <div className="first_block_content text-center text-white px-20 ">
          <p className="text-[#f7c906]">Get All New Car On Rent</p>
          <h3 className="text-5xl mt-6">PRODUCT BY AUTO DRIVE</h3>
          <p className="text-[15px] text-gray-200 my-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            nostrum a eius reiciendis nesciunt exercitationem, expedita totam
            provident ducimus, qui inventore? Dolores molestias id distinctio
            placeat, earum expedita repellendus debitis?
          </p>
          <button className="secondary-btn">Read More</button>
        </div>
      </div>
      <div className="second_block  flex items-center justify-center">
        <div className="second_block_content text-center text-white px-20 ">
          <p className="text-[#f7c906]">Save On New Arrivals</p>
          <h3 className="text-5xl mt-6">Save On New Arrivals</h3>
          <p className="text-[15px] text-gray-200 my-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            nostrum a eius reiciendis nesciunt exercitationem, expedita totam
            provident ducimus, qui inventore? Dolores molestias id distinctio
            placeat, earum expedita repellendus debitis?
          </p>
          <button className="primary-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HistoryBlock;
