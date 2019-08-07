import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario3Component1 } from './Scenario3/component1/component1.component1';
import { Scenario3Component2 } from './Scenario3/component2/component2.component2';

@NgModule({
  declarations: [
    AppComponent,
    Scenario3Component1,
    Scenario3Component2
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
