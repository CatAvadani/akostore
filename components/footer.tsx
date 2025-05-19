import { APP_NAME } from "@/lib/constants";
import {
  LucideIcon,
  Mail,
  Phone,
  Receipt,
  ShoppingBag,
  Tags,
} from "lucide-react";

interface FooterIconProps {
  Icon: LucideIcon;
  bgColor: string;
}

interface ContactIconProps {
  Icon: LucideIcon;
  text: string;
  href: string;
}

const FooterIcon = ({ Icon, bgColor }: FooterIconProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl"></div>
      <Icon
        className={`relative border-2 border-gray-200 h-16 w-16 md:h-20 md:w-20 rounded-full p-4 
        backdrop-blur-xl shadow-lg ${bgColor}`}
      />
    </div>
  );
};

const ContactIcon = ({ Icon, text, href }: ContactIconProps) => (
  <div className="flex items-center space-x-2">
    <Icon size={18} className="text-gray-300" />
    <a href={href} className="text-gray-300 hover:text-white text-sm">
      {text}
    </a>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t mt-20">
      <div className="absolute flex justify-center items-center gap-5 md:gap-10 w-full left-1/2 -translate-x-1/2 -top-10">
        <FooterIcon Icon={Receipt} bgColor="text-amber-500 bg-gray-100/20" />
        <FooterIcon
          Icon={ShoppingBag}
          bgColor="text-amber-500 bg-gray-100/20"
        />
        <FooterIcon Icon={Tags} bgColor="text-amber-500 bg-gray-100/20" />
      </div>

      {/* Light section */}
      <div className="py-8 px-4 md:px-8 bg-gradient-to-r from-neutral-50 to-neutral-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{APP_NAME}</h3>
            <p className="text-gray-600 text-sm max-w-md">
              Contemporary fashion for the modern individual. Quality
              craftsmanship with timeless designs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-medium mb-3">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Care Instructions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dark section */}
      <div className="p-4 md:p-6 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © {currentYear} {APP_NAME}. All Rights Reserved.
          </p>

          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
            <ContactIcon
              Icon={Mail}
              text="contact@akoandco.com"
              href="mailto:contact@akoandco.com"
            />
            <ContactIcon
              Icon={Phone}
              text="+46 123 456 789"
              href="tel:+46123456789"
            />
            <ContactIcon Icon={ShoppingBag} text="Store Locator" href="#" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
