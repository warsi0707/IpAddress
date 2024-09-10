import { useState } from "react";
import Navbar from "./Navbar";
export default function Home() {
  const [ipAddress, setIpAddress] = useState();
  const [ipData, setIpData] = useState({});
  const IpUrl = "http://ip-api.com/json";

  async function GetData() {
    const response = await fetch(`${IpUrl}/${ipAddress}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setIpData(jsonResponse);
  }

  let handleInput = (event) => {
    setIpAddress(event.target.value);
  };

  let handleSubmit = () => {
    setIpAddress("");
    setIpData(GetData);
  };

  return (
    <>
      <div className="main  h-[800px] sm:h-full  md:w-full bg-cover  bg-blue-600 bg-[url('/image/download.png')]">
      <Navbar/>
        {/* <div className="navbar flex justify-between md:w-full p-5 md:p-10 md:justify-evenly text-white">
          <div className=" flex  text-lg md:text-3xl ">
            <img src="/image/logo.png" className="h-10 md:h-14" />
            <h1>IP</h1>
          </div>
          <div>
            <div className=" flex gap-2 md:gap-5  text-lg md:text-3xl ">
              <h1 className="">About</h1>
              <h1 className="">Conatact</h1>
              <h1 className="">Usage</h1>
            </div>
          </div>
        </div> */}

        <div className="md:flex md:mt-5   mx-auto  md:gap-10 md:p-5 md:mx-10 ">
          <div className="leftside flex flex-col text-center w-1/2 mx-auto my-4 md:my-14 mt-0 sm:mt-10  justify-center text-4xl text-white md:mt-0 ">
            <span>an API to find the </span>
            <span>Ip Address</span>
          </div>
          <div className=" rightside  w-[350px] p-5 mx-auto rounded-lg   bg-red-300   md:p-10 text-center sm:w-[550px] md:w-[600px]">
            <div>
              <div className="inpt space-y-2 md:flex mx-2 md:mx-5 md:gap-5">
                <input
                  type="text"
                  className="w-full p-2 sm:p-4  md:p-4 rounded-md"
                  placeholder="IP Address"
                  value={ipAddress}
                  onChange={handleInput}
                />
                <button
                  className=" bg-purple-200 p-2 sm:p-4 md:p-4 rounded-lg text-black"
                  onClick={handleSubmit}
                >
                  IPLookUp
                </button>
              </div>
              <div className="data">
                <div className="p-4 sm:p-3 md:p-5 space-y-2 sm:space-y-3 md:space-y-5 ">
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">ip address:</p>
                    <p className="text-start">{ipData.query}</p>
                  </div>
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">City:</p>
                    <p className="text-start">{ipData.city}</p>
                  </div>
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">State:</p>
                    <p className="text-start">{ipData.regionName}</p>
                  </div>
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">Country: </p>
                    <p className="text-start">{ipData.country}</p>
                  </div>
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">Time Zone</p>
                    <p className="text-start">{ipData.timezone}</p>
                  </div>
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">Pin Code:</p>
                    <p className="text-start">{ipData.zip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
