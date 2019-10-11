import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import Graphic from "esri/Graphic";
import {PigDog} from "./grunt";
import HelloWorld from "./HelloWorld";
import { Point, SpatialReference } from "esri/geometry";
import { PictureMarkerSymbol, SimpleMarkerSymbol } from "esri/symbols";
import Recenter from "./recenter"

const map = new EsriMap({
  basemap: "topo"
});



const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-145, 0],
  zoom: 18
});

console.log('map sr', view.spatialReference);

// module test

const thisDog = new PigDog();
thisDog.name = 'willy';
thisDog.belly = 5;
thisDog.introduce();

// magic layer test

// NOTE cannot use polygon with fill, as it repeats. cannot use picture marker as it will size with map
//      add local image (how?) with polygon overlay?
//      marker with no zooming allowed?
//      markers that update in scale when zoom happens (minimal tiles is ok performance; need to limit scale)

const oX = -16141326;
const oY = 0;

const tileXB64 = 'data:image/jpg;base64,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'

const t1 = new Graphic({
  geometry: new Point({
    x: oX,
    y: oY,
    spatialReference: SpatialReference.WebMercator
  }),

  symbol: new PictureMarkerSymbol({
    url: tileXB64, //"./img/tilex.jpg",
    width: "100px",
    height: "100px"
  }),

 /*
  symbol: new SimpleMarkerSymbol({
    size: "10px"
  }),
  */
  attributes: {
    key: "tilex"
  }
})

const island = new GraphicsLayer({
  id: "island",
  graphics: [t1]
});

map.add(island);

view.watch("zoom", (newVal, oldVal) => {
  console.log('saw a zoom');
  t1.symbol = new PictureMarkerSymbol({
    url: tileXB64, //"./img/tilex.jpg",
    width: "50px",
    height: "50px"
  });

});

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

// https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-recenter/index.html

const recenter = new Recenter({
  view: view,
  initialCenter: [-100.33, 43.69]
});
view.ui.add(recenter, "top-right");