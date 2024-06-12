import { navItems } from "@/data/navBar";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white rounded-full shadow-md px-6 py-4 flex items-center justify-between mx-4 my-4 font-bold">
      <div className="flex items-center">
        <span className="text-xl font-bold container relative w-[211px] h-[48px]">
          <Image
            src="/images/navBar/TestLogo.png"
            alt="TechCare Logo"
            layout="fill"
            objectFit="contain"
          />
        </span>
      </div>
      <div className="flex items-center space-x-8">
        {navItems.map((item, i) => (
          <Link key={i} href={item.href} passHref>
            <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
              <div className="relative w-[30px] h-[30px] mr-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {item.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <div className="relative w-[40px] h-[40px] mr-4">
          <Image
            src="/images/navBar/senior.png"
            alt="Dr. Jose Simmons"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="text-gray-600">
          <p>Dr. Jose Simmons</p>
          <p className="text-sm">General Practitioner</p>
        </div>
        <div className="border border-black-600 mx-3 h-10"></div>
        <div className="relative w-[19px] h-[20px] mr-4">
          <Image
            src="/icons/navBar/gear.svg"
            alt="Settings"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-[4px] h-[20px]">
          <Image
            src="/icons/navBar/dots.svg"
            alt="More options"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
