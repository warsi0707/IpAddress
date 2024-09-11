import Navbar from "./Navbar";
export default function About() {
  return (
    <>
      <div className="h-full md:h-full bg-cover  bg-blue-600 bg-[url('/image/download.png')]">
        <Navbar />
        <div className="py-10">
          <div className="bg-gray-100 px-5 p-8 rounded-lg shadow-md md:max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About IP Address App
            </h2>
            <p className="text-gray-700 mb-4">
              The <strong>IP Address App</strong> is a simple yet powerful tool
              developed using
              <strong> React JS</strong> and styled with{" "}
              <strong>Tailwind CSS</strong>. This application allows users to
              input an IP address and retrieve detailed information, such as
              geographical location, internet service provider (ISP), and more.
              The app fetches this data using a reliable <strong>IP API</strong>
              , providing users with real-time details about any IP address they
              search for.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Development Process
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                <strong>React JS</strong>: Used for its component-based
                structure and efficient rendering.
              </li>
              <li>
                <strong>Tailwind CSS</strong>: For responsive design with easy
                customization.
              </li>
              <li>
                <strong>IP API</strong>: Fetches location, ISP, and other
                details of the IP.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Features
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                Search for any valid IP address to get detailed information.
              </li>
              <li>Responsive design for desktop and mobile.</li>
              <li>
                Displays city, region, country, latitude, longitude, and ISP of
                the IP.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Installation
            </h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700">
              <li>
                Clone the repository:
                <pre className="bg-gray-200 p-2 rounded mt-2">
                  <code>
                    git clone https://github.com/your-repo/ip-address-app.git
                    <br />
                    cd ip-address-app
                  </code>
                </pre>
              </li>
              <li>
                Install dependencies:
                <pre className="bg-gray-200 p-2 rounded mt-2">
                  <code>npm install</code>
                </pre>
              </li>
              <li>
                Set up the IP API:
                <pre className="bg-gray-200 p-2 rounded mt-2">
                  <code>
                    # Create a .env file and add your API key:
                    <br />
                    REACT_APP_IP_API_KEY=your_api_key_here
                  </code>
                </pre>
              </li>
              <li>
                Start the application:
                <pre className="bg-gray-200 p-2 rounded mt-2">
                  <code>npm start</code>
                </pre>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Usage</h3>
            <p className="text-gray-700 mb-4">
              1. Open the app by navigating to{" "}
              <strong>http://localhost:3000/</strong>.<br />
              2. Enter a valid IP address in the search box.
              <br />
              3. Click on the "Search" button.
              <br />
              4. The app will display detailed information about the IP address,
              including city, region, country, latitude, longitude, and ISP.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
