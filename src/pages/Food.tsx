import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { features } from '../util/world.json'

type FoodProps = {

}

const Food: React.FC<FoodProps> = () => {
  const data = {}
  const select = (layer) => {

    layer.setStyle({
      weight: 1,
      color: "red",
      border: "1px solid black",
      fillOpacity: 1
    })
  }
  const unselect = (layer, feature, data) => {
    if (data[feature.properties.NAME] !== undefined) {
      let times = data[feature.properties.NAME].length
      layer.setStyle({
        weight: 1,
        color: times > 10 ? "green" : "yellow",
        fillOpacity: (data[feature.properties.NAME] / 5)

      })
    } else {
      layer.setStyle({
        weight: "1",

        color: "#3388ff",
        fillOpacity: "0.2"

      })
    }
  }
  const onEachFeature = (feature, layer) => {

    if (data[feature.properties.NAME] !== undefined) {
      let times = data[feature.properties.NAME].length
      layer.setStyle({
        weight: 1,
        color: times > 10 ? "green" : "yellow",
        fillOpacity: (data[feature.properties.NAME] / 5)

      })
      layer.bindPopup(` <h5>${feature.properties.NAME}</h5> ${data[feature.properties.NAME]}`);
    } else {
      layer.setStyle({
        weight: 1
      })
      layer.bindPopup(` <h5>${feature.properties.NAME}</h5>`);
    }
    layer.on({
      mouseover: () => select(layer),
      mouseout: () => unselect(layer, feature, data)

    });

  }
  return (
    <>
    <div id="mapid">
      <MapContainer center={[30, 10]} zoom={2} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON data={features as any} onEachFeature={onEachFeature}
        />

      </MapContainer>
      
    </div>
    <div className="food-desc">
        Eventually will be trying to cook and bake my way around the world.
        Working on setting up a database, but with food, as with many things I
        think about it a lot... Debating having categories for each country like
        Bread, Soup, Breakfast, Lunch, Dinner... but is that enough? where
        should I go... Should I account for local restaurants? Stay tuned
      </div>
      </>
  )
};

export default Food;
