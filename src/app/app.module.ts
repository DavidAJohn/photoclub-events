import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { SlugifyPipe } from './helpers/slugify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    EventsModule,
    AuthModule
  ],
  providers: [SlugifyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
