import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContentComponent } from './content/content.component';
import { ContentNewComponent } from './content/content-new.component';
import { ContentRejectionsComponent } from './content/content-rejected.component';
import { ContentRfaComponent } from './content/content-rfa.component';
import { ContentProgressComponent } from './content/content-progress.component';
import { ContentListComponent } from './content/content-list.component';
import { ContentShowComponent } from './content/content-show.component';

import { AvidIngestComponent } from './workflow/avidingest.component';
import { SpComponent } from './workflow/sp.component';
import { EditComponent } from './workflow/edit.component';
import { ServerIngestComponent } from './workflow/serveringest.component';
import { QcComponent } from './workflow/qc.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    ContentComponent,
    ContentNewComponent,
    ContentRejectionsComponent,
    ContentRfaComponent,
    ContentProgressComponent,
    ContentListComponent,
    AvidIngestComponent,
    SpComponent,
    EditComponent,
    ServerIngestComponent,
    QcComponent,
    ContentShowComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
