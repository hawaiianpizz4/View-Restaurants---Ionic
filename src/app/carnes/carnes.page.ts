import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.page.html',
  styleUrls: ['./carnes.page.scss'],
})
export class CarnesPage implements OnInit {

  constructor() { }

  public carne=[
    {
      id:'1',
      numberRestaurant:'Detalle del plato 1',
      nameRestaurant:'Carne de res con vegetales', 
      link:"../../assets/img/carne1.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'2',
      numberRestaurant:'Detalle del plato 2',
      nameRestaurant:'Filet Mignon', 
      link:"../../assets/img/carne2.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'3',
      numberRestaurant:'Detalle del plato 3',
      nameRestaurant:'Tomahawk steak', 
      link:"../../assets/img/carne3.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'4',
      numberRestaurant:'Detalle del plato 4',
      nameRestaurant:'Carne Asada(Con Guarnición)',
      link:"../../assets/img/carne4.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    }
  ];

  ngOnInit() {
  }

}
