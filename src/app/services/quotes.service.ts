import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {
  private frases: string[] = [
    "El sol brilla.",
    "La luna es blanca.",
    "El perro corre.",
    "El gato duerme.",
    "Los pájaros vuelan.",
    "El niño juega.",
    "La maestra enseña.",
    "El río fluye.",
    "El árbol crece.",
    "La flor florece.",
    "El gato juega con la bola.",
    "Los pájaros cantan en el árbol.",
    "La niña lee un libro de cuentos.",
    "El sol brilla en el cielo azul.",
    "El perro corre en el parque grande.",
    "La abeja vuela sobre la flor amarilla.",
    "El niño come una manzana roja y jugosa.",
    "El viento sopla suavemente en la tarde.",
    "La lluvia cae sobre el techo de la casa.",
    "El sol se oculta en el horizonte.",
    "La luna llena ilumina el campo.",
    "El perro sigue al gato por el jardín.",
    "La abeja recolecta néctar de las flores.",
    "El niño juega con su pelota roja.",
    "La niña dibuja con sus crayones de colores.",
    "Las hojas crujen bajo los pies en otoño.",
    "El viento sopla las nubes en el cielo.",
    "Las estrellas parpadean en la noche oscura.",
    "El agua corre clara en el arroyo.",
    "El sol sale temprano en verano.",
    "El gato se acurruca junto al fuego.",
    "La lluvia moja las calles de la ciudad.",
    "El árbol pierde sus hojas en invierno.",
    "El niño salta en los charcos después de la lluvia.",
    "El pájaro canta al amanecer.",
    "La flor se abre con los primeros rayos del sol.",
    "El sol brilla fuerte en el mediodía.",
    "El río serpentea entre las montañas.",
    "El cielo se pinta de rosa al atardecer.",
    "Las mariposas vuelan entre las flores.",
    "El caracol avanza lentamente por el jardín.",
    "El perro duerme bajo la sombra del árbol.",
    "La abeja zumbadora trabaja sin descanso.",
    "El gato observa desde la ventana.",
    "Las estrellas guían a los navegantes en la noche.",
    "El niño escucha atentamente la historia.",
    "El fuego crepita en la chimenea.",
    "La luna se refleja en el lago tranquilo.",
    "El viento susurra entre las ramas.",
    "Las olas del mar bailan en la orilla.",
    "El sol brilla sobre las montañas nevadas.",
    "El gato persigue su sombra en el patio.",
    "El árbol ofrece sombra en el parque.",
    "El niño descubre un nido en el árbol.",
    "La mariposa se posa en la flor.",
    "El río canta mientras fluye.",
    "Las estrellas iluminan el cielo despejado.",
    "El perro persigue la pelota por el campo.",
    "El viento agita las hojas del árbol.",
    "El niño recoge conchas en la playa.",
    "La flor desprende un aroma dulce.",
    "El gato se estira perezosamente al sol.",
    "El pájaro vuela alto en el cielo azul.",
    "Las olas rompen suavemente en la orilla.",
    "El sol calienta la arena de la playa.",
    "El cielo se despeja después de la tormenta.",
    "El árbol se balancea con el viento.",
    "El río lleva troncos y ramas.",
    "La luna nueva apenas se ve.",
    "El perro husmea en los arbustos.",
    "El niño construye un castillo de arena.",
    "El gato ronronea satisfecho.",
    "El sol ilumina el camino.",
    "Las estrellas forman constelaciones en el cielo.",
    "El viento mueve las cortinas de la ventana.",
    "La abeja se posa en la flor amarilla.",
    "El niño sonríe al ver el arco iris.",
    "El agua del río es cristalina.",
    "El cielo nocturno está lleno de estrellas.",
    "El perro mueve la cola feliz.",
    "El sol calienta el día de verano.",
    "La luna aparece entre las nubes.",
    "El árbol está lleno de hojas verdes.",
    "El niño corre tras el papalote.",
    "Las olas se estrellan contra las rocas.",
    "El viento levanta la arena de la playa.",
    "El gato se esconde bajo la cama.",
    "Las estrellas titilan en la oscuridad.",
    "El perro salta alegremente al agua.",
    "El río fluye con fuerza después de la lluvia.",
    "El cielo está despejado y azul.",
    "La flor se cierra al anochecer.",
    "El niño se balancea en el columpio.",
    "El sol desaparece tras las montañas.",
    "Las estrellas caen como lluvia en el cielo.",
    "El viento sopla frío en invierno.",
    "El gato se acurruca en el sofá.",
    "El agua de la fuente es refrescante.",
    "El sol ilumina las montañas doradas.",
    "Las nubes cubren el cielo gris.",
    "El perro corre por el campo abierto.",
    "La luna se refleja en el agua calma.",
    "Las estrellas llenan el cielo de luz.",
    "El viento hace girar el molino.",
    "El gato juega con una bola de lana.",
    "El niño corre por el campo verde.",
    "Las olas arrastran la arena dorada.",
    "El árbol se sacude con el viento.",
    "El sol se asoma entre las nubes.",
    "El agua de la cascada cae con fuerza.",
    "La luna ilumina el camino nocturno.",
    "Las estrellas brillan sobre el desierto.",
    "El viento arrastra las hojas secas.",
    "El gato se estira al despertar.",
    "El niño recoge flores en el campo.",
    "El perro se revuelca en la hierba fresca.",
  ];

  constructor() { }

  getFrases(): Observable<string[]> {
    return of(this.frases);
  }

  getRandomSentence(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.frases.length);
    return of(this.frases[randomIndex]);
  }

  getFilteredSentence(wordCount: number): Observable<string | null> {
    const filteredSentences = this.frases.filter(frase => frase.split(' ').length === wordCount);
    if (filteredSentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredSentences.length);
      return of(filteredSentences[randomIndex]);
    } else {
      return of(null); // Devuelve null si no se encuentran oraciones con esa cantidad de palabras
    }
  }
}
