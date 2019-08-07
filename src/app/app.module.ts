import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Scenario5Component1 } from './Scenario5/component1/component1.component';
import { Scenario5Component2 } from './Scenario5/component2/component2.component';
import { Scenario5Component3 } from './Scenario5/component3/component3.component';



@NgModule({
  declarations: [
    AppComponent,
   
    Scenario5Component1,
    Scenario5Component2,
    Scenario5Component3,
   
    
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
