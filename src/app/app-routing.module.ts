import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspComponent } from './pages/esp/esp.component';
import { EngComponent } from './pages/eng/eng.component';
import { HomeComponent } from './pages/home/home.component';
import { DropDragComponent } from './pages/esp/drop-drag/drop-drag.component';
import { MemoryComponent } from './pages/esp/memory/memory.component';
import { MathComponent } from './pages/esp/math/math.component';
import path from 'path';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
  },

  {
    path : 'juegos-en-español',
    component : EspComponent,
  },
  {
    path : 'juegos-en-inglés',
    component : EngComponent,
  },
  {
    path : 'ordena-la-frase',
    component : DropDragComponent,
  },

  {
    path : 'memoria',
    component : MemoryComponent,
  },

  {
    path : 'matematicas',
    component : MathComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
