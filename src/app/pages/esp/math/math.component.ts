import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent implements OnInit, OnDestroy  {
  number1: number = 0;
  number2: number = 0;
  userAnswer: number | null = null;
  operation: string = 'addition';
  feedback: string = '';
  score: number = 0;
  timeLeft: number = 60; // 1 minute
  timerSubscription: Subscription | null = null;

  ngOnInit() {
    this.generateQuestion();
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  generateQuestion() {
    const operations = {
      addition: '+',
      subtraction: '-',
      multiplication: '*',
      division: '/'
    };

    switch (this.operation) {
      case 'addition':
        this.number1 = this.getRandomNumber();
        this.number2 = this.getRandomNumber();
        break;
      case 'subtraction':
        this.number1 = this.getRandomNumber();
        this.number2 = this.getRandomNumber();
        break;
      case 'multiplication':
        this.number1 = this.getRandomNumber();
        this.number2 = this.getRandomNumber();
        break;
      case 'division':
        this.number1 = this.getRandomNumber() * this.getRandomNumber();
        this.number2 = this.getRandomNumber();
        break;
      case 'all':
        this.number1 = this.getRandomNumber();
        this.number2 = this.getRandomNumber();
        this.operation = this.getRandomOperation();
        break;
    }
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  getRandomOperation(): string {
    const operations = ['addition', 'subtraction', 'multiplication', 'division'];
    return operations[Math.floor(Math.random() * operations.length)];
  }

  getSymbol(op: string): string {
    const symbols: { [key: string]: string } = {
      addition: '+',
      subtraction: '-',
      multiplication: '*',
      division: '/'
    };
    return symbols[op] || '+';
  }

  checkAnswer() {
    const correctAnswer = this.calculateAnswer();
    if (this.userAnswer === correctAnswer) {
      this.feedback = '¡Correcto!';
      this.score += 10; // Add points for a correct answer
      this.userAnswer = null; // Clear input field
      this.generateQuestion(); // Generate a new question
    } else {
      this.feedback = '¡Incorrecto!';
    }
  }

  calculateAnswer(): number {
    switch (this.operation) {
      case 'addition':
        return this.number1 + this.number2;
      case 'subtraction':
        return this.number1 - this.number2;
      case 'multiplication':
        return this.number1 * this.number2;
      case 'division':
        return this.number1 / this.number2;
      default:
        return 0;
    }
  }

  
  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.endGame();
      }
    });
  }

  endGame() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.feedback = `Tiempo terminado. Tu puntuación final es ${this.score}.`;
    this.userAnswer = null; // Clear input field
  }
}