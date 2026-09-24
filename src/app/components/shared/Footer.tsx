import Image from "next/image";
import React from "react";
import footerLogo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className=" shadow-sm py-6 border-t border-[#191f32]">
        <footer className="container mx-auto  footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 ">
          <aside className="grid-flow-col items-center">
            <Image src={footerLogo} alt="FooterLogo.png" />
            <p className="font-semibold">FITLOG</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>
              ©{new Date().getFullYear()} FitLog — Workout Library. Train hard,
              log honest
            </p>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
