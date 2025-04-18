import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className=" w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className=" flex-start">
            <h1 className=" lg:block font-bold text-2xl ml-3">{APP_NAME}</h1>
          </Link>
          <ul className="hidden md:flex gap-6 ml-10">
            <Link href="/" className=" hover:text-gray-500">
              Men
            </Link>
            <Link href="/" className="hover:text-gray-500">
              Women
            </Link>
            <Link href="/" className="hover:text-gray-500">
              Kids
            </Link>
          </ul>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
