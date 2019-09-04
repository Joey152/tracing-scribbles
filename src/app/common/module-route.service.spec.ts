import { TestBed } from '@angular/core/testing';

import { ModuleRouteService } from './module-route.service';

describe('ModuleRouteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ModuleRouteService = TestBed.get(ModuleRouteService);
        expect(service).toBeTruthy();
    });
});
