import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //async Pipe

  miObservable = interval(1000); // 0,1,2,3,4,5,6....
  


  //Json Pipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }    
  ]

  //keyValuePipe
  persona={
    'nombre':'Manuel',
    'direccion':'Málaga,España',
    'edad': 44
  }

  //i18nSelect  
  nombre:string='Susana';
  genero:string='femenino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['María', 'Pedro','Manuel'];
  clientesMapa ={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  borrarCliente(){
    if (this.clientes.length>0){
      this.clientes.pop();
    }
  }
  cambiarCliente(){
    this.nombre='Manuel';
    this.genero='masculino';
  }

}
