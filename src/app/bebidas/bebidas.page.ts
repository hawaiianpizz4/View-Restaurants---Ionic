import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
  public bebidas=[
    {
      id:'1',
      numberRestaurant:'Detalle del plato 1',
      nameRestaurant:'Té helado', 
      link:"../../assets/img/bebida1.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'2',
      numberRestaurant:'Detalle del plato 2',
      nameRestaurant:'Michelada', 
      link:"../../assets/img/bebida2.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'3',
      numberRestaurant:'Detalle del plato 3',
      nameRestaurant:'Refrescos', 
      link:"../../assets/img/bebida3.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'4',
      numberRestaurant:'Detalle del plato 4',
      nameRestaurant:'Cerveza(Pilsener)',
      link:"../../assets/img/bebida4.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
