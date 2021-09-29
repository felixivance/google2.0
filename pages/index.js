import Head from 'next/head'

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
          {/* image */}
          <div className="p-1 bg-blue-500 rounded-full">
            <img loading="lazy" src="https://lh3.googleusercontent.com/a-/AOh14GjkbYYp7lahAZhwF2jCOwBnPjXXYZhGNfuvvi9O8dQ=s96-c"
            width="35" height="50" className="rounded-full" />
          </div>
        </div>
      </header>
      {/* body */}

      {/* footer */}

      {/* mini footer */}

     
    </div>
  )
}
