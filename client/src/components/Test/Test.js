import { MapContainer, TileLayer, Marker, Popup, Map } from 'react-leaflet';
import "./Test.css" 

const Test = () => {
  const position = [51.505, -0.09]
  return ( 
    <div>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
     <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        "Незнайка на луне". <br /> by user 123.
      </Popup>
    </Marker>
    </MapContainer>
    </div>
   );
}
 
export default Test;
