import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Test.css';

const Test = () => {
  const [books, setBooks] = useState([]);
  const { currentCityLng, currentCityLat } = useSelector((state) => state);
  const position = [currentCityLat, currentCityLng];
  //tunk - redux
  const getBooks = async () => {
    const response = await fetch('http://localhost:8080/books');
    const result = await response.json();
    setBooks(result.books);
    console.log(result.books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <Map center={position} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {books.map((el) => (
          <Marker position={[el.latitude, el.longitude]}>
            <Popup>
              Название : {el.name}. <br />
              Адрес: {el.adress} <br />
              Создатель: {el.creator}
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default Test;
