import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function CityClicker(props) {
const dispatch = useDispatch();
const { currentCityLng, currentCityLat } = useSelector((state) => state);
const moskowHandler = () => {
  dispatch({ type: 'SETCITY', payload: {lat: 55.82115177407611, lng: 37.63916015625001 }})
}

const piterHandler = () => {
  dispatch({ type: 'SETCITY', payload: {lat: 59.94352892477112, lng: 30.314025878906254 }})
}

const krasnodarHandler = () => {
  dispatch({ type: 'SETCITY', payload: {lat: 45.0472082783978, lng:38.99047851562501 }})
}

  return (

    <div>
       <a onClick={moskowHandler} class="waves-effect waves-light btn orange">Москва</a>
       <a onClick={piterHandler} class="waves-effect waves-light btn orange">Санкт-Петербург</a>
       <a onClick={krasnodarHandler} class="waves-effect waves-light btn orange">Краснодар</a>
    </div>
  );
}

export default CityClicker;
