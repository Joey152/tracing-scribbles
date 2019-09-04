import { Component, OnInit } from '@angular/core';
import { ModuleRouteService } from '../common/module-route.service';

@Component({
    selector: 'trsc-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    providers: [ModuleRouteService]
})
export class AuthComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
