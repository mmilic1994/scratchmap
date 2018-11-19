import React from 'react'
import {render} from 'react-dom'
// import '../../views/city.blade.php'
import CityPage from './components/city_page.jsx'

console.log('city index loaded');

let appCity = document.getElementById('app-city');

function show_city_page(city) {
    let elm = document.createElement("div");
    elm.setAttribute('id', 'cityView');
    appCity.appendChild(elm);
    // appCity.innerHTML = '<div id="cityView"></div>';
    render(<CityPage cityName={city} />, document.getElementById('cityView'));
};

document.addEventListener('DOMContentLoaded', function () {
    show_city_page(cityPageName);
})

