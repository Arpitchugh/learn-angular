import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // this is the name that will be used in the html
  templateUrl: './home.component.html', // this is the html file that will be used when this component is called
  styleUrls: ['./home.component.css'] // this is the CSS file that will be used when this component is called
})
export class HomeComponent {
  title = 'home';
}
