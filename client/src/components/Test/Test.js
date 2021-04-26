import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import './Test.css';

const Test = () => {
  const position = [51.505, -0.09];
  const [books, setBooks] = useState([]);

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
      <Map center={position} zoom={3} scrollWheelZoom={false}>
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
