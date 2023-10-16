import BestSellers from "./BestSellers";
import BlogsCards from "./BlogsCards";
import LatestProducts from "./LatestProducts";
import { AiFillHome } from "react-icons/ai";

const Blogs = () => {
  return (
    <div className="">
      <div className="blog_banner w-full h-32 bg-[#f5f5f5] mb-6 flex items-center justify-center">
        <h2 className="flex items-center gap-2 text-2xl">
          <AiFillHome /> <span>| Blog</span>
        </h2>
      </div>
      <div className="md:flex gap-4 md:px-12 px-6">
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

        <article className="">
          <BlogsCards></BlogsCards>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
