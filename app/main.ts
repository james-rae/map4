import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import {PigDog} from "./grunt";
import HelloWorld from "./HelloWorld";

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

var names = [
  {
    firstName: "John",
    lastName: "Smith"
  },
  {
    firstName: "Jackie",
    lastName: "Miller"
  },
  {
    firstName: "Anna",
    lastName: "Price"
  }
],
nameIndex = 0;

var widget = new HelloWorld({
  firstName: names[nameIndex].firstName,
  lastName: names[nameIndex].lastName,
  container: "widgetDiv"
});

function changeName() {
widget.set(names[++nameIndex % names.length]);
}

setInterval(changeName, 1000);