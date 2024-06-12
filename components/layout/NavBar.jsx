import { navItems } from "@/data/navBar";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white rounded-full shadow-md px-6 py-4 flex items-center justify-between mx-4 my-4 font-bold">
      <div className="flex items-center">
        <span className="text-xl font-bold container">
          <Image
            src="/images/navBar/TestLogo.png"
            alt="TechCare Logo"
            width={211}
            height={48}
            className="mr-4"
          />
        </span>
      </div>
      <div className="flex items-center space-x-8">
        {navItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border">
              <Image
                src={item.src}
                alt={item.alt}
                width={20}
                height={20}
                className="mr-2"
              />
              {item.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Image
          src="/images/navBar/senior.png"
          alt="Dr. Jose Simmons"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <div className="text-gray-600">
          <p>Dr. Jose Simmons</p>
          <p className="text-sm">General Practitioner</p>
        </div>
        <div className="border border-black-600 mx-3 h-10"></div>
        <Image
          src="/icons/navBar/gear.svg"
          alt="Dr. Jose Simmons"
          width={19}
          height={20}
          className="rounded-full mr-4"
        />
        <Image
          src="/icons/navBar/dots.svg"
          alt="Dr. Jose Simmons"
          width={4}
          height={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
