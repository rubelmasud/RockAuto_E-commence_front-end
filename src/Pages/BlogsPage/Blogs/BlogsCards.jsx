import { useEffect } from "react";
import { useState } from "react";

const BlogsCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("blogsCards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      {cards.map((card, i) => (
        <div key={i} className="gap-6 mb-10 md:flex">
          <img className="md:w-[400px]" src={card.image} alt="" />

          <div>
            <h1 className="text-3xl mb-5 font-medium">
              SCELERISQUE VESTIBULUM URNA
            </h1>
            <p className="mb-5">28 August, 2021</p>
            <p> 0 Comment Leave Comment</p>
            <p className="my-8 text-slate-600">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>
            <button className="bg-red-700 px-4 py-3 text-white text-2xl rounded-md">
              Read More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsCards;
