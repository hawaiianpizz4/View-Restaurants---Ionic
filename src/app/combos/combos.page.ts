import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.page.html',
  styleUrls: ['./combos.page.scss'],
})
export class CombosPage implements OnInit {
  public combosp=[
    {
      id:'1',
      numberRestaurant:'Detalle del plato 1',
      nameRestaurant:'Hamburguesa Completa', 
      link:"../../assets/img/combo1.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'2',
      numberRestaurant:'Detalle del plato 2',
      nameRestaurant:'Pizza Familiar', 
      link:"../../assets/img/combo2.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'3',
      numberRestaurant:'Detalle del plato 3',
      nameRestaurant:'Tacos triples', 
      link:"../../assets/img/combo3.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'4',
      numberRestaurant:'Detalle del plato 4',
      nameRestaurant:'7 presas de pollo y papas fritas medianas',
      link:"../../assets/img/combo4.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:"button"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}