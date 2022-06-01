import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  public cabecera=[
    {
      id:'1',
      numberRestaurant:'Ubicación del restaurante', 
      link1:"../../assets/img/cabecera1.png",
      link2:"../../assets/img/cabecera2.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    }
  ];
  map=null;

  markers: Marker[] = [
    {
      position: {
        lat: -0.12627717109018202,
        lng: -78.48653083215238,
      },
      title: 'Comics Grill Real Audiencia'
    },
    {
      position: {
        lat: -0.1659182134984543,
        lng: -78.48315243215234,
      },
      title: 'Crispy Chiken Bros'
    },
    {
      position: {
        lat: -0.1691754422905136,
        lng: -78.48569450331692,
      },
      title: 'Inka Burger Ecuador'
    },
    {
      position: {
        lat: -0.17639839986340103,
        lng: -78.4790249033169,
      },
      title: 'Wok to Walk'
    },
  ];
  constructor() { }
  
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -0.18030168041333625, lng: -78.46682173094987};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
