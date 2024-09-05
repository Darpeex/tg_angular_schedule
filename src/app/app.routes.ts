import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  {
    path: '', // Путь
    component: ShopComponent, // Компонент
    pathMatch: 'full', // Параметр, чтобы при других страницах главная стр. не открывалась, т.к. 'feedback' тоже содержит в себе
    // пустую строчку и также в браузере может открыться. 'full' же говорит, открываться, только в отсутствии других страниц
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
