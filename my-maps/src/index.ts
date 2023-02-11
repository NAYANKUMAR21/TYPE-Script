/// <reference types="@types/google.maps" />

import Namer from './User';
import { User, red } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

function initMap(): void {
  var myLatLng = {
    lat: 0,
    lng: 0,
  };

  var map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 15,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
const user = new User();
const company = new Company();
const map = new CustomMap();
map.addUSermarker(user);
map.addUSermarker(company);

// google.maps.event.addListener(window, 'load', initMap);
// window.onload = initMap;
// google.maps.event.addListener(window, 'onload', initMap);
