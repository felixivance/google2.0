import Head from 'next/head'
import { ViewGridIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
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
          <ViewGridIcon className="w-5 h-5 p-1 rounded-full hover:bg-gray-300 cursor-pointer"/>
          {/* image */}
          <div className="p-1 bg-blue-500 rounded-full cursor-pointer transition duration-150 hover:scale-105 ease-in-out">
            <img loading="lazy" src="https://lh3.googleusercontent.com/a-/AOh14GjkbYYp7lahAZhwF2jCOwBnPjXXYZhGNfuvvi9O8dQ=s96-c"
            width="35" height="50" className="rounded-full " />
          </div>
        </div>
      </header>
      {/* body */}
      <form>
        <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100} width={300} />
      </form>

      {/* footer */}

      {/* mini footer */}

     
    </div>
  )
}
