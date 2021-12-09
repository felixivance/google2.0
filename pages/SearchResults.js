import PaginationButtons from "../components/PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results?.searchInformation?.formattedTotalResults} results ({" "}
        {results?.searchInformation?.formattedSearchTime} Seconds)
      </p>

      {results?.items?.map((results, index) => (
        <div className="max-w-xl mb-8" key={index}>
          <div className="group">
            <a href={results.link} className="text-sm ">
              {results.formattedUrl}{" "}
            </a>
            <a href={results.link}>
              <h2 className="truncate text-blue-800 text-xl font-medium group-hover:underline">
                {results.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{results.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
