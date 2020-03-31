import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ItCmComponent } from './it-cm/it-cm.component';
import { ClPkComponent } from './it-cm/cl-pk.component';
import { ClDsComponent } from './it-cm/cl-ds.component';
import { SizerDirective } from './databinding/sizer.directive';
import { UnlessDirective } from './databinding/unless.directive';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    MainContentComponent,
    ItCmComponent,
    ClPkComponent,
    ClDsComponent,
    SizerDirective,
    UnlessDirective,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
