import { AiFillCar } from "react-icons/ai";
import { BiSolidCarWash } from "react-icons/bi";
import { TbWashDryA } from "react-icons/tb";

const FeatureItem = ({ Icon, title, description }) => (
  <div className="text-center px-6">
    <Icon
      size={60}
      className="justify-center hover:text-[#f7c906] hover:-translate-y-4 duration-500 mx-auto text-center block w-full"
    />
    <h4 className="text-3xl mb-2 text-[#a51016]">{title}</h4>
    <p className="text-[13px]">{description}</p>
  </div>
);

const Feature = () => {
  const features = [
    {
      Icon: AiFillCar,
      title: "Deep Cleaning",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
    {
      Icon: BiSolidCarWash,
      title: "Air Wash",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
    {
      Icon: TbWashDryA,
      title: "Dry Wash",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
    {
      Icon: AiFillCar,
      title: "Oil Changes",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
    {
      Icon: BiSolidCarWash,
      title: "Mirror Wash",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
    {
      Icon: TbWashDryA,
      title: "Air Checker",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, voluptate.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3">
      <div className="left_side_feature flex flex-col gap-10">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
      <div className="center_banner -translate-y-48 hover:-translate-y-10 duration-700">
        <img
          src="https://demo.ishithemes.com/opencart/OPC138/OPC138/image/catalog/features/features-banner.png"
          alt=""
        />
      </div>
      <div className="right_side_feature flex flex-col gap-10">
        {features.slice(3).map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
