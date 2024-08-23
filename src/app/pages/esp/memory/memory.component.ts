import { Component, OnInit, OnDestroy } from '@angular/core';
import { UnsplashService } from '../../../services/unplash.service';
import { MemoryCard } from '../../../models/memoryCards.model';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit, OnDestroy {
  cards: MemoryCard[] = [];
  cardImages: string[] = [];
  showImages = false;
  remainingTime = 10;
  gameStarted = false;
  timer: any;
  flippedCards: MemoryCard[] = [];
  matchedCards: MemoryCard[] = [];
  message: string = '';
  countdown: string = '';
  category: string = ''; // Variable para la categoría

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit() {
    // Inicialmente, no se carga ninguna categoría
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  loadImages() {
    this.unsplashService.getImagesByCategory(this.category, 8).subscribe(response => {
      this.cardImages = response.results.map((img: { urls: string; }) => img.urls.small);
      this.initializeCards();
    });
  }

  initializeCards() {
    this.cards = [...this.cardImages, ...this.cardImages]
      .map(image => ({ image, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);
  }

  startGame() {
    if (!this.category) {
      this.message = 'Por favor, ingrese una categoría.';
      return;
    }
    this.loadImages();
    this.showImages = true;
    this.gameStarted = true;
    this.remainingTime = 10;
    this.countdown = this.remainingTime.toString();
    this.startTimer();
    this.showCardsTemporarily();
  }

  resetGame() {
    this.cardImages = []; // Limpia las imágenes
    this.cards = []; // Limpia las tarjetas del juego
    this.showImages = false; // Oculta las imágenes
    this.gameStarted = false;
    this.remainingTime = 10;
    this.countdown = this.remainingTime.toString();
    this.message = '';
    this.category = ''; // Limpia la categoría
  }
  

  showCardsTemporarily() {
    setTimeout(() => {
      this.showImages = false;
    }, 10000);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.remainingTime--;
      this.countdown = this.remainingTime.toString();
      if (this.remainingTime === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  flipCard(card: MemoryCard) {
    // Si el juego no ha comenzado, hay dos tarjetas volteadas, o la tarjeta ya está volteada o emparejada, no hacer nada
    if (!this.gameStarted || this.flippedCards.length === 2 || card.flipped || card.matched || this.remainingTime > 0) return;
  
    card.flipped = true;
    this.flippedCards.push(card);
  
    if (this.flippedCards.length === 2) {
      setTimeout(() => this.checkMatch(), 500);
    }
  }
  

  checkMatch() {
    const [firstCard, secondCard] = this.flippedCards;

    if (firstCard.image === secondCard.image) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.message = '¡Descubriste una pareja!';
    } else {
      firstCard.flipped = false;
      secondCard.flipped = false;
      this.message = 'No es una pareja, sigue intentando.';
    }

    this.flippedCards = [];
  }


}
