import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  return (
    <div className="relative py-16 px-10 sm:bg-red-700 md:bg-transparent lg:bg-yellow-400">
      <nav className=" md:container md:mx-auto flex justify-between items-center -mb-2">
        <div>
          <h1 className=" text-4xl text-white font-black">GD.</h1>
        </div>

        <div className="hidden md:block  space-x-10 text-white font-bold">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Our Work</Link>
          <Link href={"/"} className="bg-darkBlue py-4 px-6 rounded-full">
            Enrol Now
          </Link>
        </div>

        <div className="sm:hidden">
          <HiMenuAlt4 className="size-10 cursor-pointer hover:text-white" />
        </div>
      </nav>

      <div className="bg-black text-white flex flex-col absolute inset-0 sm:hidden h-screen py-10 px-10 hidden">
        <div className="self-end">
          <RxCross2 className="size-10 cursor-pointer" />
        </div>

        <div className="mt-40 flex flex-col self-center text-center text-2xl space-y-10">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Our Work</Link>
          <Link href={"/"} className="bg-orangeColor px-5 py-3 rounded-full">
            Enrol Now
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
