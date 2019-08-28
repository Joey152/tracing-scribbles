import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SketchComponent } from './sketch/sketch.component';
import { HomeComponent } from './home.component';
import { BrowseComponent } from './browse/browse.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'sketch', pathMatch: 'full'},
                    { path: 'sketch', component: SketchComponent },
                    { path: 'browse', component: BrowseComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
