// GoogleMapWithMarker.jsx

// Import React
import Geocode from "react-geocode";
import * as React from 'react'


// Import necessary components for React Google Maps
import {
  Circle,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

var my_lat, my_long;



// Import custom styles to customize the style of Google Map
const styles = require('./mapstyle.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
 //const mapMarker = require('./GoogleMapMarker.svg')
 const center = {
  lat: my_lat,
  lng: my_long
}

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 1,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  ondblclick: true,
  clickable: true,
  draggable: true,
  ondrag: true,
  editable: false,
  visible: true,
  radius: 800,
  zIndex: 1,
}
const images = './bank.png'
const option1 = {
  cursor: "Minh's house",
  label: {text: "Minh's house", color: "white"},
  icon: {image: images},
  Animation: images,
  marker: images
}
const onLoad1 = marker => {
  console.log('marker: ', marker)
}

const onLoad = circle => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}

// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  
  withGoogleMap(props => {
    return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: props.lat, // latitude for the center of the map
        lng: props.long // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles // change default map styles
      }}
    >
      <Marker
        onLoad = {onLoad1}
        options = {{
          
          cursor: props.hostname,
          label: {text: props.hostname, color: "white"},
          icon: {image: images},
          Animation: images,
          marker: images
          
        }}
        /*icon={{
          url:
            'data:image/svg+xml;utf-8, \
            <svg xmlns="http://www.w3.org/2000/svg" width="45" viewBox="0 0 512 512"><path fill="#e74c3c" d="M252.55 0h5.95c33.76.52 67.31 11.19 94.97 30.59 27.22 18.94 48.77 45.95 61.03 76.77 13.14 32.69 15.69 69.52 7.17 103.71-4.69 19.44-13.24 37.77-24.07 54.54-43.51 75.53-86.86 151.15-130.3 226.72-3.45 6.37-7.56 12.4-10.59 18.97l-.03.7h-1.21c-1.09-3.48-3.25-6.44-4.99-9.6-45.11-78.52-90.2-157.06-135.34-235.57-11.21-17.1-19.98-35.9-24.82-55.81-8.5-34.15-5.96-70.94 7.16-103.6 12.26-30.85 33.82-57.89 61.07-76.84C185.94 11.35 219.12.74 252.55 0m-6.26 64.44c-35.07 2.83-67.55 24.7-84.18 55.59-12.65 23.12-15.96 51.04-9.61 76.57 5.91 23.77 20.39 45.27 40.13 59.76 15.73 11.8 34.8 19.03 54.4 20.59 25.3 2.2 51.34-4.95 71.73-20.15 21.42-15.44 36.67-39.16 41.84-65.06 3.31-17.12 2.61-35.08-2.44-51.8-7.43-24.97-24.51-46.85-46.76-60.35-19.27-12.01-42.54-17.21-65.11-15.15z" /><path fill="#c0392b" d="M246.29 64.44c22.57-2.06 45.84 3.14 65.11 15.15 22.25 13.5 39.33 35.38 46.76 60.35 5.05 16.72 5.75 34.68 2.44 51.8-5.17 25.9-20.42 49.62-41.84 65.06-20.39 15.2-46.43 22.35-71.73 20.15-19.6-1.56-38.67-8.79-54.4-20.59-19.74-14.49-34.22-35.99-40.13-59.76-6.35-25.53-3.04-53.45 9.61-76.57 16.63-30.89 49.11-52.76 84.18-55.59m1.83 42.76c-15.04 1.8-29.3 9.21-39.45 20.45-10.03 10.95-16.02 25.5-16.56 40.34-.67 14.62 3.9 29.41 12.74 41.08 9.61 12.84 24.18 21.87 39.99 24.58 13.71 2.43 28.21.28 40.55-6.18 13.67-7.04 24.63-19.16 30.18-33.5 5.65-14.32 5.84-30.7.55-45.15-4.99-13.88-15-25.86-27.72-33.3-12.03-7.13-26.42-10.05-40.28-8.32z" /></svg>' // This may not work in <=IE11
        }}*/
        position={{
          lat: props.lat, // latitude to position the marker
          lng: props.long // longitude to position the marker
        }}
      />
      <Circle
         // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      center={{
        lat: props.lat,
        lng:  props.long
      }}
      // required
      options={options}
      />
      {props.isMarkerShown && <Marker position={{ lat: props.lat, lng:  props.long }} />}
    </GoogleMap>
  )})
);


// Export Google Map component
export default GoogleMapComponentWithMarker





