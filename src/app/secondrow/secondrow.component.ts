import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-secondrow',
  imports: [],
  templateUrl: './secondrow.component.html',
  styleUrl: './secondrow.component.css'
})
export class SecondrowComponent {

    constructor(public calculatorService: CalculatorService){}
  
    seven(){

      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='7';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='7';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }


    }


    eight(){
      
      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='8';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='8';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }

    }


    nine(){
      
      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='9';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='9';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }

    }


    operation(){
      this.calculatorService.funcT='*';
    }

}
