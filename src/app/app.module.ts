import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { EspComponent } from './pages/esp/esp.component';
import { EngComponent } from './pages/eng/eng.component';
import { HomeComponent } from './pages/home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { provideClientHydration } from '@angular/platform-browser';
import { DropDragComponent } from './pages/esp/drop-drag/drop-drag.component';
import { MemoryComponent } from './pages/esp/memory/memory.component';
import { MathComponent } from './pages/esp/math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EspComponent,
    EngComponent,
    HomeComponent,
    DropDragComponent,
    MemoryComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }