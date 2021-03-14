import React from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import {features} from './world.json'

type MapProps = {

}

const Map:React.FC<MapProps> = () => {
   
      
    const onEachFeature= (feature, layer)=> {
        layer.on({
        //     mouseover: highlightFeature,
        //     mouseout: resetHighlight,
        click: () => console.log(feature.properties.NAME)
        });
        
      }
  return (
      <div id="mapid"> 
   <MapContainer center={[10.505, -10.09]} zoom={1} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <GeoJSON data={features as any} onEachFeature={onEachFeature}
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
