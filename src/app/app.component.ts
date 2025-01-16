import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FourthrowComponent } from './fourthrow/fourthrow.component';
import { ThirdrowComponent } from "./thirdrow/thirdrow.component";
import { SecondrowComponent } from "./secondrow/secondrow.component";
import { FirstrowComponent } from "./firstrow/firstrow.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FourthrowComponent, ThirdrowComponent, SecondrowComponent, FirstrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-calculator';
}
