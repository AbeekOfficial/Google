import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="flex w-[600px] items-center rounded-lg relative">
      <input
        type="text"
        className="w-full rounded-3xl py-3 bg-transparent border-gray-500 border hover:bg-[#ccc2] focus:bg-[#ccc2] focus:outline-none pl-12"
      />
      <div className="absolute left-5 text-[20px]">
        <IoIosSearch />
      </div>
    </div>
  );
}
