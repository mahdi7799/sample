import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideComponent } from './side/side.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TweetsComponent } from './tweets/tweets.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SugguustComponent } from './sugguust/sugguust.component';
import {MatInputModule} from '@angular/material/input'




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideComponent,
    MainComponent,
    ProfileCardComponent,
    TweetsComponent,
    SugguustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
