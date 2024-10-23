import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map(positionn: string[], dataa: string) {
  const [position, setPosition] = useState<any>([51.505, -0.09]);

  const [data, setData] = useState<DataTypes | null>(null);
  interface DataTypes {
    country: string;
    city: string;
  }

  useEffect(() => {
    setData(dataa);
    setPosition(positionn);
  }, []);

  return (
    <MapContainer className="w-full h-full" center={position} zoom={7}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          {data ? data.city : "Veri Yok"} ,{data ? data.country : "Veri Yok"}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
