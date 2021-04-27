import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Test.css" 

const Test = () => {
  const dispatch = useDispatch();
  const { currentCityLng, currentCityLat } = useSelector((state) => state);
  const [position, setPosition] = useState([currentCityLat, currentCityLng]);
  const handleClick = async (e) => {
        setPosition(e.latlng);
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
var token = "b94f7a5b047088f927653e5af0a5648858032e97";
var query = { lat: e.latlng.lat, lon: e.latlng.lng };

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify(query)
}

const response = await fetch(url, options);
const result = await response.json();
if (!result) {
  alert('Недопустимая точка на карте')
  return
}
result.suggestions[0] &&  dispatch({type: 'SETADRESS', payload: result.suggestions[0].value});
result.suggestions[0] &&  dispatch({type: 'SETCOORDINATES', payload : {lat: e.latlng.lat, lng:e.latlng.lng} })
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
