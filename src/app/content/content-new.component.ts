import { Component } from '@angular/core'
import { Content } from './content'

@Component({
    moduleId: module.id,
    selector: 'content-new',
    templateUrl: './content-new.component.html'
})
export class ContentNewComponent {
    content = new Content;
}