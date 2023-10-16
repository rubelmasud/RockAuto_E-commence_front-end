import BestSellers from "./BestSellers";
import BlogsCards from "./BlogsCards";
import LatestProducts from "./LatestProducts";

const Blogs = () => {
  return (
    <div className="md:flex gap-4">
      <article className="md:w-[400px]">
        <div className=" border-gray-300 border ">
        <h1 className="bg-[#f5f5f5] py-2 px-3">CATEGORIES</h1>
        <ul className="px-3 flex-col flex gap-4 py-2">
          <li>Glow</li>
          <li>Accessories</li>
          <li>Collection</li>
          <li>Components</li>
          <li>Outfites</li>
          <li>Brands</li>
        </ul>
        </div>

        <BestSellers></BestSellers>
        <LatestProducts></LatestProducts>



      </article>


      <article className="" >

<BlogsCards></BlogsCards>
       
      </article>
    </div>
  );
};

export default Blogs;
