import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <div className="navbar flex justify-between md:w-full p-5 md:p-10 md:justify-evenly text-white">
          <div className=" flex  text-lg md:text-3xl ">
            <img src="/image/logo.png" className="h-10 md:h-14" />
            <NavLink to="/"> <h1>IP</h1></NavLink>s
           
          </div>
          <div>
            <div className=" flex gap-2 md:gap-5  text-lg md:text-3xl ">
              <NavLink to="/about">About</NavLink>
              <h1 className="">Conatact</h1>
              <h1 className="">Usage</h1>
            </div>
          </div>
        </div>
        
        </>
    )
}