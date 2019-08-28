import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse/browse.component';
import { HomeRoutingModule } from './home-routing.module';
import { SketchComponent } from './sketch/sketch.component';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        BrowseComponent,
        HomeComponent,
        SketchComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
