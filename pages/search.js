import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

function Search() {
    const router = useRouter();
    const searchInputRef = useRef("");

    const search =(e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        
        if(!term) return;

        router.push(`/search?term=${term}`)
    }
    return (
        <div>
            <Head>
                <title>Search Results </title>
            </Head>

            {/* header */}
           <header className="sticky top-0 bg-white">
               
              <div className="flex w-full p-6 items-center">
                <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                height={40} width={120} className="cursor-pointer" 
                onClick={()=>router.push('/')}/>

                    <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center
                    px-6 py-2 ml-10 mr-5">
                        <input type="text" ref={searchInputRef} className="flex flex-1 w-full focus:outline-none"/>

                        <XIcon className="cursor-pointer h-5 text-gray-500 transition duration-100 transform 
                        hover:scale-125 sm:m-3" onClick={()=>searchInputRef.current.value=""}/>
                        <MicrophoneIcon className="h-5 text-blue-500 hover:scale-125 sm:m-2 hidden  sm:inline-flex border-l-2
                        pl-4 border-gray-300" />
                        <SearchIcon className="h-5 text-blue-500 hover:scale-125 sm:m-2 hidden sm:inline-flex" />

                        <button hidden type="submit" onClick={search}>Search</button>
                    </form>

                    <div className="p-1 bg-blue-500 rounded-full cursor-pointer transition duration-150 hover:scale-105 ease-in-out ml-auto">
                        <img loading="lazy" src="https://lh3.googleusercontent.com/a-/AOh14GjkbYYp7lahAZhwF2jCOwBnPjXXYZhGNfuvvi9O8dQ=s96-c"
                        width="35" height="50" className="rounded-full " />
                    </div>
                    
              </div>
             
               
           </header>
            {/* results */}
        </div>
    )
}

export default Search
