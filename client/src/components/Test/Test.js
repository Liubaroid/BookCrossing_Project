import { Map, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import './Test.css';

const Test = () => {
  const [books, setBooks] = useState([]);
  let [bookid,setBookid] = useState('');
  const { currentCityLng, currentCityLat } = useSelector((state) => state);
  const position = [currentCityLat, currentCityLng];
  const dispatch = useDispatch();
  //tunk - redux
  const getBooks = async () => {
    const response = await fetch('http://localhost:8080/books');
    const result = await response.json();
    setBooks(result.books);
    console.log(result.books);
    let markers = document.querySelectorAll(".leaflet-marker-icon");
    console.log(markers);
  };
 

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Map center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {books.map((el) => ( el.isFound ?
          <Marker position={[el.latitude, el.longitude]}>
            <Popup>
              Название : {el.name}. <br />
              Адрес: {el.adress} <br />
              Создатель: {el.creator} <br/>
              <Link to='/take'>Взять книгy</Link>
            </Popup>
          </Marker> : null
        ))}
      </Map>
    </div>
  );
};

export default Test;
