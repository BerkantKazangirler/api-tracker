import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import { Map, ViewPanel, Search } from "./components";
import { Errors, IPTrackerI } from "./components/types";
import { fetchData } from "./services/fetchData";

function App() {
  const [Ip, setIp] = useState(String);
  const [position, setPosition] = useState<any>([51.505, -0.09]);

  const [data, setData] = useState<IPTrackerI | any>(null);

  const [tempText, setTempText] = useState(String);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);

    fetchData(tempText).then(({ data, error }) => {
      if (!error) {
        setData(data);
        setPosition([data.lat, data.lon]);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        toast.warn(error);
        //console.log(error);
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
              <Search
                clickEvent={toggleIp}
                changeEvent={(e) => setTempText(e.currentTarget.value)}
              />
            </div>
            {!isLoading && (
              <div className="bg-white border border-black/20 2xl:h-44 lg:h-36 h-max 2xl:w-[1250px] xl:w-[1000px] lg:w-[800px] w-[500px] rounded-xl lg:mt-10 flex lg:flex-row flex-col z-10">
                <ViewPanel data={data} />
              </div>
            )}
          </div>
        </div>
        {!isLoading && (
          <div className="z-0 h-full">
            <Map position={position} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
