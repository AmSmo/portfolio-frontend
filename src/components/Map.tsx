import React from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import {features} from './world.json'

type MapProps = {

}

const Map:React.FC<MapProps> = () => {
    const data = {"United States": [1,23,4,5], "Australia": [1,], "Poland": [0,1,2,3,4,5,6,7,78,8,9,0,1]}   
      
    const select = (layer) => {
      layer.setStyle({
            weight: 1,
            color: "red",
            border: "1px solid black",
            fillOpacity: 1
      })
    }
    const unselect = (layer, feature, data ) => {
      if (data[feature.properties.NAME] !== undefined){
        let times = data[feature.properties.NAME].length
          layer.setStyle({
          weight: 1,
            color: times > 10 ? "green" : "yellow",
            fillOpacity: (data[feature.properties.NAME]/5)

      })}else{
              layer.setStyle({
                weight: "3",

            color: "#3388ff",
            fillOpacity: "0.2"

      })
    }}
    const onEachFeature= (feature, layer)=> {
      if (data[feature.properties.NAME] !== undefined){
        let times = data[feature.properties.NAME].length
        layer.setStyle({
            weight: 1,
            color: times > 10 ? "green" : "yellow",
            fillOpacity: (data[feature.properties.NAME]/5)
      })}
        layer.on({
            mouseover: () => select(layer),
            mouseout: () => unselect(layer, feature, data),
          click: () => console.log(layer)
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
