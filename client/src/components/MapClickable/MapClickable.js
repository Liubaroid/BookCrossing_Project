import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Test.css" 

const Test = () => {
  const dispatch = useDispatch();
  const { currentCityLng, currentCityLat } = useSelector((state) => state);
  const [position, setPosition] = useState([currentCityLat, currentCityLng]);
  const handleClick = (e) => {
        setPosition(e.latlng);
        dispatch({type: 'SETCOORDINATES', payload : {lat: e.latlng.lat, lng:e.latlng.lng} })
  }
  useEffect(() => {
    setPosition([currentCityLat, currentCityLng]);
  },[currentCityLng])
  return ( 
    <div>
    <Map center={position} zoom={10} scrollWheelZoom={false} onClick={handleClick}>
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
