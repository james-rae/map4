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

// module test

const thisDog = new PigDog();
thisDog.name = 'willy';
thisDog.belly = 5;
thisDog.introduce();

// https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-widget/index.html