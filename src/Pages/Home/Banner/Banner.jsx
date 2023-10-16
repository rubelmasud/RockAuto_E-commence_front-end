import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className="md:px-12 px-6 banner-img md:h-[85vh] h-[40vh]">
        <div className="md:w-6/12  md:text-center justify-center  absolute md:top-[30%]  p-12 opacity-90">
          <div className="bg-[#f7c906] w-fit px-6 py-2 md:justify-center md:mx-auto">
            <p className="tracking-[0.6rem] text-[14px]  text-[#a51016]">
              New Offer 20% Off
            </p>
          </div>
          <div className="text-white my-8">
            <h1 className="md:text-6xl text-5xl  uppercase mb-4">
              Auto Compressor
            </h1>
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
