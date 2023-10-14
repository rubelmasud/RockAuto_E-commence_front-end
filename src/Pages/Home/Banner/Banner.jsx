import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className="md:px-12 px-6 banner-img">
        <div className="md:w-6/12  text-center justify-center  absolute top-[30%]  p-12 opacity-90">
          <div className="bg-[#f7c906] w-fit px-6 py-2 justify-center mx-auto">
            <p className="tracking-[0.6rem] text-[14px] text-center text-[#a51016]">
              New Offer 20% Off
            </p>
          </div>
          <div className="text-white my-8">
            <h1 className="text-6xl   uppercase mb-4">Auto Compressor</h1>
            <p className="text-slate-200 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              cupiditate nisi corporis amet laudantium quas quos magnam placeat
              error laboriosam.
            </p>
          </div>
          <button className="primary-btn"> Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
