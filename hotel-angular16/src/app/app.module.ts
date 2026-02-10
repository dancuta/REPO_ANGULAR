import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// modules
import { BookingModule } from './booking/booking.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { SignalComponentComponent } from './signal/signal-component/signal-component.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    ContentComponent,
    AboutComponent,
    SignalComponentComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // app modules
    BookingModule,
  ],
  exports: [HeaderComponent],  // ⬅️ REQUIRED
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
