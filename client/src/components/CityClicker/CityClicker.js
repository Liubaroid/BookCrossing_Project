import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import M from 'materialize-css';

function CityClicker(props) {

  const dispatch = useDispatch();
  const { currentCityLng, currentCityLat } = useSelector((state) => state);
  const moskowHandler = () => {
    dispatch({ type: 'SETCITY', payload: { lat: 55.82115177407611, lng: 37.63916015625001 } })
  }

  const piterHandler = () => {
    dispatch({ type: 'SETCITY', payload: { lat: 59.94352892477112, lng: 30.314025878906254 } })
  }

  const krasnodarHandler = () => {
    dispatch({ type: 'SETCITY', payload: { lat: 45.0472082783978, lng: 38.99047851562501 } })
  }

  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225, constrainWidth: false });
  }, [])

  return (

    <div>
      <a class='dropdown-trigger btn-flat white' href='#' data-target='dropdown1' style={{ margin: '1rem' }}>Выбери город</a>
      <ul id='dropdown1' class='dropdown-content dropdown w-20'>
        <li><a href="#!" constrainWidth onClick={moskowHandler}>Москва</a></li>
        <li><a href="#!" constrainWidth onClick={piterHandler}>Санкт-Петербург</a></li>
        <li><a href="#!" constrainWidth onClick={krasnodarHandler}>Краснодар</a></li>
        <li><a href="#!" >Ростов</a></li>
        <li><a href="#!" >Саратов</a></li>
        <li><a href="#!" >Челябинск</a></li>
        <li><a href="#!" >Ижевск</a></li>
        <li><a href="#!" >Уфа</a></li>
        <li><a href="#!" >Мурманск</a></li>
      </ul>
    </div>


  );
}

export default CityClicker;
