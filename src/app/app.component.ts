import { SlideUpService } from './services/slide-up.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SlideUpService]
})
export class AppComponent {
  title = 'app';
 
}
