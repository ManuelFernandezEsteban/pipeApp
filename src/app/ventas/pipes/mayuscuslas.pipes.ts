import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(cadena:string,enMayusculas:boolean=true):string {

        return (enMayusculas) 
            ?cadena.toUpperCase()
            :cadena.toLowerCase()
    }

}