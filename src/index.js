import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapContainer, TileLayer, Popup, useMapEvents, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

root.render(
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}  style={{ width: "100%", height: "800px" }}> 
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker />
</MapContainer>,
);

