import Head from "next/head";
import { GlobeIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";

import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google 2.0 AKA Foogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex justify-between p-3  w-full text-sm text-gray-700">
        {/* left side */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right side */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>

          {/* icon */}
          <ViewGridIcon className="w-5 h-5 p-1 rounded-full hover:bg-gray-300 cursor-pointer" />
          {/* image */}
          <div className="p-1 bg-blue-500 rounded-full cursor-pointer transition duration-150 hover:scale-105 ease-in-out">
            <img
              loading="lazy"
              src="https://lh3.googleusercontent.com/a-/AOh14GjkbYYp7lahAZhwF2jCOwBnPjXXYZhGNfuvvi9O8dQ=s96-c"
              width="35"
              height="50"
              className="rounded-full "
            />
          </div>
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow  mb-20">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={66}
          width={200}
        />
        <div
          className="flex border rounded-full hover:shadow-lg focus-within:shadow-lg max-w-md px-5 py-3 items-center 
        md:max-w-xl lg:max-w-2xl  mt-2 w-3/4"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-1 focus:outline-none "
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 
        sm:flex-row sm:space-x-4"
        >
          <button className="searchButton" onClick={search}>
            Foogle Search
          </button>
          <button className="searchButton" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* footer */}
      <div
        className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100
        text-sm text-gray-500 "
      >
        <div className="px-8 py-3">
          <p> Browsing From Kenya</p>
          <p></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
          <div
            className="flex justify-center items-center md:col-span-2 
            lg:col-span-1 lg:col-start-2"
          >
            <GlobeIcon className="h-5 mr-1 text-green-700" />
            <p>Carbon Neurtal Since 2007 </p>
          </div>
          <div
            className="flex justify-center space-x-8 whitespace-nowrap
            md:justify-self-start"
          >
            <p>Advertising</p>
            <p>Business</p>
            <p>Now Search Works</p>
          </div>
          <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto pr-5">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </div>

      {/* mini footer */}
    </div>
  );
}
