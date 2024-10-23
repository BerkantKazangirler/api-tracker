import { GoChevronRight } from "react-icons/go";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

function App() {
  const [Ip, setIp] = useState(String);
  const [position, setPosition] = useState<any>([51.505, -0.09]);

  const [data, setData] = useState<DataTypes | null>(null);
  interface DataTypes {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    city: string;
    lat: number;
    lon: number;
    timezone: string;
    query: string;
    message: string;
    zip: string;
    isp: string;
    org: string;
  }

  const [tempText, setTempText] = useState(String);
  const [isLoading, setIsLoading] = useState(true);

  enum Errors {
    emptyInput = "Girdiğiniz değer boş veya hatalı",
    noData = "Girdiğiniz IP Adresi hatalı",
    sameData = "Girmeye çalıştığınız değer aynı",
  }

  function toggleIp() {
    if (tempText.trim() == "" || tempText == " ") {
      toast.error(Errors.emptyInput);
      return;
    }
    if (tempText === Ip) {
      toast.error(Errors.sameData);
      return;
    }
    setIp(tempText);
    fetchData(tempText);
  }

  function fetchData(ip: string) {
    fetch(`http://ip-api.com/json/${ip}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (res.status === "success") {
          setPosition([res.lat, res.lon]);
          setIsLoading(false);
        } else {
          toast.error(Errors.noData);
          setIsLoading(true);
        }
      });
  }

  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-col">
          <img
            src={"./assets/pattern.png"}
            className={classNames({
              "lg:max-h-[350px] h-[400px] w-full": !isLoading,
              "h-screen w-full": isLoading,
            })}
          />
          <div
            className={classNames(
              "absolute w-full items-center flex flex-col gap-6",
              {
                "my-auto justify-center h-full": isLoading,
              }
            )}
          >
            <span
              className={classNames("text-white text-3xl font-medium", {
                "pt-16": !isLoading,
              })}
            >
              IP Adress Tracker
            </span>
            <div className="flex flex-row">
              <form action="#" className="flex justify-center">
                <input
                  type="text"
                  onChange={(e) => setTempText(e.currentTarget.value)}
                  placeholder="Search for any IP adress or domain"
                  className="lg:w-[550px] w-max px-4 py-4 rounded-l-xl border border-black z-20"
                />
                <button
                  type="submit"
                  onSubmit={() => toggleIp()}
                  onClick={() => toggleIp()}
                  className="bg-black text-white px-3 rounded-r-xl z-20"
                >
                  <GoChevronRight className="text-2xl" />
                </button>
              </form>
            </div>
            {!isLoading && (
              <div className="bg-white border border-black/20 2xl:h-44 lg:h-36 h-max 2xl:w-[1250px] xl:w-[1000px] lg:w-[800px] w-fit rounded-xl lg:mt-10 flex lg:flex-row flex-col z-10">
                <div className="lg:p-8 py-4 flex flex-col gap-2 lg:w-64 w-full">
                  <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
                    IP ADRESS
                  </span>
                  <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium w-full lg:text-start text-center">
                    {data ? data.query : "Veri Yok"}
                  </span>
                </div>
                <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
                <div className="lg:p-8 py-4 flex flex-col gap-2 lg:w-64 w-full">
                  <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
                    LOCATION
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 lg:w-fit w-full">
                      <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
                        {data ? data.city : "Veri Yok"}
                      </span>

                      <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
                        {data ? data.zip : "Veri Yok"}
                      </span>
                    </div>
                    <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
                      {data ? data.country : "Veri Yok"}
                    </span>
                  </div>
                </div>
                <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
                <div className="lg:p-8 py-4 flex flex-col lg:w-64 w-full 2xl:w-[22rem]">
                  <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
                    TIMEZONE
                  </span>
                  <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:w-fit w-full lg:text-start text-center">
                    UTC - {data ? data.timezone : "Veri Yok"}
                  </span>
                </div>
                <span className="m-8 text-gray-500/40 border hidden xl:flex"></span>
                <div className="lg:p-8 py-4 flex flex-col">
                  <span className="font-medium text-gray-500 text-xs lg:text-start text-center">
                    ISP
                  </span>
                  <span className="2xl:text-2xl xl:text-xl lg:text-lg text-base font-medium lg:text-start text-center">
                    {data ? data.isp : "Veri Yok"}
                  </span>
                  <span className="2xl:text-2xl xl:text-xl lg:text-lg font-medium lg:text-start text-center">
                    {data ? data.org : "Veri Yok"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isLoading && (
          <div className="z-0 h-full">
            <MapContainer className="w-full h-full" center={position} zoom={7}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>
                  {data ? data.city : "Veri Yok"} ,
                  {data ? data.country : "Veri Yok"}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
