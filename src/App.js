import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';



function App() {
  useEffect(() => {
    // Initialize the map
    
    const map = L.map('map').setView([0, 0], 2);

    // Add a tile layer to the map (you can choose a different provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for the points you want to localize
    const marker1 = L.marker([-36.8910400680091, -60.32572536674099]).addTo(map);
    const marker2 = L.marker([-36.89034502872822, -60.32486169546583]).addTo(map);

    // Add popups to the markers with information about each point
    marker1.bindPopup("<b>Point 1</b><br>Lat: " + -36.8910400680091 + "<br>Lon: " + -60.32572536674099).openPopup();
    marker2.bindPopup("<b>Point 2</b><br>Lat: " + -36.89034502872822 + "<br>Lon: " + -60.32486169546583).openPopup();
  }, []); // Empty dependency array means this useEffect runs once after initial render

  return (
    <div className="App">
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
}

export default App;

