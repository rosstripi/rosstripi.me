import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

import { RssfeedService } from './services/rssfeed.service'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'rosstripi'),
    AngularFireDatabaseModule
  ],
  providers: [RssfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
