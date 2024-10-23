import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface props {
  position: string;
  data: string[];
}

function Map({ position, data }: props) {
  useEffect(() => {
    fetchPosts();
    fetchUsers();

    const local = localStorage.getItem("likedposts");
    if (local == null || local == "") {
      localStorage.setItem("likedposts", "false");
    }
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
