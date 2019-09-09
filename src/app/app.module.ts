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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    DancePageComponent,
    ShowcaseComponent,
    DetailSnippetBlockComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 60,
      "space": -2,
      "outerStrokeWidth": 2,
      "outerStrokeColor": "#808080",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 2,
      "title": [
        "working",
        "in",
        "progress"
      ],
      "titleFontSize": '12',
      "subtitleFontSize": '20',
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "clockwise": false
    })
  ],
  providers: [
    ShareService, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true,  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
