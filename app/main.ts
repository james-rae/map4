import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import {PigDog} from "./grunt";

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const thisDog = new PigDog();
thisDog.name = 'willy';
thisDog.belly = 5;
thisDog.introduce();