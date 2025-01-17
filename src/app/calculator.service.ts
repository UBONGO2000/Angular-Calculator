import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  funcT: any = 'NoFunction';
  screen:string ='';
  firstNumber:string='';
  secondNumber:string='';

  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  modulo(a:number,b:number):number{
    return a%b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division par zéro');
    }
    return a / b;
  }


}
