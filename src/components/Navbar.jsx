import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar flex justify-between md:w-full p-5 md:p-10 md:justify-evenly text-white">
        <div className=" flex  text-lg md:text-3xl ">
          <img src="/image/logo.png" className="h-10 md:h-14" />
          <NavLink to="/"><h1 >IP</h1></NavLink>
        </div>
        <div>
          <div className=" flex gap-2 md:gap-5  text-lg md:text-3xl ">
            <NavLink to="/about" className="hover:text-purple-500">About</NavLink>
            <NavLink to="https://github.com/warsi0707/IpAddress" className="hover:text-gray-700 ">GitHub</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
