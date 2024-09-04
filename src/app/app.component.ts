import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // router-outlet отвечает за то, куда вставлять роуты в нашем приложении 
  template: `<router-outlet />`,
})
export class AppComponent {
  title = 'tg_angular_schedule';
  items = [1, 23, 4, 5];
}
