import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-fivethrow',
  imports: [],
  templateUrl: './fivethrow.component.html',
  styleUrl: './fivethrow.component.css'
})
export class FivethrowComponent {

    constructor(public calculatorService: CalculatorService){}
    
      zero(){
  
        if(this.calculatorService.funcT=='NoFunction'){
        this.calculatorService.firstNumber+='0';
        this.calculatorService.screen=this.calculatorService.firstNumber;
  
  
        }else{
        this.calculatorService.secondNumber+='0';
        this.calculatorService.screen=this.calculatorService.secondNumber;
  
        }
  
  
      }
  
      dash(){
        
        if(this.calculatorService.funcT=='NoFunction'){
        this.calculatorService.firstNumber+='.';
        this.calculatorService.screen=this.calculatorService.firstNumber;
  
  
        }else{
        this.calculatorService.secondNumber+='.';
        this.calculatorService.screen=this.calculatorService.secondNumber;
  
        }
  
      }
  
  //affichage des operation en cliquant sur egale
      resultat(){
        let a:number;
        let b:number;
        
        a=parseFloat(this.calculatorService.firstNumber);
        b=parseFloat(this.calculatorService.secondNumber);

        this.calculatorService.firstNumber='';
        this.calculatorService.secondNumber='';
    
        switch (this.calculatorService.funcT) {
            case '+':
              this.calculatorService.funcT="NoFunction";
              return this.calculatorService.screen=`${this.calculatorService.add(a, b)}`;
              
            case '-':
              this.calculatorService.funcT="NoFunction";

              this.calculatorService.screen=`${this.calculatorService.subtract(a, b)}`;
              return this.calculatorService.subtract(a, b);
            case '*':
              this.calculatorService.funcT="NoFunction";

              this.calculatorService.screen=`${this.calculatorService.multiply(a, b)}`;

              return this.calculatorService.multiply(a, b);
            case '/':
              this.calculatorService.funcT="NoFunction";

              this.calculatorService.screen=`${this.calculatorService.divide(a, b)}`;

              return this.calculatorService.divide(a, b);
            case '%':
                this.calculatorService.funcT="NoFunction";
  
                this.calculatorService.screen=`${this.calculatorService.modulo(a, b)}`;
  
              return this.calculatorService.modulo(a, b);
            default:
              throw new Error('Opération non reconnue');
          };
          
          

        }

}
  

