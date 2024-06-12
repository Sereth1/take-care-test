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
        <Link href="/overview" passHref>
          <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
            <div className="relative w-[30px] h-[30px] mr-2">
              <Image
                src="/icons/navBar/home.svg"
                alt="Overview"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Overview
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
            <div className="relative w-[30px] h-[30px] mr-2">
              <Image
                src="/icons/navBar/patients.png"
                alt="Patients"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Patients
          </div>
        </Link>
        <Link href="/schedule" passHref>
          <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
            <div className="relative w-[30px] h-[30px] mr-2">
              <Image
                src="/icons/navbar/home.svg"
                alt="Schedule"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Schedule
          </div>
        </Link>
        <Link href="/message" passHref>
          <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
            <div className="relative w-[30px] h-[30px] mr-2">
              <Image
                src="/icons/navbar/home.svg"
                alt="Message"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Message
          </div>
        </Link>
        <Link href="/transactions" passHref>
          <div className="flex items-center text-gray-600 hover:bg-navBarHover hover:rounded-full p-2 box-border cursor-pointer">
            <div className="relative w-[30px] h-[30px] mr-2">
              <Image
                src="/icons/navbar/home.svg"
                alt="Transactions"
                layout="fill"
                objectFit="contain"
              />
            </div>
            Transactions
          </div>
        </Link>
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
