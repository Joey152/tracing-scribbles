import { Injectable } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ModuleRouteService {

    constructor(private activatedRoute: ActivatedRoute) { }

    prependParentPath(path: string): Observable<string> {

        if (this.activatedRoute.parent == null) {
            return of(path);
        }

        return this.activatedRoute.parent.url.pipe(
            map((segments: UrlSegment[]) => {
                let extra = '';
                for (const segment of segments) {
                    extra += '/' + segment.path;
                }
                return extra + path;
            })
        );
    }
}
