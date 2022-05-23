import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienciaCardComponent } from './components/experiencias/experiencia-card/experiencia-card.component';
import { ExperienciaCardAddComponent } from './components/experiencias/experiencia-card-add/experiencia-card-add.component';
import { ProgressBarAddComponent } from './components/progress-bar-add/progress-bar-add.component';
import { EducacionCardComponent } from './components/educacion/educacion-card/educacion-card.component';
import { EducacionCardAddComponent } from './components/educacion/educacion-card-add/educacion-card-add.component';
import { ProyectosCardAddComponent } from './components/proyectos/proyectos-card-add/proyectos-card-add.component';
import { ProyectosCardComponent } from './components/proyectos/proyectos-card/proyectos-card.component';
import { ButtonEditDeleteComponent } from './components/button-edit-delete/button-edit-delete.component';
import { MainComponent } from './components/main/main.component';

import { RouterModule, Routes } from '@angular/router';
import { EducacionCardEditComponent } from './components/educacion/educacion-card-edit/educacion-card-edit.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ProgressBarComponent,
    ProgressBarsComponent,
    ExperienciaCardComponent,
    ExperienciaCardAddComponent,
    ProgressBarAddComponent,
    EducacionCardComponent,
    EducacionCardAddComponent,
    ProyectosCardAddComponent,
    ProyectosCardComponent,
    ButtonEditDeleteComponent,
    EducacionCardEditComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "",
      "subtitle":"",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": false}),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
