import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Sphere,
  Geographies,
  Geography,
} from "react-simple-maps";
import { MapContainer } from "../styles/styles";

type FoodProps = {};
type PositionProps = {
  coordinates: [number, number];
  zoom: number;
};

const Food: React.FC<FoodProps> = () => {
  const [position, setPosition] = useState<PositionProps>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const handleMoveEnd = (position: PositionProps) => {
    setPosition(position);
  };
  return (
    <MapContainer>
      <h2>Under Construction</h2>
      <ComposableMap
        className="map"
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 180,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere id="1" stroke="#FF5533" strokeWidth={1} fill={"#ADD8E6"} />(
          <Geographies geography={"./static/world-110m.json"}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="black"
                    strokeWidth="0.5px"
                    fill={
                      "lightgrey"
                      // !Object.keys(data).includes(geo.properties.NAME_LONG)
                      //   ? "lightgrey"
                      //   : `rgba(${data[geo.properties.NAME_LONG] * 3},200, ${
                      //       (data[geo.properties.NAME_LONG] * 8, 0.5)
                      //     })`
                    }
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    onClick={() => console.log(geo.properties.NAME_LONG)}
                  />
                );
              })
            }
          </Geographies>
          )
        </ZoomableGroup>
      </ComposableMap>
      <div id="desc">
        Eventually will be trying to cook and bake my way around the world.
        Working on setting up a database, but with food, as with many things I
        think about it a lot... Debating having categories for each country like
        Bread, Soup, Breakfast, Lunch, Dinner... but is that enough? where
        should I go... Should I account for local restaurants? Stay tuned
      </div>
    </MapContainer>
  );
};

export default Food;
