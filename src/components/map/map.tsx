import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface prop {
  position: number[];
}

function Map({ position }: prop) {
  return (
    <MapContainer className="w-full h-full" center={position} zoom={7}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>IP Adresinin Konumu</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
