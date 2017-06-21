
import { Component } from '@angular/core';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    private firstName: string;
    private lastName: string;

    constructor() {
        this.firstName = "Fraser";
        this.lastName = "McArthur";
    }
}
