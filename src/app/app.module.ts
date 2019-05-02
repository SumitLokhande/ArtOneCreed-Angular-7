import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/http-services/interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShareService } from './services/share.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { DancePageComponent } from './pages/dance-page/dance-page.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DetailSnippetBlockComponent } from './components/detail-snippet-block/detail-snippet-block.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    DancePageComponent,
    ShowcaseComponent,
    DetailSnippetBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ShareService, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true,  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
