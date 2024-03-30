import { FiEdit } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";

import HeaderRate from "./HeaderRate";
import Image from "next/image";
import HeroImage from "@/public/assets/hero-image.png";

function HeaderContent() {
  return (
    <div className="px-10 md:px-20 md:container md:mx-auto">
      <div className="text-white">
        <h1 className="text-4xl font-black leading-tight mb-5 md:text-[50px]">
          Learn the art of <br /> Game Dev
        </h1>
        <p className="w-[330px] mb-8 leading-loose md:w-full">
          This is a comprehensive course on Game Development. You will learn
          everything from generating an idea to publishing your games to
          different platforms.
        </p>
        <div className="flex justify-center items-center bg-orangeColor w-48 py-4 px-6 space-x-3 rounded-full ">
          <FiEdit className="inline-block " />
          <span className="font-bold">Enrol Now</span>
        </div>
      </div>

      <div className="flex items-center justify-center relative">
        <div className="absolute top-20 left-20 space-y-16">
          <HeaderRate title="32K" text="Students Enrolled" />
          <HeaderRate title="4.7" icon={<IoMdStar />} text="Overall Rating" />
        </div>

        <div className="absolute top-0 -right-24">
          <Image src={HeroImage} className="w-[320px] md:w-[400px]"></Image>
        </div>
      </div>
    </div>
  );
}
export default HeaderContent;
