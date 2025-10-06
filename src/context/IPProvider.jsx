/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const IPcontext = createContext();
const API_KEY = "at_7GsXiGvM3VFIXxUBjKbiryNRGra5R";

function IPProvider({ children }) {
  const [ip, setIp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [searchVal, setSearchval] = useState("");

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };
  const createCustomIcon = () => {
    return new L.Icon({
      iconUrl: "images/icon-location.svg",
      iconRetinaUrl: "images/icon-location.svg",
      iconSize: [30, 41], // Adjust based on your marker size
      iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      shadowSize: [41, 41],
      shadowAnchor: [12, 41],

      // shadowUrl: null
    });
  };
  const customIcon = createCustomIcon();
  const getPosition = () => {
    if (ip?.location?.lat && ip?.location?.lng) {
      return [ip.location.lat, ip.location.lng];
    }
    return [51.505, -0.09]; // Default fallback
  };

  const position = getPosition();
  useEffect(
    function () {
      async function fetchData(searchVal = "") {
        setIsLoading(true);
        setError(false);
        try {
          let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

          if (searchVal) {
            if (isValidIP(searchVal)) {
              url += `&ipAddress=${searchVal}`;
            } else if (isValidDomain(searchVal)) {
              url += `&domain=${searchVal}`;
            } else {
              throw {
                type: "validation",
                message: "Invalid IP address or domain format",
              };
            }
          }
          const res = await fetch(url);
          if (!res.ok) {
            throw {
              type: "api",
              message: `API error: ${res.status} - ${res.statusText}`,
            };
          }
          const data = await res.json();
          console.log(data);
          setIp(data);
          setError(null);
        } catch (err) {
          if (err.type === "validation") {
            showToast(err.message);
          } else if (err.type === "api") {
            showToast(err.message);
          } else {
            setError("Network error: Failed to fetch data");
          }
        } finally {
          setIsLoading(false);
        }
      }
      fetchData(searchVal);
    },
    [searchVal]
  );

  const isValidIP = (input) =>
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      input
    );
  const isValidDomain = (input) =>
    /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(
      input
    );
  return (
    <IPcontext.Provider
      value={{
        ip,
        isLoading,
        error,
        setSearchval,
        searchVal,
        customIcon,
        position,
      }}>
      {children}
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>{toast.message}</div>
      )}
    </IPcontext.Provider>
  );
}

export function MapTileFix({ position }) {
  const map = useMap();

  useEffect(() => {
    // Force tile layer refresh
    setTimeout(() => {
      map.invalidateSize();
      // Force re-render of tiles
      map.eachLayer((layer) => {
        if (layer._url && layer.redraw) {
          layer.redraw();
        }
      });
    }, 100);
  }, [map, position]);

  return null;
}
function useIP() {
  const context = useContext(IPcontext);
  if (!context) {
    throw new Error("cannot use the context out of the provider");
  }
  return context;
}

export { IPProvider, useIP };
