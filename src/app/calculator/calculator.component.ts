import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  /*
    define all the variables:
    displayNum: the number being displayed on the calculator screen
    wait: the boolean that determains if we should wait for the next operand to complete
    num1: first operand
    operation:  the operation to perform on two given inputs
  */

  displayNum = '0';
  wait = false;
  num1: any = null;
  operation: any = null;

  constructor() { }

  ngOnInit() {
  }

  /*
    get the number pressed on the calculator
   */
  public get_digit(input: string){
    if(this.wait)
    {
      this.displayNum = input;
      this.wait = false;
    }else{
      this.displayNum === '0'? this.displayNum = input: this.displayNum += input;

    }
  }

  get_point(){
    if(!this.displayNum.includes('.')){
        this.displayNum += '.'; 
    }
  }

  private execute(input_operator: any , num2: any){
    switch (input_operator){
      case '+':
      return this.num1 += num2; 
      case '-': 
      return this.num1 -= num2; 
      case '*': 
      return this.num1 *= num2; 
      case '/': 
      return this.num1 /= num2; 
      case '=':
      return num2;
    }
  }
  
  public get_operation(input_operator: string){
    if(this.num1 === null){
      this.num1 = Number(this.displayNum);

    }else if(this.operation){
      const result = this.execute(this.operation , Number(this.displayNum))
      this.displayNum = String(result);
      this.num1 = result;
    }
    this.operation = input_operator;
    this.wait = true;
  }

  public reset(){
    this.displayNum = '0';
    this.num1 = null;
    this.operation = null;
    this.wait = false;
  }
}
