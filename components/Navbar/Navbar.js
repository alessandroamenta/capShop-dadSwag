import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ products }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul className="flex justify-between items-center px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.2)] text-black h-20 font-medium text-lg lg:justify-around bg-gray-100">
        <div className="absolute flex lg:!hidden">
          <button
            className="focus:outline-none z-20"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl lg:!hidden" />
          </button>
          <div
            className={`z-10 fixed top-0 left-0 h-screen w-screen bg-white transform ${
              open ? "-translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out filter  `}
          >
            <div className="flex flex-col justify-center items-center mt-28">
              <Link href={"/api/auth/signin"}>
                <div
                  className="text-2xl font-bold my-4 hover:text-cyan-400"
                  href="#"
                >
                  Sign In
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-10"></div>
        <div className="w-2/5">
          <Link href="/" passHref legacyBehavior>
            <a
              className="block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl font-bold text-gray-800"
              width="200px"
            >
              DadSwag
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SearchBar products={products} />
          <Link href={"/api/auth/signin"}>
            <FontAwesomeIcon icon={faCircleUser} className="text-2xl z-10" />
          </Link>
          <Link href={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} className="text-2xl z-10" />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

