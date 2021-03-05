import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Sphere,
  Geography,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { MapContainer } from "../styles/styles";
import { ReactComponent as RightArrow } from "../svgs/rightarrow.svg";
import { ReactComponent as LeftArrow } from "../svgs/leftarrow.svg";
type FoodProps = {};
type PositionProps = {
  coordinates: [number, number];
  zoom: number;
};

const Food: React.FC<FoodProps> = () => {
  let [countryName, setCountryName] = useState<string>("");
  let [position, setPosition] = useState<PositionProps>({
    coordinates: [0, 0],
    zoom: 1,
  });
  let [rotation, setRotation] = useState<[number, number, number]>([
    -190,
    0,
    0,
  ]);

  const handleMoveEnd = (position: PositionProps) => {
    setPosition(position);
  };

  const rotate = (direction: number) => {
    setRotation((prevPosition) => [
      prevPosition[0] + direction,
      prevPosition[1],
      prevPosition[2],
    ]);
  };
  const direct = (e: React.KeyboardEvent<any>) => {
    e.preventDefault();
    if (e.code === "ArrowLeft") {
      rotate(5);
    } else if (e.code === "ArrowRight") {
      rotate(-5);
    } else if (e.code === "ArrowUp") {
      setPosition((prevPosition) => ({
        zoom: prevPosition.zoom,
        coordinates: [
          prevPosition.coordinates[0],
          prevPosition.coordinates[1] - 5,
        ],
      }));
    } else if (e.code === "ArrowDown") {
      setPosition((prevPosition) => ({
        zoom: prevPosition.zoom,
        coordinates: [
          prevPosition.coordinates[0],
          prevPosition.coordinates[1] + 5,
        ],
      }));
    }
  };
  return (
    <MapContainer>
      <ReactTooltip>{countryName}</ReactTooltip>
      <LeftArrow width="5vw" onClick={() => rotate(5)} />
      <RightArrow onClick={() => rotate(-5)} width="5vw" />

      <h2>Under Construction</h2>
      <ComposableMap
        data-tip=""
        className="map"
        projectionConfig={{
          rotate: rotation,
          scale: 180,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          onKeyDown={direct}
        >
          <Sphere
            id="1"
            stroke="#FF5533"
            strokeWidth={2}
            fill={"#ADD8E6"}
            style={{ boxShadow: "5px 5px 10px black" }}
          />
          (
          <Geographies geography={"./Static/world.json"}>
            {({ geographies }) =>
              geographies.map((geo) => {
                let fill = "blue";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="black"
                    strokeWidth="0.5px"
                    fill={fill}
                    onMouseEnter={() => {
                      setCountryName(geo.properties.NAME_LONG);
                    }}
                    onMouseLeave={() => {
                      setCountryName("");
                    }}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "red" },
                      pressed: { outline: "none" },
                    }}
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
