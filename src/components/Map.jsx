import { MapTileFix, useIP } from "../context/IPProvider";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Map() {
  const { ip, isLoading, customIcon, position } = useIP();

  if (isLoading) {
    return (
      <div className="w-11/12 mx-auto my-4">
        <Skeleton height={20} width={100} />
        <Skeleton height={20} width={150} />
        <Skeleton count={12} />
      </div>
    );
  }
  // MapTileFix
  return (
    <div className="w-full z-10 h-[700px] md:h-[600px] rounded-lg relative bg-gray-100 overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={true}
        doubleClickZoom={true}
        dragging={true}
        className="w-full h-full"
        whenReady={(mapInstance) => {
          // Correct parameter name
          setTimeout(() => {
            mapInstance.invalidateSize(true); // Force with reset
          }, 0);
        }}>
        <MapTileFix position={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          updateWhenIdle={true}
          updateWhenZooming={true}
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{ip?.location ? `IP: ${ip.ip}` : "Default location"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
