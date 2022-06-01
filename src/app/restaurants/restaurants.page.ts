import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  public restaurants=[
    {
      id:'1',
      numberRestaurant:'Restaurante 1',
      nameRestaurant:'Grill and Chill Fast Food', 
      link:"../../assets/img/imagen2.jpg",
      openClose:'Abierto - 24H',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      estrella1:'star',
      estrella2:'star',
      estrella3:'star',
      estrella4:'star',
      estrella5:'star-half-outline',
      textoestrella:'(4.5 de 5 estrellas)'

    },
    {
      id:'2',
      numberRestaurant:'Restaurante 2',
      nameRestaurant:'Late Night Dine Right', 
      link:"../../assets/img/imagen3.jpg",
      openClose:'Abierto - 10:00AM-23:00PM',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      estrella1:'star',
      estrella2:'star',
      estrella3:'star',
      estrella4:'star',
      estrella5:'star',
      textoestrella:'(5 de 5 estrellas)'
    },
    {
      id:'3',
      numberRestaurant:'Restaurante 3',
      nameRestaurant:'Chops & Hops', 
      link:"../../assets/img/imagen4.jpg",
      openClose:'Abierto - 8:00AM-20:00PM',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      estrella1:'star',
      estrella2:'star',
      estrella3:'star',
      estrella4:'star-half-outline',
      estrella5:'star-outline',
      textoestrella:'(3.5 de 5 estrellas)'
    },
    {
      id:'4',
      numberRestaurant:'Restaurante 4',
      nameRestaurant:'Blazing Bean Roasters', 
      link:"../../assets/img/imagen5.jpg", 
      openClose:'Abierto - 9:00AM-21:00PM',
      menu:'Menu del Restaurante',
      descripcionRestaurante:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      estrella1:'star',
      estrella2:'star',
      estrella3:'star',
      estrella4:'star',
      estrella5:'star-outline',
      textoestrella:'(4 de 5 estrellas)'
    }
  ]
  



  constructor() { }

  ngOnInit() {
  }

  

}
