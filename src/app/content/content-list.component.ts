import { Component } from '@angular/core';
import { Content } from './content';

@Component({
    moduleId: module.id,
    selector: 'content-list',
    templateUrl: 'content-list.component.html'
})
export class ContentListComponent {
    contentOne: Content = new Content('754325', 'Law and Order', 413, 'passed', 'http://google.com', 'complete', 'sent to QC', 'approved', 'mild pixelation at 01:03:45 okay to air per TS', '12/5/15')
    contentTwo: Content = new Content('750154', 'CSI', 101, 'passed', 'http://google.com', 'complete', 'sent to QC', 'approved', 'grotesque scene at 01:40:39 okay to air per S&P', '1/23/16')
    contentThree: Content = new Content('743182', 'Flashpoint', 319, 'passed', 'http://google.com', 'complete', 'sent to QC', 'rejected', '10 seconds of black at 01:12:13', '12/3/18')
    
    content: Content[] = [
        this.contentOne, 
        this.contentTwo, 
        this.contentThree
    ]
}