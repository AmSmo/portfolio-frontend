import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


type MapProps = {

}

const Map:React.FC<MapProps> = () => {
  return (
      <div id="mapid"> 
   <MapContainer center={[10.505, -10.09]} zoom={1} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

</div>
  )
};

export default Map;
