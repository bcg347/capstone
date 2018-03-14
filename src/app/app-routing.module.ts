import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ContentComponent } from './content/content.component';
import { ContentNewComponent } from './content/content-new.component';
import { ContentRejectionsComponent } from './content/content-rejected.component';
import { ContentRfaComponent } from './content/content-rfa.component';
import { ContentProgressComponent } from './content/content-progress.component';
import { ContentListComponent } from './content/content-list.component';

import { AvidIngestComponent } from './workflow/avidingest.component';
import { SpComponent } from './workflow/sp.component';
import { EditComponent } from './workflow/edit.component';
import { ServerIngestComponent } from './workflow/serveringest.component';
import { QcComponent } from './workflow/qc.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'content', component: ContentComponent },
  { path: 'content/new', component: ContentNewComponent },
  { path: 'content/rejections', component: ContentRejectionsComponent },
  { path: 'content/rfa', component: ContentRfaComponent },
  { path: 'content/inprogress', component: ContentProgressComponent },
  { path: 'content/list', component: ContentListComponent },
  { path: 'avidingest', component: AvidIngestComponent },
  { path: 'sp', component: SpComponent },
  { path: 'edit', component: EditComponent },
  { path: 'qc', component: QcComponent },
  { path: 'serveringest', component: ServerIngestComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}