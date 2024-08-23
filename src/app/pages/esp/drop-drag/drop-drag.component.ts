import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FrasesService } from '../../../services/quotes.service';

@Component({
  selector: 'app-drop-drag',
  templateUrl: './drop-drag.component.html',
  styleUrls: ['./drop-drag.component.css']
})
export class DropDragComponent implements OnInit {
  sentence: string[] = [];
  scrambledWords: string[] = [];
  userSentence: string[] = [];
  isCorrect: boolean | null = null;
  showAlert: boolean = false;

  constructor(private frasesService: FrasesService) { }

  ngOnInit() {
    this.getRandomSentence();
  }

  getRandomSentence() {
    this.frasesService.getRandomSentence().subscribe(frase => {
      this.sentence = frase.split(' ');
      this.scrambledWords = this.shuffle([...this.sentence]);
      this.isCorrect = null;  // Reset the correctness state for the new sentence
    });
  }

  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  checkSentence() {
    const userSentenceStr = this.scrambledWords.join(' ').trim();
    const correctSentenceStr = this.sentence.join(' ').trim();

    this.isCorrect = userSentenceStr === correctSentenceStr;

    if (this.isCorrect) {
      this.showAlert = true;

      // Display the alert for 2 seconds, then load a new sentence
      setTimeout(() => {
        this.showAlert = false;
        this.getRandomSentence();
      }, 2000);
    }
  }
}