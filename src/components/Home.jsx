import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [ipAddress, setIpAddress] = useState();
  const [ipData, setIpData] = useState({});
  const [error, setError] = useState(false);
  const IpUrl = "http://ip-api.com/json";

  // Function to validate IP address format
  const isValidIP = (ipAddress) => {
    const regex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ipAddress);
  };

  const GetData = async () => {
    if (!isValidIP(ipAddress)) {
      setError("Invalid IP address format. Please enter a valid IP address");
      return;
    }
    try {
      const response = await fetch(`${IpUrl}/${ipAddress}`);
      const jsonResponse = await response.json();
      setIpData(jsonResponse);
    } catch (err) {
      setError("no data found");
    }
  };

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
        <Navbar />
        {error && (
          <div className="bg-red-100 text-red-700 p-2 sm:p-3 md:p-4 rounded w-[300px] sm:w-[400px] md:w-[500px] text-center mx-auto md:mb-4">
            <p>{error}</p>
          </div>
        )}
        <div className="md:flex md:mt-5   mx-auto  md:gap-10 md:p-5 md:mx-10 ">
          <div className="leftside flex flex-col text-center w-1/2 mx-auto my-4 md:my-14 mt-0 sm:mt-10  justify-center text-4xl text-white md:mt-0 ">
            <span>an APP to find the </span>
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
                  className=" bg-purple-200 p-2 sm:p-4 md:p-4 rounded-lg text-blac k hover:bg-purple-300"
                  onClick={handleSubmit}
                >
                  IPLookUp
                </button>
                
              </div>
              <div className="data">
                <div className="p-4 sm:p-3 md:p-5 space-y-2 sm:space-y-3 md:space-y-5 ">
                  <div className="bg-white overflow-hidden text-black p-4 px-2 sm:px-4 rounded-md md:px-10 flex justify-between">
                    <p className="text-start">IP address:</p>
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
