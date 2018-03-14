import { Component } from '@angular/core'
import { Content } from './content';

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: './content.component.html'
})
export class ContentComponent {
  pageTitle: string = "Content Dashboard"
    
  content: Content[] = [
    {
     barcode: '754325',
     program: 'Law and Order',
     episode: '413',
     sp_notes: 'http://google.com',
     qc_notes: 'cleared',
     updated_at: '3/13/18' 
  },
    {
     barcode: '753320',
     program: 'Criminal Minds',
     episode: '501',
     sp_notes: 'http://google.com',
     qc_notes: 'flash frame at 01:01:34',
     updated_at: '4/2/17' 
  },
    {
     barcode: '751000',
     program: 'CSI',
     episode: '101',
     sp_notes: 'http://google.com',
     qc_notes: 'n/a',
     updated_at: '3/1/18' 
  },
 ]
}