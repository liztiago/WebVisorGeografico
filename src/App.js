import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Stadia_AlidadeSatellite = `https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg`;

export default function App() {
  return (
    <MapContainer center={[4.812220, -75.692047]} zoom={13} style={{ height: "100vh" }}>
      {/* Capa de Stadia_AlidadeSatellite */}
      <TileLayer
        attribution='&copy; CNES, Distribution Airbus Ds, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={Stadia_AlidadeSatellite}
        minZoom={0}
        maxZoom={20}
      />


    </MapContainer>

    
  );
}
