import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center text-sm text-gray-500">
        {currentYear} {APP_NAME} © All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
