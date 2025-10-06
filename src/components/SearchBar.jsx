import { useIP } from "../context/IPProvider";
import "../App.css";
import { useState } from "react";
function SearchBar() {
  const { setSearchval, isLoading } = useIP();
  const [localSearch, setLocalSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSearchval(localSearch);
    setLocalSearch("");
  }
  return (
    <header
      className="relative text-white text-center pb-32
    pt-12 font-rubik bg-[url(images/pattern-bg-desktop.png)] bg-no-repeat bg-cover">
      <h1 className="p-1 text-3xl font-semibold mb-5">IP Address Tracker</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="rounded-lg overflow-hidden mx-auto w-5/6 md:w-2/6 flex">
          <input
            type="text"
            className=" text-Gray-400 outline-none bg-white p-3 w-full"
            placeholder={
              isLoading
                ? "Searching ..."
                : "Search for any IP address or domain"
            }
            value={localSearch}
            disabled={isLoading}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black px-5 py-4 active:bg-Gray-950">
            <img src="images/icon-arrow.svg" />
          </button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
