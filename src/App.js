import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

const Stadia_AlidadeSatellite = `https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg`;

export default function App() {
  const circleCenter = [4.812220, -75.692047];
  const circleRadius = 1000;
  const circleData = {
    coordinates: "4°42'N 75°44'W",
    Alcala: "5,5 km",
    Quimbaya: "8,4 km",
    Pereira: "13,7 km",
    Circasia: "14,3 km"
  };

  return (
    <MapContainer center={circleCenter} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; CNES, Distribution Airbus Ds, ©️ Airbus DS, ©️ PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={Stadia_AlidadeSatellite}
        minZoom={0}
        maxZoom={20}
      />

      <Circle center={circleCenter} pathOptions={{ fillColor: 'blue' }} radius={circleRadius}>
        <Popup className="custom-popup">
          <div className="info-box">
            <div className="coordinates">{circleData.coordinates}</div>
            <div className="location">
              <span>Alcala</span>
              <span className="distance">{circleData.Alcala}</span>
            </div>
            <div className="location">
              <span>Quimbaya</span>
              <span className="distance">{circleData.Quimbaya}</span>
            </div>
            <div className="location">
              <span>Pereira</span>
              <span className="distance">{circleData.Pereira}</span>
            </div>
            <div className="location">
              <span>Circasia</span>
              <span className="distance">{circleData.Circasia}</span>
            </div>
          </div>
        </Popup>
      </Circle>
    </MapContainer>
  );
}