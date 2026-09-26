"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/logo.png";
import PlanButton from "./PlanButton";
import SavedButton from "./SavedButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`font-semibold text-lg ${pathname === "/" ? "text-[#CBF60C]" : "hover:text-[#CBF60C]"}`}
        >
          Workout
        </Link>
      </li>
      <li>
        <Link
          href={"/myPlan"}
          className={`font-semibold text-lg ${pathname === "/myPlan" ? "text-[#CBF60C]" : "hover:text-[#CBF60C]"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-[#0C0D10] shadow-md">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              href={"/"}
              className="flex justify-items-center items-center gap-3"
            >
              <Image src={Logo} height={35} alt="Logo.png" />
              <span className="text-xl font-semibold">FITLOG</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-2 mr-3">
            <PlanButton />
            <SavedButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
