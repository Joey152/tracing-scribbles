import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'trsc-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(public activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.parent.url.subscribe((urlPath) => {
            console.log(urlPath)
        })
    }

    // TODO: should this move to a different service
    prependParentPath(path: string): Observable<string> {
        return this.activatedRoute.parent.url.pipe(
            map((segments: UrlSegment[]) => {
                let extra = '';
                for (const segment of segments) {
                    extra += '/' + segment.path; 
                }
                return extra + path;
            })
        )
    }
}
