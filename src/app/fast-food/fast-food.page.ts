import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-food',
  templateUrl: './fast-food.page.html',
  styleUrls: ['./fast-food.page.scss'],
})
export class FastFoodPage implements OnInit {
  public fastfood=[
    {
      id:'1',
      numberRestaurant:'Detalle del plato 1',
      nameRestaurant:'Chaulafán mixto', 
      link:"../assets/img/fastfood1.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'2',
      numberRestaurant:'Detalle del plato 2',
      nameRestaurant:'Burrito California', 
      link:"../../assets/img/fastfood2.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'3',
      numberRestaurant:'Detalle del plato 3',
      nameRestaurant:'Alitas BBQ', 
      link:"../../assets/img/fastfood3.png",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      boton_nombre:'Volver al restaurante'
    },
    {
      id:'4',
      numberRestaurant:'Detalle del plato 4',
      nameRestaurant:'Nachos con Queso',
      link:"../../assets/img/fastfood4.png",
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
