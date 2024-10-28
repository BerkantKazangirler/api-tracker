import { GoChevronRight } from "react-icons/go";

interface onClickProps {
  clickEvent: () => void;
  changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ clickEvent, changeEvent }: onClickProps) {
  return (
    <form action="#" className="flex justify-center">
      <input
        type="text"
        onChange={(e) => changeEvent(e)}
        placeholder="Search for any IP adress or domain"
        className="lg:w-[550px] w-[300px] px-4 py-4 rounded-l-xl border border-black z-20"
      />
      <button
        type="submit"
        onClick={() => clickEvent()}
        className="bg-black text-white px-3 rounded-r-xl z-20"
      >
        <GoChevronRight className="text-2xl" />
      </button>
    </form>
  );
}

export default Search;
