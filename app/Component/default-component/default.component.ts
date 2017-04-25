import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'default.component.html'
})

export class DefaultComponent {

    showMenu() {
        if (sessionStorage.getItem('token')) {
            return true;
        }
        return false;
    }
}