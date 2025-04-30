import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[40.218084, -76.919512]}
      zoom={15}
      style={{ height: "400px", width: "100%", padding: "1%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.218084, -76.919512]}>
        <Popup>
          3538 Gettysburg Rd Suite 9<br />
          Camp Hill, PA 17011
        </Popup>
      </Marker>
    </MapContainer>
  );
}
