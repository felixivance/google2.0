import Head from 'next/head';
import Image from 'next/image';

function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
            </Head>

            {/* header */}
           <header>
               
               <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
               height={40} width={120} 
               className="cursor-pointer"/>

               
           </header>
            {/* results */}
        </div>
    )
}

export default Search
