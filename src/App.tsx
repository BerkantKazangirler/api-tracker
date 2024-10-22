import { GoChevronRight } from "react-icons/go";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const position = [51.505, -0.09]; // Londra koordinatları

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col">
          <img src={"./assets/pattern.png"} className="w-full max-h-[350px]" />
          <div className="absolute w-full items-center flex flex-col gap-6">
            <span className="text-white text-3xl font-medium pt-16">
              IP Adress Tracker
            </span>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Search for any IP adress or domain"
                className="w-[550px] px-4 py-4 rounded-l-xl border border-black"
              />
              <button className="bg-black text-white px-3 rounded-r-xl">
                <GoChevronRight className="text-2xl" />
              </button>
            </div>
            <div className="bg-white border border-black/20 h-44 w-[1350px] rounded-xl mt-10 flex flex-row z-10">
              <div className="p-8 flex flex-col gap-2 w-64">
                <span className="font-medium text-gray-500 text-xs">
                  IP ADRESS
                </span>
                <span className="text-2xl font-medium w-full">
                  192.212.174.101
                </span>
              </div>
              <span className="m-8 text-gray-500/40 border"></span>
              <div className="p-8 flex flex-col gap-2 w-72">
                <span className="font-medium text-gray-500 text-xs">
                  LOCATION
                </span>
                <div className="flex flex-col">
                  <span className="text-2xl font-medium w-full">
                    Brooklyn, NY
                  </span>
                  <span className="text-2xl font-medium w-full">10001</span>
                </div>
              </div>
              <span className="m-8 text-gray-500/40 border"></span>

              <div className="p-8 flex flex-col gap-2 w-72">
                <span className="font-medium text-gray-500 text-xs">
                  TIMEZONE
                </span>
                <span className="text-2xl font-medium">UTC -05:00</span>
              </div>
              <span className="m-8 text-gray-500/40 border"></span>

              <div className="p-8 flex flex-col">
                <span className="font-medium text-gray-500 text-base">ISP</span>
                <span className="text-2xl font-medium">SpaceX</span>
                <span className="text-2xl font-medium">Starlink</span>
              </div>
            </div>
          </div>
        </div>
        <div className="z-0">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "68vh", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                Londra'dasınız! <br /> Bu popup'ı özelleştirebilirsiniz.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default App;
