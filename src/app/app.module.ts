import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario6Component1 } from './Scenario6/component1/component1.component';
import { Scenario6Component2 } from './Scenario6/component2/component2.component';
import { Scenario6Component3 } from './Scenario6/component3/component3.component';


@NgModule({
  declarations: [
    AppComponent,
    Scenario6Component1,
    Scenario6Component2,
    Scenario6Component3
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
