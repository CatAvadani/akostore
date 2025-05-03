import Menu from "@/components/shared/header/menu";
import { Input } from "@/components/ui/input";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import MainNav from "./mainNav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b container mx-auto">
          <div className="flex items-center h-16 px-4">
            <Link href="/" className=" flex-start">
              <h1 className=" lg:block font-bold text-2xl ml-3">{APP_NAME}</h1>
            </Link>
            {/* Main nav */}
            <MainNav className="mx-6" />
            <div className="ml-auto items-center flex space-x-4">
              <div>
                <Input
                  type="search"
                  placeholder="Search..."
                  className=" md:w-[100px] lg:w-[300px]"
                />
              </div>
              <Menu />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 container mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
