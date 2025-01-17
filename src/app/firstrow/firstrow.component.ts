import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-firstrow',
  imports: [],
  templateUrl: './firstrow.component.html',
  styleUrl: './firstrow.component.css'
})


export class FirstrowComponent{

  constructor(public calculatorService: CalculatorService){}

  // methode pour reinitialiser l'ecran
  reset(){
   this.calculatorService.screen='0';
   this.calculatorService.funcT='NoFunction';
   this.calculatorService.firstNumber='';
   this.calculatorService.secondNumber='';
  }

  div(){
    this.calculatorService.funcT='/';
  }

  modulo(){
    this.calculatorService.funcT='%';
  }
  
}


