import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterReducer } from './Reducers/counter.reducer';
import { MyCounterComponent } from './Components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:CounterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
