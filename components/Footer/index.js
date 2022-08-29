import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="text-center">
          <h1 className="text-2xl text-bold uppercase">
            Need a data engineer?
          </h1>
          <div className="mt-10 relative">
            <Link href="mailto:d.e.adepoju@gmail.com">
              <a>
                <div className="flex items-center justify-center gap-5">
                  <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                    Let&apos;s Collaborate
                  </h1>
                  <svg
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    xmlns="http://www.w3.org/2000/svg"
                    class="bow-arrow"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeMiterlimit="0"
                      d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
                    ></path>
                  </svg>
                </div>
              </a>
            </Link>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://ponnle.xyz">
          <a className="underline underline-offset-1">Onuchukwu Adebayo</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
