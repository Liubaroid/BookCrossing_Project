import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function CityClicker(props) {
const dispatch = useDispatch();
const { currentCityLng, currentCityLat } = useSelector((state) => state);
const moskowHandler = () => {
 dispatch({type: 'SETCITY', payload: [currentCityLat, currentCityLng]})
}

const piterHandler = () => {
  dispatch({type: 'SETCITY', payload: [currentCityLat, currentCityLng]})
}

const krasnodarHandler = () => {
  dispatch({type: 'SETCITY', payload: [currentCityLat, currentCityLng]})
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
