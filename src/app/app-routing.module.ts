import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'combos',
    loadChildren: () => import('./combos/combos.module').then( m => m.CombosPageModule)
  },
  {
    path: 'fast-food',
    loadChildren: () => import('./fast-food/fast-food.module').then( m => m.FastFoodPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./carnes/carnes.module').then( m => m.CarnesPageModule)
  },
  {
    path: 'registrorest',
    loadChildren: () => import('./registrorest/registrorest.module').then( m => m.RegistrorestPageModule)
  },
  {
    path: 'registrotipocomida',
    loadChildren: () => import('./registrotipocomida/registrotipocomida.module').then( m => m.RegistrotipocomidaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
