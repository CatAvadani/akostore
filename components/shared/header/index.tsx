import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import CategoryDrawer from "./categoryDrawer";
import Menu from "./menu";
import Search from "./search";

const Header = () => {
  return (
    <header className=" w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className=" flex-start ml-2">
            <h1 className=" lg:block font-bold text-2xl ml-3">{APP_NAME}</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
