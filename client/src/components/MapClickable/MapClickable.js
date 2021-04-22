import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Test.css" 

const Test = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState([51.505, -0.09]);
  const handleClick = (e) => {
        setPosition(e.latlng);
        dispatch({type: 'SETCOORDINATES', payload : {lat: e.latlng.lat, lng:e.latlng.lng} })
  }
  return ( 
    <div>
    <Map center={position} zoom={3} scrollWheelZoom={false} onClick={handleClick}>
     <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
    </Marker>
    </Map>
    </div>
   );
}
 
export default Test;
