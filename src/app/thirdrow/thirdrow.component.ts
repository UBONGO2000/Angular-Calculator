import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-thirdrow',
  imports: [],
  templateUrl: './thirdrow.component.html',
  styleUrl: './thirdrow.component.css'
})
export class ThirdrowComponent {

    constructor(public calculatorService: CalculatorService){}
    
      four(){
  
        if(this.calculatorService.funcT=='NoFunction'){
        this.calculatorService.firstNumber+='4';
        this.calculatorService.screen=this.calculatorService.firstNumber;
  
  
        }else{
        this.calculatorService.secondNumber+='4';
        this.calculatorService.screen=this.calculatorService.secondNumber;
  
        }
  
  
      }
  
  
      five(){
        
        if(this.calculatorService.funcT=='NoFunction'){
        this.calculatorService.firstNumber+='5';
        this.calculatorService.screen=this.calculatorService.firstNumber;
  
  
        }else{
        this.calculatorService.secondNumber+='5';
        this.calculatorService.screen=this.calculatorService.secondNumber;
  
        }
  
      }
  
  
      six(){
        
        if(this.calculatorService.funcT=='NoFunction'){
        this.calculatorService.firstNumber+='6';
        this.calculatorService.screen=this.calculatorService.firstNumber;
  
  
        }else{
        this.calculatorService.secondNumber+='6';
        this.calculatorService.screen=this.calculatorService.secondNumber;
  
        }
  
      }
  
  
      operation(){
        this.calculatorService.funcT='-';
      }

}
