import { Component, OnInit } from '@angular/core';
import { ModuleRouteService } from '../common/module-route.service';

@Component({
    selector: 'trsc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ModuleRouteService]
})
export class HomeComponent implements OnInit {

    constructor(public moduleRouteService: ModuleRouteService) { }

    ngOnInit() { }
}
