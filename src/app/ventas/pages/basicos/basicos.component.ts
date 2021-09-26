import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string='manuel';
  nombreUpper:string='MANUEL';
  nombreCompleto:string='mAnuEl fErNáNdEz';

  fecha:Date=new Date(); // el dia de hoy
  constructor() { }

  ngOnInit(): void {
  }

}
