import "./Exclusive.css";

const Exclusive = () => {
  return (
    <div className="m-12 grid md:grid-cols-2 gap-6">
      <div className="bg-[#000005] flex cart items-center text-white">
        <div className="w-[55%] h-[300px]  overflow-hidden img1-opacity"></div>
        <div className="text-left">
          <p className="tracking-[0.3rem] text-[16px]  text-[#f7c906] ">
            Tires & wheels
          </p>
          <h2 className="uppercase text-4xl my-6 ">Exclusive rims</h2>
          <button className="primary-btn">Shop Now</button>
        </div>
      </div>
      <div className="bg-[#000005] flex cart items-center text-white">
        <div className="w-[55%] h-[300px]  overflow-hidden img2-opacity"></div>
        <div className="text-left">
          <p className="tracking-[0.3rem] text-[16px]  text-[#f7c906] ">
            Auto Repires
          </p>
          <h2 className="uppercase text-4xl my-6 reversible-text">
            Exclusive tires
          </h2>
          <button className="primary-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
