const LatestProducts = () => {
  return (
    <>
      <img
        className="mt-10"
        src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/Left-banner-270x350.png"
        alt=""
      />
      <div className=" border-gray-300 border mt-10 ">
        <h1 className="bg-[#f5f5f5] py-2 px-3">LATEST PRODUCTS</h1>
        <ul className=" flex-col flex gap-4 py-2">
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/6-85x85.jpg"
              alt=""
            />
            <div>
              <p className="">Samsung Galaxy</p>
              <p>Tab 10.1</p>
              <p>$20.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/15-85x85.jpg"
              alt=""
            />
            <div>
              <p className="">Samsung Galaxy</p>
              <p>Tab 10.1</p>
              <p>$20.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/11-85x85.jpg"
              alt=""
            />
            <div>
              <p className="">Samsung Galaxy</p>
              <p>Tab 10.1</p>
              <p>$20.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/8-85x85.jpg"
              alt=""
            />
            <div>
              <p className="">Samsung Galaxy</p>
              <p>Tab 10.1</p>
              <p>$20.00</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LatestProducts;
