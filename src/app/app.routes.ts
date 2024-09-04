import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  {
    path: '', // Путь
    component: ShopComponent, // Компонент
    pathMatch: 'full', // Параметр для главной страницы, чтобы при обращении к другим страницам он не открывался
  },
];
