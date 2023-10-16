const BestSellers = () => {
  return (
    <>
      <div className=" border-gray-300 border mt-10 ">
        <h1 className="bg-[#f5f5f5] py-2 px-3">BESTSELLERS</h1>
        <ul className="px-3 flex-col flex gap-4 py-2">
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/16-85x85.jpg"
              alt=""
            />
            <div>
              <p>ipad Nano</p>
              <p>$122.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/17-85x85.jpg"
              alt=""
            />
            <div>
              <p>ipad Nano</p>
              <p>$122.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/11-85x85.jpg"
              alt=""
            />
            <div>
              <p>ipad Nano</p>
              <p>$122.00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <img
              className="p-2"
              src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/cache/catalog/productsimage/12-85x85.jpg"
              alt=""
            />
            <div>
              <p>ipad Nano</p>
              <p>$122.00</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BestSellers;
