import { Component } from '@angular/core';
import { FourthrowComponent } from './fourthrow/fourthrow.component';
import { ThirdrowComponent } from "./thirdrow/thirdrow.component";
import { SecondrowComponent } from "./secondrow/secondrow.component";
import { FirstrowComponent } from "./firstrow/firstrow.component";
import { FivethrowComponent } from "./fivethrow/fivethrow.component";
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  imports: [FourthrowComponent, ThirdrowComponent, SecondrowComponent, FirstrowComponent, FivethrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-calculator';
 

  constructor(public calculatorService: CalculatorService){};

}

