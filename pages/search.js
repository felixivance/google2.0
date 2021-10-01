import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

function Search() {
    const router = useRouter();
    const searchInputRef = useRef("");
    return (
        <div>
            <Head>
                <title>Search Results</title>
            </Head>

            {/* header */}
           <header className="">
               
               <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
               height={40} width={120} className="cursor-pointer" 
               onClick={()=>router.push('/')}/>

                <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center
                px-6 py-3 ml-10 mr-5">
                    <input type="text" ref={searchInputRef} className="flex flex-1 w-full focus:outline-none"/>

                    <XIcon className="cursor-pointer h-7 text-gray-500 transition duration-100 transform 
                    hover:scale-125"/>
                </form>
               
           </header>
            {/* results */}
        </div>
    )
}

export default Search
