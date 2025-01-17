import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-fourthrow',
  imports: [],
  templateUrl: './fourthrow.component.html',
  styleUrl: './fourthrow.component.css'
})
export class FourthrowComponent{

  constructor(public calculatorService: CalculatorService){}
  
    one(){

      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='1';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='1';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }


    }


    two(){
      
      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='2';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='2';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }

    }


    three(){
      
      if(this.calculatorService.funcT=='NoFunction'){
      this.calculatorService.firstNumber+='3';
      this.calculatorService.screen=this.calculatorService.firstNumber;


      }else{
      this.calculatorService.secondNumber+='3';
      this.calculatorService.screen=this.calculatorService.secondNumber;

      }

    }


    operation(){
      this.calculatorService.funcT='+';
    }

}
