"use client";

import Link from "next/link";

const RetailerDashboardSidebar = () => {
  return (
    <ul className="h-full w-[20vw] flex-none border-r border-gray-300 text-black flex flex-col items-stretch hover:cursor-pointer">
      <Link
        className="border-b border-gray-300  w-full self-stretch text-center flex justify-center items-center flex-1"
        href={"/"}
      >
        Text1
      </Link>
      <Link
        className="border-b border-gray-300 w-full self-stretch text-center flex justify-center items-center 0 flex-1"
        href={"/"}
      >
        Text12
      </Link>
      <Link
        className="border-b border-gray-300 w-full self-stretch text-center flex justify-center items-center  flex-1"
        href={"/"}
      >
        Text13
      </Link>
      <Link
        className="border-b border-gray-300  w-full self-stretch text-center  flex justify-center items-center flex-1"
        href={"/"}
      >
        Text14
      </Link>
      <Link
        className="border-b border-gray-300 w-full self-stretch text-center flex justify-center items-center flex-1"
        href={"/"}
      >
        Text15
      </Link>
      <Link
        className="border-b border-gray-300 w-full self-stretch text-center  flex justify-center items-center  flex-1"
        href={"/"}
      >
        Text2
      </Link>
      <Link
        className="border-b border-gray-300  w-full self-stretch text-center  flex justify-center items-center flex-1"
        href={"/"}
      >
        Text3
      </Link>
    </ul>
  );
};

export default RetailerDashboardSidebar;
