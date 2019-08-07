import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario4Component1 } from './Scenario4/component1/component1.component';
import { Scenario4Component2 } from './Scenario4/component2/component2.component';


@NgModule({
  declarations: [
    AppComponent,
    Scenario4Component1,
    Scenario4Component2
    
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
