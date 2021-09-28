import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

//modulo personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import  localeEs  from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID,useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
