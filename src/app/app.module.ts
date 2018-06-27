import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitalComponent } from './digital/digital.component';
import { SoftwareComponent } from './software/software.component';
import { PrimeComponent } from './prime/prime.component';
import { SampleComponent } from './sample/sample.component';
import { OutputComponent } from './output/output.component';
import { ConsoleComponent } from './console/console.component';
import { CountComponent } from './count/count.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalComponent,
    SoftwareComponent,
    PrimeComponent,
    SampleComponent,
    OutputComponent,
    ConsoleComponent,
    CountComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
