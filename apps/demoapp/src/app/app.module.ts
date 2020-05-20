import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterModule } from '@libswithassets/greeter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GreeterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
