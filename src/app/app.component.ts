import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] =[
    {nombre:"Tomas Gonzalez",estado:"Promocionado"},
    {nombre:"Camilo Acuña",estado:"Regular"},
    {nombre:"Juan Garcia",estado:"Promocionado"},
    {nombre:"Yai Amor",estado:"Regular"},
    {nombre:"Nicolar Donado",estado:"Libre"}
  ]

  mostrar = true;

  toogle():void{
    this.mostrar = !this.mostrar;
  }

}

